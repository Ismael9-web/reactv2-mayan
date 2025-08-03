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
    console.log('Step 1: Fetching document IDs from document_types/3/documents/');
    // 1. Get all the .results[].id from GET http://localhost/api/v4/document_types/3/documents/
    const documentsType3Response = await fetchDataWithRetry(`${BASE_URL}/document_types/3/documents/`, { headers: HEADERS });
    const documentIdsFromType3 = documentsType3Response.results.map(doc => doc.id);

    if (documentIdsFromType3.length === 0) {
      console.log('No documents found for document_type 3. Exiting.');
      return [];
    }
    console.log(`Found ${documentIdsFromType3.length} documents from type 3.`);

    console.log('Step 2 & 3: Fetching metadata and cross-checking with document_types/2/documents/');

    // Fetch all document IDs from document_types/2/documents/ concurrently
    const documentsType2Response = await fetchDataWithRetry(`${BASE_URL}/document_types/2/documents/`, { headers: HEADERS });
    const documentIdsFromType2 = new Set(documentsType2Response.results.map(doc => String(doc.id))); // Use Set for efficient lookup and convert to string

    const processedDocuments = [];

    // Process each document ID from type 3
    for (const docId of documentIdsFromType3) {
      try {
        const metadataResponse = await fetchDataWithRetry(`${BASE_URL}/documents/${docId}/metadata/`, { headers: HEADERS });
        let documentIdFromMetadata = null;
        const allMetadataForDoc = {}; // To store all metadata for the current document

        // Iterate through metadata results to find "Document_ID" and collect all other metadata
        for (const meta of metadataResponse.results) {
          allMetadataForDoc[meta.metadata_type.label] = meta.value; // Store all metadata as "Label: Value"

          if (meta.metadata_type.label === 'Document_ID') {
            documentIdFromMetadata = String(meta.value); // Convert to string for consistent comparison
          }
        }

        let paymentStatus = 'pending';
        let buttonText = 'Pay'; // Default button text

        // Check if the Document_ID from metadata matches any ID from document_types/2/documents/
        if (documentIdFromMetadata && documentIdsFromType2.has(documentIdFromMetadata)) {
          paymentStatus = 'paid';
          buttonText = 'Edit'; // Change button text if paid
        }

        processedDocuments.push({
          originalDocumentId: docId,
          metadata: allMetadataForDoc,
          paymentStatus: paymentStatus,
          buttonText: buttonText
        });

      } catch (error) {
        console.error(`Error processing document ID ${docId}:`, error);
        processedDocuments.push({
          originalDocumentId: docId,
          metadata: {},
          paymentStatus: 'error',
          buttonText: 'Error',
          errorMessage: error.message
        });
      }
    }

    console.log('Processing complete. Here are the results:');
    console.log(JSON.stringify(processedDocuments, null, 2));

    // Example of how you might use this data in a frontend (conceptual, not runnable HTML)
    // This part would typically be handled by your React/TypeScript frontend framework
    // For demonstration, we'll just log it.
    processedDocuments.forEach(doc => {
      console.log(`--- Document ID: ${doc.originalDocumentId} ---`);
      console.log(`  Payment Status: ${doc.paymentStatus}`);
      console.log(`  Button to display: ${doc.buttonText}`);
      console.log('  All Metadata:');
      for (const label in doc.metadata) {
        console.log(`    ${label}: ${doc.metadata[label]}`);
      }
    });

    return processedDocuments;

  } catch (error) {
    console.error('An unrecoverable error occurred during payment status check:', error);
    return [];
  }
}

// Execute the main function
checkPaymentStatus();
