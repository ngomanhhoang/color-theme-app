export default function Color({
  color,
  deleteColorID,
  onAskDelete,
  onCancelDelete,
  onConfirmDelete,
}) {
  // console.log("Find Issues 1");

  const isDeleted = deleteColorID === color.id;

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {isDeleted ? (
        <>
          <p>Are you sure ?</p>
          <button onClick={onCancelDelete}>Cancel</button>
          <button onClick={onConfirmDelete}>Delete</button>
        </>
      ) : (
        <button type="button" onClick={onAskDelete}>
          DELETE
        </button>
      )}
    </div>
  );
}
