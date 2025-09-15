import React, { useState, useEffect } from "react";
// We only need the new searchAlbums function
import { searchAlbums } from "../services/spotifyApi";

function SearchBar({ setAlbums }) {
  const [input, setInput] = useState("");

  // The logic is now much simpler.
  // We just search when the input changes.
  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (input) {
        // The new call doesn't need a token.
        const results = await searchAlbums(input);
        setAlbums(results);
      } else {
        setAlbums([]);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [input, setAlbums]); // The dependency array is simpler now.

  return (
    <input
      value={input}
      type="text"
      placeholder="Search for an album..."
      onChange={(e) => setInput(e.target.value)}
    />
  );
}

export default SearchBar;