import Button from "./Button";
import notesServices from "../services/notesServices";
notesServices;
function Note({ note, filteredNotes, setNotes, notes }) {
  return (
    <div>
      <p key={note.id}>{note.content}</p>
      <Button
        clickHandler={() =>
          notesServices.handleChangeImportance(
            note.id,
            filteredNotes,
            setNotes,
            notes
          )
        }
        title={
          note.important ? "Change to non-important" : "Change to important"
        }
      />
      <Button
        title={"Delete Note"}
        clickHandler={() =>
          notesServices.handleDeleteNote(note.id, notes, setNotes)
        }
      />
    </div>
  );
}

export default Note;
