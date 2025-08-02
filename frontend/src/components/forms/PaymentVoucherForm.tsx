// Folder: frontend/src/components/forms/PaymentVoucherForm.tsx

'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useState } from "react"
import api from "../../../services/api";

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
})



interface PaymentVoucherFormProps {
  prefill?: Record<string, string>;
  onSuccess?: () => void;
}


export default function PaymentVoucherForm({ prefill, onSuccess }: PaymentVoucherFormProps) {
  const [loading, setLoading] = useState(false)

  const defaultValues = {
    payeur: prefill?.payeur || '',
    montant: prefill?.montant || '',
    date: prefill?.date || prefill?.['date-initial'] || prefill?.['DATE-INITIAL'] || '',
    description: prefill?.description || '',
    mode: prefill?.mode || '',
    file: undefined,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(voucherSchema),
    defaultValues,
  })

  const [showModal, setShowModal] = useState(false);
  const onSubmit = async (data: z.infer<typeof voucherSchema>) => {
    setLoading(true)
    try {
      // 1. Upload document to Mayan (only file and document_type_id=3)
      const formData = new FormData();
      formData.append("file", data.file);
      formData.append("document_type_id", "3");

      await api.post("/mayan/documents", formData, {
        headers: {
          "Accept": "application/json",
          // Let browser set Content-Type for FormData
        },
      });

      // 2. Save voucher in backend DB
      const backendForm = new FormData();
      backendForm.append("payee", data.payeur);
      backendForm.append("amount", String(data.montant));
      backendForm.append("description", data.description || "");
      backendForm.append("date", data.date);
      backendForm.append("file", data.file);
      await api.post("/payment-vouchers", backendForm, {
        headers: { "Accept": "application/json" },
      });

      setShowModal(true);
      if (onSuccess) onSuccess();
      reset();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Une erreur inconnue est survenue");
    } finally {
      setLoading(false);
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
              <Label htmlFor="payeur">Payeur</Label>
              <Input id="payeur" placeholder="Nom du payeur" {...register("payeur")}/>
              {errors.payeur && <p className="text-sm text-red-500">{errors.payeur.message}</p>}
            </div>

            <div>
              <Label htmlFor="montant">Montant</Label>
              <Input id="montant" type="number" step="0.01" placeholder="Montant en FCFA" {...register("montant")}/>
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
              <Input
                id="file"
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={(e) => {
                  const files = (e.target as HTMLInputElement).files;
                  if (files && files[0]) {
                    setValue("file", files[0], { shouldValidate: true });
                  }
                }}
              />
              {/* Register file field for validation tracking */}
              <input type="hidden" {...register("file")}/>
              {errors.file && typeof errors.file.message === 'string' && (
                <p className="text-sm text-red-500">{errors.file.message}</p>
              )}
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Soumission..." : "Enregistrer"}
            </Button>
          </form>
        </CardContent>
      </Card>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Enregistré avec succès</h2>
            <p className="mb-6">Le paiement a été soumis et archivé.</p>
            <Button onClick={() => setShowModal(false)} className="bg-green-600 text-white">Fermer</Button>
          </div>
        </div>
      )}
    </>
  )
}
