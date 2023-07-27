import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  const { note, deleteNote } = props;

  function handleClick() {
    deleteNote(note.id);
  }

  return (
    <div className="note" key={note.id} id={note.id}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}
