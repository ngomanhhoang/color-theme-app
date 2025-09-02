import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [deleteColorID, setDeleteColorID] = useState(null);


  function confirmDelete(id) {
    setColors(colors.filter((color) => color.id !== id));
    setDeleteColorID(null) 
  }

  function addColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={addColor} />
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            deleteColorID={deleteColorID}
            onAskDelete={() => setDeleteColorID(color.id)}
            onCancelDelete={() => setDeleteColorID(null)}
            onConfirmDelete={() => confirmDelete(color.id)}
          />
        );
      })}
    </>
  );
}

export default App;
