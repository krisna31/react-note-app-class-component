import React from "react";
import MyHeader from "./components/MyHeader";
import AllNotes from "./components/AllNotes";
import ArchivedNotes from "./components/ArchivedNotes";
import AddNote from "./pages/AddNote";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <MyHeader />
      <Routes>
        <Route path="/" element={<AllNotes />} />
        <Route path="/notes/new" element={<AddNote />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/archives" element={<ArchivedNotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

function NotFound() {
  return <h2>404 Not Found</h2>;
}
