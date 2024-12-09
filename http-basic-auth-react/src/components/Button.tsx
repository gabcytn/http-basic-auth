type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset";
};

function Button({ text, type }: ButtonProps) {
  return (
    <button style={btnStyle} type={type} className="btn btn-primary mt-3 px-4">{text}</button>
  )
}

const btnStyle = {
  width: "max-content"
}

export default Button
