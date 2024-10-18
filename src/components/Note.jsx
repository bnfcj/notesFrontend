import axios from "axios";
import Button from "./Button";
function Note({ note, filteredNotes, setNotes, notes }) {
  function handleChangeImportance(noteId) {
    const findIndex = filteredNotes.findIndex((n) => n.id === noteId);
    axios
      .patch(`http://localhost:3001/api/notes/${noteId}`, {
        important: !filteredNotes[findIndex].important,
      })
      .then((res) => {
        setNotes(
          notes.map((note) => (note.id === noteId ? { ...res.data } : note))
        );
      });
  }
  function handleDeleteNote(noteId) {
    axios.delete(`http://localhost:3001/api/notes/${noteId}`).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  }
  return (
    <div>
      <p key={note.id}>{note.content}</p>
      <Button
        clickHandler={() => handleChangeImportance(note.id)}
        title={
          note.important ? "Change to non-important" : "Change to important"
        }
      />
      <Button
        title={"Delete Note"}
        clickHandler={() => handleDeleteNote(note.id)}
      />
    </div>
  );
}

export default Note;
