export const searchAlbums = async (searchTerm) => {
  // Change the port number here to match your backend
  const backendUrl = `http://localhost:3001/api/search-albums?q=${encodeURIComponent(searchTerm)}`;

  try {
    const response = await fetch(backendUrl);
    if (!response.ok) {
      console.error("Error from backend:", response.statusText);
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to connect to the backend server:", error);
    return [];
  }
};