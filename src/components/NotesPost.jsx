import axios from "axios";
import Button from "./Button";

Button;
function NotesPost({ setNote, note, setNotes, notes }) {
  const submitPost = () => {
    axios
      .post("http://localhost:3001/api/notes/", { content: note })
      .then((res) => {
        setNotes([...notes, res.data]);
        setNote("");
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <input
        onKeyDown={(e) => {
          if (e.target.value === "enter") {
            submitPost();
          }
        }}
        style={{ width: "20%", marginRight: "3rem" }}
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note"
      />
      <Button title={"save"} clickHandler={submitPost} />
    </>
  );
}

export default NotesPost;
