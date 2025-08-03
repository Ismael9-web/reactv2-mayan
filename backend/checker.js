// Define the base URL for your API
const BASE_URL = 'http://localhost/api/v4';

// Define the headers including the CSRF token and session ID
const HEADERS = {
  'accept': 'application/json',
  'X-CSRFTOKEN': 'nzHFjEgGiW9MztaYjIJtsiUch51GZjmXOfNIpebYZn8Uk3849H1mfe4CQhgU7mVd',
  'Cookie': 'sessionid=bqc6ixfxn50wk3lye7w1rjmzul17qjw8'
};

/**
 * Fetches data from a given URL with specified headers.
 * Implements exponential backoff for retries.
 * @param {string} url - The URL to fetch from.
 * @param {object} options - Fetch options (e.g., headers, method).
 * @param {number} retries - Number of retry attempts.
 * @param {number} delay - Initial delay for exponential backoff.
 * @returns {Promise<object>} - The JSON response data.
 */
async function fetchDataWithRetry(url, options = {}, retries = 3, delay = 1000) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      // If response is not OK, throw an error to trigger retry or catch
      throw new Error(`HTTP error! Status: ${response.status} from ${url}`);
    }
    return await response.json();
  } catch (error) {
    if (retries > 0) {
      console.warn(`Retrying ${url} in ${delay / 1000}s... (${retries} retries left)`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchDataWithRetry(url, options, retries - 1, delay * 2); // Exponential backoff
    } else {
      console.error(`Failed to fetch ${url} after multiple retries:`, error);
      throw error; // Re-throw error if retries exhausted
    }
  }
}

/**
 * Main function to perform the payment status check.
 */
async function checkPaymentStatus() {
  try {
    console.log('Step 1: Fetching Beneficiaries documents from workflow_templates/1/states/3/documents/');
    // Part 1: Get all the .results[].id from GET http://localhost/api/v4/workflow_templates/1/states/3/documents/
    const beneficiariesResponse = await fetchDataWithRetry(`${BASE_URL}/workflow_templates/1/states/3/documents/`, { headers: HEADERS });
    const beneficiaryDocumentIds = beneficiariesResponse.results.map(doc => doc.id);

    if (beneficiaryDocumentIds.length === 0) {
      console.log('No beneficiaries documents found. Exiting.');
      return [];
    }
    console.log(`Found ${beneficiaryDocumentIds.length} beneficiaries documents.`);

    console.log('Step 2: Fetching payment confirmation documents from document_types/3/documents/ and their metadata.');
    // Part 2: Get all the .results[].id from GET http://localhost/api/v4/document_types/3/documents/
    const paymentConfirmationDocsResponse = await fetchDataWithRetry(`${BASE_URL}/document_types/3/documents/`, { headers: HEADERS });
    const paymentConfirmationDocIds = paymentConfirmationDocsResponse.results.map(doc => doc.id);

    // This map will store: { "Document_ID_from_payment_metadata": { date: "YYYY-MM-DD", originalPaymentDocId: 123 } }
    // This allows efficient lookup of payment confirmation details by the Document_ID found in beneficiary metadata.
    const confirmedPaymentsMap = new Map();

    // Fetch metadata for each payment confirmation document concurrently
    const metadataPromises = paymentConfirmationDocIds.map(async (paymentDocId) => {
      try {
        const metadataResponse = await fetchDataWithRetry(`${BASE_URL}/documents/${paymentDocId}/metadata/`, { headers: HEADERS });
        let docIdFromPaymentMetadata = null; // This will be the Document_ID from the payment confirmation's metadata
        let dateFromPaymentMetadata = null; // This will be the Date from the payment confirmation's metadata

        for (const meta of metadataResponse.results) {
          if (meta.metadata_type.label === 'Document_ID') {
            docIdFromPaymentMetadata = String(meta.value); // Convert to string for consistent map keys
          }
          if (meta.metadata_type.label === 'Date') {
            dateFromPaymentMetadata = meta.value;
          }
        }

        // Only add to map if both Document_ID and Date metadata are found for the payment confirmation document
        if (docIdFromPaymentMetadata && dateFromPaymentMetadata) {
          confirmedPaymentsMap.set(docIdFromPaymentMetadata, {
            date: dateFromPaymentMetadata,
            originalPaymentDocId: paymentDocId // Store the original ID of the payment confirmation document
          });
        }
      } catch (error) {
        console.error(`Error fetching metadata for payment document ID ${paymentDocId}:`, error);
      }
    });

    // Wait for all metadata fetching promises to resolve before proceeding
    await Promise.all(metadataPromises);

    console.log(`Processed ${confirmedPaymentsMap.size} payment confirmations with Document_ID and Date metadata.`);

    const processedBeneficiaries = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-indexed (0 for January)
    const currentYear = currentDate.getFullYear();

    // Part 3, 4, 5: Iterate through Beneficiaries and determine status
    for (const beneficiaryId of beneficiaryDocumentIds) {
      let paymentStatus = 'pending';
      let buttonText = 'Pay'; // Default button text

      // Part 3: The id from Q1 (beneficiaryId) should match the Document_ID from the metadata of documents obtained in Q2.
      // We check if the beneficiaryId exists as a key in our confirmedPaymentsMap.
      // The keys of confirmedPaymentsMap are the 'Document_ID' values from payment confirmation metadata.
      const paymentInfo = confirmedPaymentsMap.get(String(beneficiaryId)); // Ensure beneficiaryId is string for map lookup

      if (paymentInfo) { // If a matching payment confirmation was found for this beneficiaryId
        const paymentDate = new Date(paymentInfo.date); // Create Date object from the payment confirmation's date metadata

        // Part 4: The Date clarifies if the beneficiary has the right to be paid or not
        // because it tells a payment happened for this month or not.
        // Check if the payment date is for the current month and year.
        if (paymentDate.getMonth() === currentMonth && paymentDate.getFullYear() === currentYear) {
          // Part 5: Condition A
          paymentStatus = 'payé';
          buttonText = 'Modifier';
        }
        // If paymentInfo exists but its date is NOT for the current month/year,
        // the status remains 'pending' and button 'Pay' (as per default initialization).
      }

      processedBeneficiaries.push({
        beneficiaryId: beneficiaryId,
        paymentStatus: paymentStatus,
        buttonText: buttonText,
        // Optionally, include the original payment confirmation document ID if a match was found
        paymentConfirmationDocId: paymentInfo ? paymentInfo.originalPaymentDocId : null
      });
    }

    console.log('Processing complete. Here are the results for beneficiaries:');
    console.log(JSON.stringify(processedBeneficiaries, null, 2));

    // For demonstration, we'll just log it.
    processedBeneficiaries.forEach(doc => {
      console.log(`--- Beneficiary ID: ${doc.beneficiaryId} ---`);
      console.log(`  Payment Status: ${doc.paymentStatus}`);
      console.log(`  Button to display: ${doc.buttonText}`);
      if (doc.paymentConfirmationDocId) {
        console.log(`  Confirmed by Payment Document ID: ${doc.paymentConfirmationDocId}`);
      }
    });

    return processedBeneficiaries;

  } catch (error) {
    console.error('An unrecoverable error occurred during payment status check:', error);
    return [];
  }
}

// Execute the main function
checkPaymentStatus();
