type TextInputProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

function TextInput({ value, onChange, placeholder }: TextInputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default TextInput