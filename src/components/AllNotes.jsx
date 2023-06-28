import React, { Component } from "react";
import { getActiveNotes } from "../utils/local-data";
import Note from "./Note";
import { Link } from "react-router-dom";

export default class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  async componentDidMount() {
    const notes = getActiveNotes();
    this.setState({ notes });
  }

  render() {
    return (
      <main>
        <section className="homepage">
          <h2>Catatan Aktif</h2>
          <section className="search-bar">
            <input type="text" placeholder="Cari berdasarkan judul ..." value="Not Working Yet" readOnly />
            {this.state.notes.length === 0 ? (
              <section className="notes-list-empty">
                <p className="notes-list__empty">Tidak ada catatan</p>
              </section>
            ) : (
              <section className="notes-list">
                {this.state.notes.map((note) => (
                  <Note note={note} key={note.id} />
                ))}
              </section>
            )}
            <div className="homepage__action">
              <Link className="action" title="Tambah" to={"/notes/new"}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </Link>
            </div>
          </section>
        </section>
      </main>
    );
  }
}
