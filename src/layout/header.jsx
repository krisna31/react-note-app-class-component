import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => ({
      searchQuery: event.target.value,
    }));
    this.props.searchNote && this.props.searchNote(event);
  }
  render() {
    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input type="text" placeholder="Cari catatan ..." value={this.state.searchQuery} onChange={this.onSearchChangeEventHandler} />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
