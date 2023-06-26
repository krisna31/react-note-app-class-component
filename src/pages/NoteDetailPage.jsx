import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNotes from "../components/DetailNotes";
import { archiveNote, deleteNote } from "../utils/local-data";

export default function NoteDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  function onDeleteNoteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  function onArchiveNoteHandler(id) {
    archiveNote(id);
    navigate("/");
  }

  return <DetailNotes id={id} deleteNote={onDeleteNoteHandler} archiveNote={onArchiveNoteHandler} />;
}
