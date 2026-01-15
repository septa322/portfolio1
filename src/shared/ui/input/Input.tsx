type InputProps = {
  value: string | undefined
  onChange: (value: string) => void
  placeholder: string
  classes?: string
}

export default function Input({ value, onChange, placeholder, classes }: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`h-12 mb-3 p-3 rounded-xl ${classes} border-zinc-700 border bg-zinc-900 focus:outline-none focus:ring focus:ring-orange-500`}
      placeholder={placeholder}
    />
  )
}
