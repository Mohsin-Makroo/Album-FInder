export const searchAlbums = async (searchTerm) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
  
  // The fix is here: we just use the baseUrl directly now
  const backendUrl = `${baseUrl}/search-albums?q=${encodeURIComponent(searchTerm)}`;

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