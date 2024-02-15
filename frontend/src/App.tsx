import "./App.css";
import { Input } from "./components/Input/Input.tsx";
import { Card } from "./components/Card/Card.tsx";
import { FormEvent, useId, useState } from "react";
import { Note } from "./types/Note.ts";
import { getUnixTimestampInSeconds } from "./utils/date.ts";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleId = useId();
  const contentId = useId();

  const addNewNote = (event: FormEvent) => {
    event.preventDefault();

    setNotes([
      ...notes,
      {
        id: notes.length.toString(),
        title,
        content,
        createdAt: getUnixTimestampInSeconds(),
        updatedAt: null,
      },
    ]);

    setTitle("");
    setContent("");
  };

  const [displayedNoteId, setDisplayedNoteId] = useState<string | null>(null);

  const handleNoteCardClick = (noteId: string) => {
    setDisplayedNoteId(displayedNoteId === noteId ? null : noteId);
  };

  const renderNotesAreaContent = () => {
    if (!notes.length) {
      return (
        <p class={"text-center"}>{"You don't have any notes added yet!"}</p>
      );
    }

    return notes.map((note) => (
      <div key={note.id}>
        <Card onClick={() => handleNoteCardClick(note.id)}>{note.title}</Card>
        {displayedNoteId === note.id && (
          <div className={"note-content"}>{note.content}</div>
        )}
      </div>
    ));
  };

  return (
    <main>
      <h1 className={"text-center"}>My Note Taking App</h1>
      <form id="main-form" onSubmit={addNewNote}>
        <label htmlFor={titleId}>Title of your note:</label>
        <Input
          id={titleId}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"e.g: Reminders"}
        />
        <label htmlFor={contentId}>Content of your note:</label>
        <Input
          id={contentId}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          placeholder={"Pick up cookies, finish school project"}
        />
        <button disabled={!title || !content}>Save!</button>
      </form>

      <div id={"notes-area"}>{renderNotesAreaContent()}</div>
    </main>
  );
}

export default App;
