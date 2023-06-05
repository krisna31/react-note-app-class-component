import React from "react";

class NoteCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      char_limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => ({
      char_limit: 50 - event.target.value.length,
      title: event.target.value.length < 50 ? event.target.value : prevState.title,
    }));
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <div className="note-input">
          <h2>Buat catatan</h2>
          <form onSubmit={this.onSubmitEventHandler}>
            <p className="note-input__title__char-limit">Sisa karakter: {this.state.char_limit}</p>
            <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." required onChange={this.onBodyChangeEventHandler} value={this.state.body}></textarea>
            <button type="submit">Buat</button>
          </form>
        </div>
      </>
    );
  }
}

export default NoteCreate;
