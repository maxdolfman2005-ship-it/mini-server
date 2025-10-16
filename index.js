// index.js
const express = require('express');          // load the server tool
const app = express();                       // make a server
const PORT = 3000;                           // choose a door number

// When someone visits http://localhost:3000/hello
app.get('/hello', (req, res) => {
  res.send('👋 Hi! Your mini-server is working.');
});

// When someone visits http://localhost:3000/plan
app.get('/plan', (req, res) => {
  res.json({
    today: "Rebuild a mini server",
    steps: [
      "mkdir mini-server",
      "npm init -y",
      "npm install express",
      "make /hello and /plan routes"
    ]
  });
});

// Turn the server on
app.listen(PORT, () => {
  console.log(`Mini server running at http://localhost:${PORT}`);
});
