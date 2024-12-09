type TextInputProps = {
  title: string;
  type: string;
  id: string;
  handleType: (value: string) => void;
  value: string;
};

function TextInput({ value, handleType, title, type, id }: TextInputProps) {
  return (
    <div>
      <label className="form-label" htmlFor={id}>{title}</label>
      <input value={value} onChange={(e) => { handleType(e.target.value) }} type={type} id={id} className="form-control" required />
    </div>
  )
}

export default TextInput
