import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteCreate from "./notecreate";
import Header from "./header";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onSearchEventHandler(event) {
    const searchQuery = event.target.value;
    const notes = getInitialData();
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

    this.setState(() => ({
      notes: filteredNotes,
    }));
  }

  onAddContactHandler({ title, body }) {
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
    return (
      <>
        <Header searchNote={this.onSearchEventHandler} />
        <main>
          <div className="note-app__body">
            <NoteCreate notes={this.state.notes} addNote={this.onAddContactHandler} />
            <h2>Catatan Aktif</h2>
            {this.state.notes.length > 0 ? (
              <div className="notes-list">
                {this.state.notes.map(
                  (note) =>
                    !note.archived && (
                      <div className="note-item" key={note.id}>
                        <div className="note-item__content">
                          <h3 className="note-item__title">{note.title}</h3>
                          <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                          <p className="note-item__body">{note.body}</p>
                        </div>
                        <div className="note-item__action">
                          <button className="note-item__delete-button">Delete</button>
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
            {this.state.notes.length > 0 ? (
              <div className="notes-list">
                {this.state.notes.map(
                  (note) =>
                    note.archived && (
                      <div className="note-item" key={note.id}>
                        <div className="note-item__content">
                          <h3 className="note-item__title">{note.title}</h3>
                          <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                          <p className="note-item__body">{note.body}</p>
                        </div>
                        <div className="note-item__action">
                          <button className="note-item__delete-button">Delete</button>
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
