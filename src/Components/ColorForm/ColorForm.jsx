import "./ColorForm.css"

export default function ColorForm({ onAddColor }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    onAddColor(data);
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" />
      <label htmlFor="hex">Hex</label>
      <input type="text" name="hex" id="hex" />
      <label htmlFor="contrastText">Contrast Text</label>
      <input type="text" name="contrastText" id="contrastText" />
      <button type="submit">ADD COLOR</button>
    </form>
  );
}
