const app = require('./api/index.js');

// Read the port from the .env file, with a fallback to 3001 if it's not defined
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`✅ Secure backend server running locally at http://localhost:${port}`);
});