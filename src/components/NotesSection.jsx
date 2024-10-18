import NotesGroup from "./NotesGroup";
import NotesPost from "./NotesPost";
import { useEffect, useState } from "react";
import notesServices from "../services/notesServices";

function NotesSection() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  useEffect(() => {
    notesServices.fetchNotes(setNotes);
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
