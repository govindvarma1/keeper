import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import NewNote from "./components/newNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    console.log("Deleted note");
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <div className="content">
        <Header />
        <NewNote onAdd={addNote} />
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
