const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const videoRoutes = require('./routes/videos');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/videos', videoRoutes);

module.exports = app;
