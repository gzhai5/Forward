const express = require('express');
const { protect } = require('../middleware/auth');
const router = express.Router();

const { register, login, logout, getRefreshToken } = require('../controllers/auth');

router.post("/register", register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/refresh-token',getRefreshToken);

module.exports = router;