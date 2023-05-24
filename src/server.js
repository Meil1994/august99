const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000; 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'meilchu1994',
  password: 'Caren1213',
  database: 'august99',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Failed to fetch books' });
      return;
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



