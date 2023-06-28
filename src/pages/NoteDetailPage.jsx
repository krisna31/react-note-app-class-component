import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNotes from "../components/DetailNotes";
import { archiveNote, deleteNote, unarchiveNote } from "../utils/network-data";

export default function NoteDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }

  async function onArchiveNoteHandler(id) {
    await archiveNote(id);
    navigate("/");
  }

  async function onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);
    navigate("/");
  }

  return <DetailNotes id={id} deleteNote={onDeleteNoteHandler} archiveNote={onArchiveNoteHandler} unarchiveNote={onUnarchiveNoteHandler} />;
}
