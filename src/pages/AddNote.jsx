import React from "react";
import { useNavigate } from "react-router-dom";
import NotesAddInput from "../components/NotesAddInput";
import { addNote } from "../utils/local-data";

export default function AddNote() {
  const navigate = useNavigate();

  function onAddNoteHandler(title, body) {
    addNote({ title, body });
    navigate("/");
  }

  return (
    <section>
      <NotesAddInput addNote={onAddNoteHandler} />
    </section>
  );
}
