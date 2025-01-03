const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected route example
router.get('/me', auth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;