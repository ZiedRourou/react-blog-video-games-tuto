import type { ComponentProps } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type TextFieldProps = ComponentProps<"input"> & {
  label: string
  error?: string
}

const TextField = ({ label, error, id, ...inputProps }: TextFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} aria-invalid={!!error} {...inputProps} />
    {error && <p className="text-sm text-destructive">{error}</p>}
  </div>
)

export default TextField
