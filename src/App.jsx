import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { useState } from "react";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  const [deleteColorID, setDeleteColorID] = useState(null);
  const [editColorID, setEditColorId] = useState(null);

  function updateColor(id, updatedColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updatedColor } : color
      )
    );
    setEditColorId(null);
  }

  function confirmDelete(id) {
    setColors(colors.filter((color) => color.id !== id));
    setDeleteColorID(null);
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
            onAskEdit={() => setEditColorId(color.id)}
            onUpdate={updateColor}
            onCancelEdit={() => setEditColorId(null)}
            editColorID={editColorID}
          />
        );
      })}
    </>
  );
}

export default App;
