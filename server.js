//Import the express module
const express = require('express');
const app = express();
const Path = require('path');
const api = require('./api/index.js');
const PORT = process.env.PORT || 3001;

// Set up app Port
const db = require('./db/db.json');

// Set up app to use express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public')));


// Set up app to use api
app.use('/api', api);


// Setup main route
app.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, 'public/index.html'));
});

// Setup notes route
app.get('/notes', (req, res) => {
    res.sendFile(Path.join(__dirname, 'public/notes.html'));
});



// Set up app to use html
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));