// Folder: frontend/src/components/forms/PaymentVoucherForm.tsx

'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
// Update the import path below to the correct relative path if needed
import { toast } from "sonner"
import { useState } from "react"

const voucherSchema = z.object({
  payee: z.string().min(1, "Payee is required"),
  amount: z.preprocess(
    (val) => (typeof val === "string" && val.trim() !== "" ? Number(val) : val),
    z.number().min(0.01, "Amount is required")
  ),
  description: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  file: z
    .any()
    .refine((file) => file instanceof File, { message: "File is required" }),
})



interface PaymentVoucherFormProps {
  prefill?: Record<string, string>;
}


export default function PaymentVoucherForm({ prefill }: PaymentVoucherFormProps) {
  const [loading, setLoading] = useState(false)

  const defaultValues = {
    payee: prefill?.payee || '',
    amount: prefill?.amount || '',
    date: prefill?.date || prefill?.['date-initial'] || prefill?.['DATE-INITIAL'] || '',
    description: prefill?.description || '',
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

  const onSubmit = async (data: z.infer<typeof voucherSchema>) => {
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append("payee", data.payee)
      formData.append("amount", String(data.amount))
      formData.append("description", data.description || "")
      formData.append("date", data.date)
      if (data.file instanceof File) {
        formData.append("file", data.file)
      }
      const res = await fetch("/api/payment-vouchers", {
        method: "POST",
        body: formData,
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || "Failed")
      toast.success("Voucher submitted.")
      reset()
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-xl mx-auto p-4">
      <CardHeader>
        <CardTitle>Create Payment Voucher</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="payee">Payee</Label>
            <Input id="payee" {...register("payee")} />
            {errors.payee && <p className="text-sm text-red-500">{errors.payee.message}</p>}
          </div>

          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" type="number" step="0.01" {...register("amount")} />
            {errors.amount && <p className="text-sm text-red-500">{errors.amount.message}</p>}
          </div>

          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" {...register("date")} />
            {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              className="w-full border rounded px-3 py-2"
              {...register("description")}
            />
          </div>

          <div>
            <Label htmlFor="file">Upload Document</Label>
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
            {loading ? "Submitting..." : "Submit Voucher"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
