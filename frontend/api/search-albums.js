import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const searchTerm = req.query.q;
    if (!searchTerm) {
      return res.status(400).json({ error: 'Search term "q" is required.' });
    }

    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });
    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    const searchURL = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=album&limit=20`;

    const searchResponse = await fetch(searchURL, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    const searchData = await searchResponse.json();
    res.status(200).json(searchData.albums?.items || []);
  } catch (error) {
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
}
