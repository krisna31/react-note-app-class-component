import React from "react";
import { showFormattedDate } from "../utils/index";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.props.onDelete(id);
  }

  onToggleArchiveHandler(id) {
    this.props.onToggleArchive(id);
  }

  render() {
    return (
      <>
        {this.props.notes.length > 0 ? (
          <div className="notes-list">
            {this.props.notes.map((note) => (
              <div className="note-item" key={note.id}>
                <div className="note-item__content">
                  <h3 className="note-item__title">{note.title}</h3>
                  <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                  <p className="note-item__body">{note.body}</p>
                </div>
                <div className="note-item__action">
                  <button className="note-item__delete-button" onClick={() => this.onDeleteHandler(note.id)}>
                    Delete
                  </button>
                  <button className="note-item__archive-button" onClick={() => this.onToggleArchiveHandler(note.id)}>
                    {this.props.archiveText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </>
    );
  }
}

export default NotesList;
