import React, { useEffect, useState } from "react";
import MyHeader from "./components/MyHeader";
import AllNotes from "./components/AllNotes";
import ArchivedNotes from "./components/ArchivedNotes";
import AddNote from "./pages/AddNote";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    return () => {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider value={theme}>
      <div className="app-container">
        <MyHeader toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<AllNotes />} />
          <Route path="/notes/new" element={<AddNote />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="/archives" element={<ArchivedNotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

function NotFound() {
  return <h2>404 Not Found</h2>;
}
