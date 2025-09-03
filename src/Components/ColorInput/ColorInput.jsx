import "./ColorInput.css"
export default function ColorInput({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <input
        type="color"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
