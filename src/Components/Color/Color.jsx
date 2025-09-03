import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import ColorCopy from "../CopyToClipboard/ColorCopy";
import ColorChecker from "../ContrastChecker/ColorCheck";
export default function Color({
  color,
  deleteColorID,
  onAskDelete,
  onCancelDelete,
  onConfirmDelete,
  onAskEdit,
  onUpdate,
  onCancelEdit,
  editColorID,
}) {
  // console.log("Find Issues 1");

  const isDeleted = deleteColorID === color.id;
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
      <ColorCopy hex={color.hex}/>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ColorChecker hex={color.hex} contrastText={color.contrastText}/>
      {isDeleted ? (
        <>
          <p className="color-card-headline">Really delete?</p>
          <button onClick={onCancelDelete}>Cancel</button>
          <button onClick={onConfirmDelete}>Delete</button>
        </>
      ) : (
        <button type="button" onClick={onAskDelete}>
          DELETE
        </button>
      )}

      {isUpdated ? (
        <>
          <ColorForm
            mode="edit"
            initialData={color}
            onUpdate={(updated) => onUpdate(color.id, updated)}
            onCancelEdit={onCancelEdit}
          />
        </>
      ) : (
        <button type="button" onClick={onAskEdit}>
          EDIT
        </button>
      )}
    </div>
  );
}
