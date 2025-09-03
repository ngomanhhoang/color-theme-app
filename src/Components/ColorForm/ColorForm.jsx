import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";
import { useState } from "react";

export default function ColorForm({
  onAddColor,
  mode = "add",
  onUpdate,
  onCancelEdit,
  initialData,
}) {
  const [formData, setFormData] = useState(
    initialData || {
      role: "",
      hex: "#000000",
      contrastText: "#ffffff",
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (mode === "edit") {
      onUpdate(formData);
    } else {
      onAddColor(formData);
    }
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
      {mode === "edit" ? (
        <>
          <button type="submit">UPDATE COLOR</button>
          <button onClick={onCancelEdit} type="button">
            CANCEL
          </button>
        </>
      ) : (
        <button className="add-color" type="submit">ADD COLOR</button>
      )}
    </form>
  );
}
