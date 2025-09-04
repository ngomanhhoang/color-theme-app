import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import ColorCopy from "../CopyToClipboard/ColorCopy";
import ColorChecker from "../ContrastChecker/ColorCheck";
import { useState } from "react";
export default function Color({
  color,
  onConfirmDelete,
  onAskEdit,
  onUpdate,
  onCancelEdit,
  editColorID,
}) {
  // console.log("Find Issues 1");
  const [isDeleting, setIsDeleting] = useState(false);
  const isUpdated = editColorID === color.id;
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <ColorCopy hex={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ColorChecker hex={color.hex} contrastText={color.contrastText} />

      {isDeleting ? (
        <>
          <p className="color-card-headline">Really delete?</p>
          <button onClick={() => setIsDeleting(false)}>Cancel</button>
          <button onClick={onConfirmDelete}>Delete</button>
        </>
      ) : isUpdated ? (
        <>
          <ColorForm
            mode="edit"
            initialData={color}
            onUpdate={(updated) => onUpdate(color.id, updated)}
            onCancelEdit={onCancelEdit}
          />
        </>
      ) : (
        <>
          <button type="button" onClick={() => setIsDeleting(true)}>
            DELETE
          </button>
          <button type="button" onClick={onAskEdit}>
            EDIT
          </button>
        </>
      )}
    </div>
  );
}
