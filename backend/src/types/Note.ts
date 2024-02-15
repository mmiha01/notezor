export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number | null;
}

export type CreateNotePayload = Pick<Note, "title" | "content">;

export type UpdateNotePayload = Partial<CreateNotePayload>;
