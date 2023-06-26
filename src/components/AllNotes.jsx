import React, { Component } from "react";
import { getAllNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";

export default class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  async componentDidMount() {
    const notes = getAllNotes();
    this.setState({ notes });
  }

  render() {
    return (
      <main>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <section className="search-bar">
            <input type="text" placeholder="Cari berdasarkan judul ..." value="" />
            <section className="notes-list">
              {this.state.notes.map((note) => (
                <article className="note-item" key={note.id}>
                  <h3 className="note-item__title">
                    <a href={`/notes/${note.id}`}>{note.title}</a>
                  </h3>
                  <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
                  <p className="note-item__body">{note.body}</p>
                </article>
              ))}
            </section>
            <div className="homepage__action">
              <button className="action" type="button" title="Tambah">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </button>
            </div>
          </section>
        </section>
      </main>
    );
  }
}
