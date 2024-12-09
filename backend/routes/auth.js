const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock user database
const users = [
    { id: 1, username: 'owner', password: '$2b$10$hash', role: 'owner' },
    { id: 2, username: 'editor', password: '$2b$10$hash', role: 'editor' },
];

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);
    if (!user) return res.status(401).send('User not found');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(403).send('Invalid credentials');

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
