import React from "react";
import Header from "./layout/header";
import NotesApp from "./layout/notesapp";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NotesApp />
      </>
    );
  }
}
