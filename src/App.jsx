import React, { useEffect, useState } from "react";
import MyHeader from "./components/MyHeader";
import AllNotes from "./components/AllNotes";
import ArchivedNotes from "./components/ArchivedNotes";
import AddNote from "./pages/AddNote";
import NoteDetailPage from "./pages/NoteDetailPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import LoginPages from "./pages/LoginPages";
import RegisterPages from "./pages/RegisterPages";
import { getAccessToken, putAccessToken } from "./utils/network-data";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [authedUser, setAuthedUser] = useState(null);
  const navigate = useNavigate();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function setAuthedUserHandler(accessToken) {
    if (accessToken === null) {
      localStorage.removeItem("accessToken");
      setAuthedUser(accessToken);
    } else {
      putAccessToken(accessToken);
      setAuthedUser(accessToken);
      navigate("/");
    }
  }

  useEffect(() => {
    localStorage.getItem("theme") && setTheme(localStorage.getItem("theme"));
    getAccessToken() && setAuthedUser(getAccessToken());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    return () => {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    };
  }, [theme]);

  if (authedUser !== null) {
    return (
      <ThemeProvider value={theme}>
        <div className="app-container">
          <MyHeader toggleTheme={toggleTheme} setAuthedUser={setAuthedUserHandler} />
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

  return (
    <ThemeProvider value={theme}>
      <div className="app-container">
        <MyHeader toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPages setAuthedUser={setAuthedUserHandler} />} />
            <Route path="/register" element={<RegisterPages />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

function NotFound() {
  return <h2>404 Not Found</h2>;
}
