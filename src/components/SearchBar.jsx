import React, { useState, useEffect } from "react";
import { getAccessToken, searchAlbums } from "../services/spotifyApi";

function SearchBar({ setAlbums }) {
  const [input, setInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  // Get token once on component mount
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };
    fetchToken();
  }, []);

  // Perform search with debouncing
  useEffect(() => {
    const timerId = setTimeout(async () => {
      if (input && accessToken) {
        const results = await searchAlbums(input, accessToken);
        setAlbums(results);
      } else {
        setAlbums([]);
      }
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [input, accessToken, setAlbums]);

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
