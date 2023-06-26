import React, { Component } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

class Note extends Component {
  render() {
    const { note } = this.props;
    return (
      <article className="note-item" key={note.id}>
        <h3 className="note-item__title">
          <a href={`/notes/${note.id}`}>{note.title}</a>
        </h3>
        <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </article>
    );
  }
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Note;
