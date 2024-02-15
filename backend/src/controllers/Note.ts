import { CreateNotePayload, Note, UpdateNotePayload } from "../types/Note";
import { getUnixTimestampInSeconds } from "../utils/date";
import { removeUndefinedValueKeys } from "../utils/object";

class NoteController {
  notes: Note[];

  constructor() {
    this.notes = [];
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  createNote({ title, content }: CreateNotePayload): Note {
    const newNote = {
      id: this.notes.length.toString(),
      createdAt: getUnixTimestampInSeconds(),
      updatedAt: null,
      title,
      content,
    };
    this.notes = [...this.notes, newNote];

    return newNote;
  }

  updateNote(payload: UpdateNotePayload, id: string): Note {
    const targetNote = this.notes.find((note) => note.id === id);

    if (!targetNote) {
      throw Error("Not Found");
    }

    const updatedNote: Note = {
      ...targetNote,
      ...removeUndefinedValueKeys(payload),
      updatedAt: getUnixTimestampInSeconds(),
    };

    this.notes = this.notes.map((note) =>
      updatedNote.id === id ? updatedNote : note,
    );

    return updatedNote;
  }

  deleteNote(id: string): string {
    this.notes = this.notes.filter((note) => note.id !== id);

    return id;
  }
}

export default new NoteController();
