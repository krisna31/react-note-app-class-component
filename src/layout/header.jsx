import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div class="note-app__header">
          <h1>Notes</h1>
          <div class="note-search">
            <input type="text" placeholder="Cari catatan ..." value="" />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
