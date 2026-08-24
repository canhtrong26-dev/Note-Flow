type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

export default Button