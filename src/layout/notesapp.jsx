import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteCreate from "./notecreate";
import Header from "./header";
import NotesList from "./noteslist";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchNotes: [],
      searchQuery: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
  }

  onToggleArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) => {
        return note.id === id
          ? {
              ...note,
              archived: !note.archived,
            }
          : note;
      }),
      searchNotes: prevState.searchNotes.map((note) => {
        return note.id === id
          ? {
              ...note,
              archived: !note.archived,
            }
          : note;
      }),
    }));
  }

  onSearchEventHandler(event) {
    const searchQuery = event.target.value;
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

    this.setState(() => ({
      searchNotes: filteredNotes,
      searchQuery,
    }));
  }

  onDeleteHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
      searchNotes: prevState.searchNotes.filter((note) => note.id !== id),
    }));
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const notes = this.state.searchQuery != "" ? this.state.searchNotes : this.state.notes;
    return (
      <>
        <Header searchNote={this.onSearchEventHandler} />
        <main>
          <div className="note-app__body">
            <NoteCreate notes={this.state.notes} addNote={this.onAddNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NotesList notes={notes.filter((note) => !note.archived)} archiveText="Arsipkan" onDelete={this.onDeleteHandler} onToggleArchive={this.onToggleArchiveHandler} />
            <h2>Arsip</h2>
            <NotesList notes={notes.filter((note) => note.archived)} archiveText="Pindahkan" onDelete={this.onDeleteHandler} onToggleArchive={this.onToggleArchiveHandler} />
          </div>
        </main>
      </>
    );
  }
}

export default NotesApp;
