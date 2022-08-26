const express = require('express');
const cors = require('cors');

require('dotenv').config();

const connectMongoDB = require('./config/db.js');

const app = express();
const PORT = process.env.PORT || 5000;
// -- Connecting DB
connectMongoDB();
// Middleware
app.use(express.json());

// Routes

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
