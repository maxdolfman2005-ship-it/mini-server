// index.js (simple version)
const express = require('express');
const app = express();
const PORT = 3000;

// GET /hello -> plain text
app.get('/hello', (req, res) => {
  res.send('👋 Hi! Your mini-server is working.');
});

// GET /plan -> JSON (a tiny plan)
app.get('/plan', (req, res) => {
  res.json({
    today: "Week 2 Review",
    steps: [
      "mkdir mini-server",
      "npm init -y",
      "npm install express openai dotenv",
      "add /hello and /plan routes",
      "git push"
    ]
  });
});

// turn server on
app.listen(PORT, () => {
  console.log(`Mini server running at http://localhost:${PORT}`);
});
