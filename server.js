// PARSE .ENV
require('dotenv').config();

// Configuring the database
require('./app/config/database');

const express = require('express');
const { createServer } = require('http');

// Import routes
const appRoutes = require('./app/routers/index');

// create express app
const app = express();

// Setup middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use(express.static('./app/Schema'));

app.use(appRoutes);

// Setup server port
const port = process.env.PORT || 7500;
const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
