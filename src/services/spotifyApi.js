export const getAccessToken = async () => {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const credentials = `${clientId}:${clientSecret}`;
  const encodedCredentials = btoa(credentials);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${encodedCredentials}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
};

export const searchAlbums = async (searchTerm, token) => {
  const searchURL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=album&limit=50`;

  const headers = {
    'Authorization': `Bearer ${token}`
  };

  const response = await fetch(searchURL, { headers });
  const data = await response.json();
  return data.albums?.items || [];
};