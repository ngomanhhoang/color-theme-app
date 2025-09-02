import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import { useState } from "react";

export default function ColorForm({ onAddColor }) {
  const [formData, setFormData] = useState({
    role: "",
    hex: "#000000",
    contrastText: "#ffffff",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    onAddColor(formData);
    setFormData({
      role: "",
      hex: "#000000",
      contrastText: "#ffffff",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        id="role"
        value={formData.role}
        onChange={handleChange}
      />
      <ColorInput
        label="Hex"
        name="hex"
        id="hex"
        value={formData.hex}
        onChange={handleChange}
      />
      <ColorInput
        label="Contrast Text"
        name="contrastText"
        id="contrastText"
        value={formData.contrastText}
        onChange={handleChange}
      />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
