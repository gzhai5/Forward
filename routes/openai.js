const express = require('express');
const router = express.Router();

const { summarize, paragraph, chatbot, jsConvertor, scifi } = require('../controllers/openai');

router.route("/summary").post(summarize);
router.route("/paragraph").post(paragraph);
router.route("/chatbot").post(chatbot);
router.route("/jsconvert").post(jsConvertor);
router.route("/scifi-img").post(scifi);

module.exports = router;