const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('video'), (req, res) => {
    // Video metadata logic
    res.status(200).send('Video uploaded for approval.');
});

router.post('/approve/:id', async (req, res) => {
    // YouTube API logic for video upload
    res.send('Video approved and published to YouTube.');
});

module.exports = router;

