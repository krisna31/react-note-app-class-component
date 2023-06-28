import React from "react";
import { useNavigate } from "react-router-dom";
import NotesAddInput from "../components/NotesAddInput";
import { addNote } from "../utils/network-data";

export default function AddNote() {
  const navigate = useNavigate();

  async function onAddNoteHandler(title, body) {
    await addNote({ title, body });
    navigate("/");
  }

  return (
    <section>
      <NotesAddInput addNote={onAddNoteHandler} />
    </section>
  );
}
