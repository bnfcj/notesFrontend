import Note from "./Note";

function Notes({ filteredNotes, setNotes, notes }) {
  const notesList = filteredNotes.map((n) => (
    <Note
      key={n.id}
      note={n}
      filteredNotes={filteredNotes}
      setNotes={setNotes}
      notes={notes}
    />
  ));

  return <>{notesList}</>;
}

export default Notes;
