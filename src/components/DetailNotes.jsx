import React, { Component } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/network-data";

export default class DetailNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
    };

    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
    this.handleUnarchiveNote = this.handleUnarchiveNote.bind(this);
  }

  handleUnarchiveNote(id) {
    this.props.unarchiveNote(id);
  }

  handleDeleteNote(id) {
    this.props.deleteNote(id);
  }

  handleArchiveNote(id) {
    this.props.archiveNote(id);
  }

  async componentDidMount() {
    const note = await getNote(this.props.id);
    !note.error && this.setState({ note: note.data });
  }

  render() {
    return (
      <main>
        <section className="detail-page">
          <h3 className="detail-page__title">{this.state.note.title}</h3>
          <p className="detail-page__createdAt">{showFormattedDate(this.state.note.createdAt)}</p>
          <div className="detail-page__body">{this.state.note.body}</div>
          <div className="detail-page__action">
            {this.state.note.archived ? (
              <button class="action" type="button" title="Aktifkan" onClick={(_) => this.handleUnarchiveNote(this.state.note.id)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm3-5h2.55v3h2.9v-3H16l-4-4z"></path>
                </svg>
              </button>
            ) : (
              <button className="action" type="button" title="Arsipkan" onClick={(_) => this.handleArchiveNote(this.state.note.id)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"></path>
                </svg>
              </button>
            )}
            <button className="action" type="button" title="Hapus" onClick={(_) => this.handleDeleteNote(this.state.note.id)}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </button>
          </div>
        </section>
      </main>
    );
  }
}

DetailNotes.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
};
