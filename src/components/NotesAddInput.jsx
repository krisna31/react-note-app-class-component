import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NotesAddInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = (event) => {
    this.setState({ body: event.target.innerText });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    this.props.addNote(title, body);
    this.setState({ title: "", body: "" });
  };

  render() {
    const { title, body } = this.state;
    return (
      <main>
        <section className="add-new-page">
          <form onSubmit={this.handleSubmit}>
            <div className="add-new-page__input">
              <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={title} onChange={this.handleTitleChange} required />
              <div className="add-new-page__input__body" contentEditable="true" data-placeholder="Sebenarnya saya adalah ...." onInput={this.handleBodyChange} key="contentEditable" suppressContentEditableWarning={true}>
                {body}
              </div>
            </div>
            <div className="add-new-page__action">
              <button className="action" type="submit" title="Simpan">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                </svg>
              </button>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

NotesAddInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};
