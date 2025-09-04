import { initialColors } from "./lib/colors";
import { initialThemes } from "./lib/themes";
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
  const [editColorID, setEditColorId] = useState(null);
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  console.log(themes);

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
  }

  function addColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <select>
        {themes.map((theme) => {
          return (
            <option key={theme.id} value={theme.id}>
              {theme.name}
            </option>
          );
        })}
      </select>

      <ColorForm onAddColor={addColor} />
      {colors.length === 0 ? (
        <p>No colors.. start by adding one!</p>
      ) : (
        colors.map((color) => {
          return (
            <Color
              key={color.id}
              color={color}
              onConfirmDelete={() => confirmDelete(color.id)}
              onAskEdit={() => setEditColorId(color.id)}
              onUpdate={updateColor}
              onCancelEdit={() => setEditColorId(null)}
              editColorID={editColorID}
            />
          );
        })
      )}
    </>
  );
}

export default App;
