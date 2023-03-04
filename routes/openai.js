const express = require('express');
const router = express.Router();

const { summarize, paragraph, chatbot, jsConvertor } = require('../controllers/openai');

router.route("/summary").post(summarize);
router.route("/paragraph").post(paragraph);
router.route("/chatbot").post(chatbot);
router.route("/jsconvert").post(jsConvertor);

module.exports = router;