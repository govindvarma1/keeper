import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

export default function NewNote(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ id: uuidv4(), title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({ id: uuidv4(), title: "", content: "" });
    event.preventDefault();
  }

  function Expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form action="">
        {isExpanded ? (
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={note.title}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          onClick={Expand}
          cols="3"
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={note.content}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab class="form-button" onClick={handleClick} aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
