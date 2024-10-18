import Button from "./Button";
import notesServices from "../services/notesServices";
Button;
function NotesPost({ setNote, note, setNotes, notes }) {
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            notesServices.submitPost(note, setNotes, notes, setNote);
          }
        }}
        style={{ width: "20%", marginRight: "3rem" }}
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note"
      />
      <Button
        title={"Save"}
        clickHandler={() =>
          notesServices.submitPost(note, setNotes, notes, setNote)
        }
      />
    </>
  );
}

export default NotesPost;
