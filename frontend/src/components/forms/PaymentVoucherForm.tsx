// Folder: frontend/src/components/forms/PaymentVoucherForm.tsx

'use client'

import { useForm } from "react-hook-form"
import { Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"
import api from "../../../services/api";
import type { AxiosError } from "axios";

const voucherSchema = z.object({
  payeur: z.string().min(1, "Le payeur est requis"),
  montant: z.preprocess(
    (val) => (typeof val === "string" && val.trim() !== "" ? Number(val) : val),
    z.number().min(0.01, "Le montant est requis")
  ),
  description: z.string().optional(),
  date: z.string().min(1, "La date est requise"),
  mode: z.string().min(1, "Le mode de paiement est requis"),
  file: z
    .any()
    .refine((file) => file instanceof File, { message: "Le fichier est requis" }),
  statut: z.string().default('payé'),
})



interface PaymentVoucherFormProps {
  prefill?: Record<string, string>;
  documentId?: string;
  onSuccess?: (documentId?: string) => void;
}


export default function PaymentVoucherForm({ prefill, documentId, onSuccess }: PaymentVoucherFormProps) {
  const [loading, setLoading] = useState(false)

  const defaultValues = {
    payeur: prefill?.payeur || '',
    montant: prefill?.montant || '',
    date: prefill?.date || prefill?.['date-initial'] || prefill?.['DATE-INITIAL'] || '',
    description: prefill?.description || '',
    mode: prefill?.mode || '',
    file: undefined,
    statut: 'payé',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(voucherSchema),
    defaultValues,
  })

  const [showModal, setShowModal] = useState(false);
  // Animation state for button
  const [buttonAnim, setButtonAnim] = useState(false);
  const onSubmit = async (data: z.infer<typeof voucherSchema>) => {
    setLoading(true)
    setButtonAnim(true)
    try {
      // Ensure file is present and is a File object
      if (!(data.file instanceof File)) {
        toast.error("Le fichier est requis et doit être un fichier valide.");
        setLoading(false);
        return;
      }
      // 1. Upload document to Mayan (only file and document_type_id=3)
      const formData = new FormData();
      formData.append("file", data.file, data.file.name);
      formData.append("document_type_id", "3");

      // Debug: log FormData keys and file info before sending
      for (const pair of formData.entries()) {
        if (pair[0] === "file" && pair[1] instanceof File) {
          console.log("FormData file name:", pair[1].name);
          console.log("FormData file type:", pair[1].type);
          console.log("FormData file size:", pair[1].size);
        } else {
          console.log(`FormData field: ${pair[0]} =`, pair[1]);
        }
      }

      // Do NOT set Content-Type for FormData; browser will set it
      // Prevent Axios from serializing FormData to JSON
      const uploadRes = await api.post("/mayan/documents", formData, {
        transformRequest: [(data) => data],
      });

      // Get document_id and document_type_id from response
      const uploadedDocumentId = uploadRes.data?.data?.id;
      if (!uploadedDocumentId) {
        toast.error("Document ID non reçu après l'upload Mayan.");
        setLoading(false);
        return;
      }

      // Use the value shown in the disabled Document ID field for Document_ID metadata
      const documentIdFieldValue = typeof prefill?.documentId !== "undefined" && prefill.documentId !== undefined && prefill.documentId !== null && prefill.documentId !== ''
        ? prefill.documentId
        : (typeof documentId !== "undefined" && documentId !== null ? documentId : "");

      // Map metadata fields for document_type_id=3, using correct metadata_type_id values
      const metadataMap = [
        { field: "payeur", value: data.payeur, metadata_type_id: 10, label: "Payeur" },
        { field: "date", value: data.date, metadata_type_id: 11, label: "Date" },
        { field: "montant", value: String(data.montant), metadata_type_id: 12, label: "Montant" },
        { field: "mode", value: data.mode, metadata_type_id: 13, label: "Mode" },
        { field: "statut", value: data.statut, metadata_type_id: 17, label: "Statut" },
        { field: "description", value: data.description || "", metadata_type_id: 16, label: "Description" },
        { field: "documentId", value: documentIdFieldValue, metadata_type_id: 18, label: "Document_ID" },
      ];

      // Submit each metadata field to Mayan (only one POST per type)
      for (const meta of metadataMap) {
        // Only send documentId if it exists
        if (meta.field === "documentId" && !meta.value) continue;
        try {
          await api.post(`/mayan/documents/${uploadedDocumentId}/metadata`, {
            metadata_type_id: meta.metadata_type_id,
            metadata_type: { name: meta.label, label: meta.label },
            value: meta.value,
          });
        } catch (err) {
          const axiosErr = err as AxiosError<{ detail?: string }>;
          if (axiosErr.response && axiosErr.response.data && axiosErr.response.data.detail) {
            toast.error(`Erreur metadata ${meta.label}: ${axiosErr.response.data.detail}`);
          } else {
            console.error(`Erreur lors de l'ajout du metadata ${meta.label}:`, err);
          }
        }
      }

      // 2. Save voucher in backend DB
      const backendForm = new FormData();
      backendForm.append("payee", data.payeur);
      backendForm.append("amount", String(data.montant));
      backendForm.append("description", data.description || "");
      backendForm.append("date", data.date);
      backendForm.append("file", data.file);
      for (const pair of backendForm.entries()) {
        if (pair[0] === "file" && pair[1] instanceof File) {
          console.log("Backend FormData file name:", pair[1].name);
        }
      }
      // await api.post("/payment-vouchers", backendForm, {
      //   transformRequest: [(data) => data],
      // });

      setShowModal(true);
      if (onSuccess) onSuccess(documentIdFieldValue);
      reset();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Une erreur inconnue est survenue");
    } finally {
      setLoading(false);
      setTimeout(() => setButtonAnim(false), 600); // Reset animation after 600ms
    }
  }

  return (
    <>
      <Card className="max-w-xl mx-auto p-4">
        <CardHeader>
          <CardTitle>Enregistrement du paiement</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="documentId">Document ID</Label>
              <Input
                id="documentId"
                value={typeof prefill?.documentId !== "undefined" && prefill.documentId !== undefined && prefill.documentId !== null && prefill.documentId !== ''
                  ? prefill.documentId
                  : (typeof documentId !== "undefined" && documentId !== null ? documentId : "")}
                disabled
                readOnly
                className={((typeof prefill?.documentId !== "undefined" && prefill.documentId) || documentId) ? "" : "opacity-50"}
              />
            </div>
            <div>
              <Label htmlFor="payeur">Payeur</Label>
              <Input id="payeur" placeholder="Nom du payeur" {...register("payeur")}/>
              {errors.payeur && <p className="text-sm text-red-500">{errors.payeur.message}</p>}
            </div>
            <div>
              <Label htmlFor="montant">Montant</Label>
              <Input id="montant" type="number" step="0.01" placeholder="Montant en Fdj" {...register("montant")}/>
              {errors.montant && <p className="text-sm text-red-500">{errors.montant.message}</p>}
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" {...register("date")}/>
              {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
            </div>
            <div>
              <Label htmlFor="mode">Mode de paiement</Label>
              <Input id="mode" placeholder="Espèces, Chèque, Virement..." {...register("mode")}/>
              {errors.mode && <p className="text-sm text-red-500">{errors.mode.message}</p>}
            </div>
            {/* Statut field is hidden, value is always 'payé' */}
            <input type="hidden" {...register("statut")}/>
            <div>
              <Label htmlFor="description">Description</Label>
              <textarea
                id="description"
                className="w-full border rounded px-3 py-2"
                placeholder="Description (optionnelle)"
                {...register("description")}
              />
            </div>

            <div>
              <Label htmlFor="file">Joindre un document</Label>
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <input
                    id="file"
                    type="file"
                    accept=".pdf,.jpg,.png"
                    title="Joindre un document"
                    placeholder="Choisissez un fichier à joindre"
                    onChange={(e) => {
                      const files = (e.target as HTMLInputElement).files;
                      if (files && files.length > 0) {
                        field.onChange(files[0]);
                      } else {
                        field.onChange(undefined);
                      }
                    }}
                  />
                )}
              />
              {errors.file && typeof errors.file.message === 'string' && (
                <p className="text-sm text-red-500">{errors.file.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={buttonAnim ? "animate-pulse" : ""}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z" />
                  </svg>
                  Soumission...
                </span>
              ) : "Enregistrer"}
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* Success Modal: visible when showModal is true after successful submission */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <svg className="h-16 w-16 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="white" />
                <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-green-600">Enregistré avec succès</h2>
            <p className="mb-6">Le paiement a été soumis et archivé.</p>
            <Button onClick={() => setShowModal(false)} className="bg-green-600 text-white">Fermer</Button>
          </div>
        </div>
      )}
    </>
  )
}
