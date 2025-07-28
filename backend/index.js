const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '',         
  database: 'file_management'
});

// Test connection
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection error:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// Routes

// Get all notes
app.get('/notes', (req, res) => {
  db.query('SELECT * FROM notes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Create note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  db.query(
    'INSERT INTO notes (title, content) VALUES (?, ?)',
    [title.trim(), content.trim()],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, title, content });
    }
  );
});

// Update note
app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  db.query(
    'UPDATE notes SET title = ?, content = ? WHERE id = ?',
    [title.trim(), content.trim(), id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id, title, content });
    }
  );
});

// Delete note
app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM notes WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Note deleted' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
