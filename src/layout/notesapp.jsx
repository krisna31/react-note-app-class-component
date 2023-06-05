import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteCreate from "./notecreate";
import Header from "./header";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchNotes: [],
      searchQuery: "",
    };

    this.onAddNotetHandler = this.onAddNotetHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
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
    }));
  }

  onAddNotetHandler({ title, body }) {
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
            <NoteCreate notes={this.state.notes} addNote={this.onAddNotetHandler} />
            <h2>Catatan Aktif</h2>
            {notes.length > 0 ? (
              <div className="notes-list">
                {notes.map(
                  (note) =>
                    !note.archived && (
                      <div className="note-item" key={note.id}>
                        <div className="note-item__content">
                          <h3 className="note-item__title">{note.title}</h3>
                          <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                          <p className="note-item__body">{note.body}</p>
                        </div>
                        <div className="note-item__action">
                          <button className="note-item__delete-button" id={note.id} onClick={() => this.onDeleteHandler(note.id)}>
                            Delete
                          </button>
                          <button className="note-item__archive-button">Arsipkan</button>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
            <h2>Arsip</h2>
            {notes.length > 0 ? (
              <div className="notes-list">
                {notes.map(
                  (note) =>
                    note.archived && (
                      <div className="note-item" key={note.id}>
                        <div className="note-item__content">
                          <h3 className="note-item__title">{note.title}</h3>
                          <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                          <p className="note-item__body">{note.body}</p>
                        </div>
                        <div className="note-item__action">
                          <button className="note-item__delete-button" id={note.id} onClick={() => this.onDeleteHandler(note.id)}>
                            Delete
                          </button>
                          <button className="note-item__archive-button">Arsipkan</button>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
          </div>
        </main>
      </>
    );
  }
}

export default NotesApp;
