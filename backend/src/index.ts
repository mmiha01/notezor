import express from "express";
import NotesController from "./controllers/Note";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/notes", (_req, res) => {
  res.json(NotesController.getAllNotes());
});

app.post("/notes", (req, res) => {
  res.json(NotesController.createNote(req.body));
});

app.patch("/notes/:id", (req, res) => {
  res.json(NotesController.updateNote(req.body, req.params.id));
});

app.delete("/notes/:id", (req, res) => {
  res.json(NotesController.deleteNote(req.params.id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
