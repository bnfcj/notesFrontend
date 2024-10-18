import axios from "axios";

import NotesGroup from "./NotesGroup";
import NotesPost from "./NotesPost";
import { useEffect, useState } from "react";

function NotesSection() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/notes/")
      .then((response) => response.data)
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <NotesPost
        setNote={setNote}
        note={note}
        setNotes={setNotes}
        notes={notes}
      />
      <NotesGroup
        setNotes={setNotes}
        notes={notes}
        filteredNotes={notes.filter((note) => note.important)}
        title="Important notes"
      />
      <NotesGroup
        setNotes={setNotes}
        notes={notes}
        filteredNotes={notes.filter((note) => !note.important)}
        title="Non-important notes"
      />
    </>
  );
}

export default NotesSection;
