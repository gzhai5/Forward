const express = require('express');
const router = express.Router();

const { register, login, logout, getRefreshToken } = require('../controllers/auth');

router.route('/register').post(register);
router.post('/login', login);
router.route('/logout').post(logout);
router.route('/refresh-token').get(getRefreshToken);

module.exports = router;