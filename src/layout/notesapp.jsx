import React from "react";
import { getInitialData, showFormattedDate } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      searchQuery: "",
    };

    this.notes = getInitialData();
  }
  render() {
    return (
      <>
        <main>
          <div class="note-app__body">
            <div class="note-input">
              <h2>Buat catatan</h2>
              <form>
                <p class="note-input__title__char-limit">Sisa karakter: 50</p>
                <input class="note-input__title" type="text" placeholder="Ini adalah judul ..." required="" value="" />
                <textarea class="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required=""></textarea>
                <button type="submit">Buat</button>
              </form>
            </div>
            <h2>Catatan Aktif</h2>
            {this.notes.length > 0 ? (
              <div class="notes-list">
                {this.notes.map(
                  (note) =>
                    !note.archived && (
                      <div class="note-item">
                        <div class="note-item__content">
                          <h3 class="note-item__title">{note.title}</h3>
                          <p class="note-item__date">{showFormattedDate(note.createdAt)}</p>
                          <p class="note-item__body">{note.body}</p>
                        </div>
                        <div class="note-item__action">
                          <button class="note-item__delete-button">Delete</button>
                          <button class="note-item__archive-button">Arsipkan</button>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <p class="notes-list__empty-message">Tidak ada catatan</p>
            )}
            <h2>Arsip</h2>
            {this.notes.length > 0 ? (
              <div class="notes-list">
                {this.notes.map(
                  (note) =>
                    note.archived && (
                      <div class="note-item">
                        <div class="note-item__content">
                          <h3 class="note-item__title">{note.title}</h3>
                          <p class="note-item__date">{showFormattedDate(note.createdAt)}</p>
                          <p class="note-item__body">{note.body}</p>
                        </div>
                        <div class="note-item__action">
                          <button class="note-item__delete-button">Delete</button>
                          <button class="note-item__archive-button">Arsipkan</button>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <p class="notes-list__empty-message">Tidak ada catatan</p>
            )}
          </div>
        </main>
      </>
    );
  }
}

export default NotesApp;
