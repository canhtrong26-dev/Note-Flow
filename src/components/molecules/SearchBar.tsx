import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'

type SearchBarProps = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

function SearchBar({ value, onChange, onClick }: SearchBarProps) {
  return (
    <div>
      <TextInput value={value} onChange={onChange} placeholder="Search notes..." />
      <Button label="Search" onClick={onClick} />
    </div>
  )
}

export default SearchBar