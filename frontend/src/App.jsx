import { useState } from "react";
import "./App.css";
import AlbumGrid from "./components/AlbumGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [albums, setAlbums] = useState([]);

  // --- Background Animation Code ---
  const notes = ["🎵", "🎶", "🎼", "♪", "🎹", "🎸", "🎷"];
  const colors = [
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8CD",
    "#F08080",
    "#6A0572",
    "#FFD700",
    "#4CAF50",
    "#2196F3",
  ];

  const createNote = (index, section) => {
    let leftPosition = 0;
    if (section === "left") leftPosition = Math.random() * 30;
    else if (section === "middle") leftPosition = 35 + Math.random() * 30;
    else leftPosition = 70 + Math.random() * 30;

    return (
      <div
        key={`${section}-${index}`}
        className="floating-note"
        style={{
          left: `${leftPosition}vw`,
          color: colors[Math.floor(Math.random() * colors.length)],
          animationDuration: `${15 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 15}s`,
          fontSize: `${2 + Math.random() * 2}rem`,
        }}
      >
        {notes[Math.floor(Math.random() * notes.length)]}
      </div>
    );
  };
  // --- End of Animation Code ---

  return (
    <>
      <div className="note-container">
        {Array.from({ length: 8 }).map((_, index) => createNote(index, "left"))}
        {Array.from({ length: 8 }).map((_, index) =>
          createNote(index, "middle")
        )}
        {Array.from({ length: 8 }).map((_, index) =>
          createNote(index, "right")
        )}
      </div>

      <div className="main-content">
        <h1>Spotify Album Finder</h1>
        <SearchBar setAlbums={setAlbums} />
      </div>
      <div className="album-content">
        <AlbumGrid albums={albums} />
      </div>
    </>
  );
}

export default App;
