const data = [
  { id: 0, title: "Note 1", content: "This is the first note." },
  { id: 1, title: "Note 2", content: "This is the second note." },
  { id: 2, title: "Note 3", content: "This is the third note." },
  { id: 3, title: "Note 4", content: "This is the fourth note." },
];

const Notes = () => {
  return (
    <div className="flex w-full gap-8 p-8">
      {data.map((note, id) => (
        <div className="border p-4 bg-white rounded-lg" key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
