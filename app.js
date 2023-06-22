const express = require('express');
const app = express();
const webRouter = require('./routes/webRouter');

// EJS is the view engine (.ejs files).
app.set('view engine', 'ejs');

// Provides access to static content, like css, images, and js.
app.use(express.static(`public`));

// Express router to handle all web related urls.
app.use(webRouter);

module.exports = app;
