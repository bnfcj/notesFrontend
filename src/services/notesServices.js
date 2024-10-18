import axios from "axios";
const url = "/api/notes";
const submitPost = (note, setNotes, notes, setNote) => {
  axios
    .post(`${url}`, { content: note })
    .then((res) => {
      setNotes([...notes, res.data]);
      setNote("");
    })
    .catch((err) => console.error(err));
};
function fetchNotes(setNotes) {
  axios
    .get(`${url}`)
    .then((response) => response.data)
    .then((data) => {
      setNotes(data);
    })
    .catch((err) => console.error(err));
}
function handleChangeImportance(noteId, filteredNotes, setNotes, notes) {
  const findIndex = filteredNotes.findIndex((n) => n.id === noteId);
  axios
    .patch(`${url}/${noteId}`, {
      important: !filteredNotes[findIndex].important,
    })
    .then((res) => {
      setNotes(
        notes.map((note) => (note.id === noteId ? { ...res.data } : note))
      );
    });
}
function handleDeleteNote(noteId, notes, setNotes) {
  axios
    .delete(`${url}/${noteId}`)
    .then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    })
    .catch((err) => console.log(err));
}
export default {
  submitPost,
  handleChangeImportance,
  handleDeleteNote,
  fetchNotes,
};
