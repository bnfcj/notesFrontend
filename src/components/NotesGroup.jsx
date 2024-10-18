import Title from "./Title";
import Notes from "./Notes";

function NotesGroup({ title, filteredNotes, setNotes, notes }) {
  if (filteredNotes.length === 0) {
    return <></>;
  }
  return (
    <>
      <Title title={title} />
      <Notes setNotes={setNotes} notes={notes} filteredNotes={filteredNotes} />
    </>
  );
}

export default NotesGroup;
