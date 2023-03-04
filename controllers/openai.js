require("dotenv").config({ path: "../config.env" });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_SECRET,
});
const openai = new OpenAIApi(configuration);

// summarize text
exports.summarize = async (req, res) => {
    const { text } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this: \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (response.data) {
            if (response.data.choices[0].text) {
                return res.status(200).json(response.data.choices[0].text);
            }
        }
    } catch (err) {
        return res.status(404).json({message: err.message});
    }
}

// generate a paragraph
exports.paragraph = async (req, res) => {
    const { text } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a detailed paragraph about: \n${text}`,
            max_tokens: 500,
            temperature: 0.5,
        });
        if (response.data) {
            if (response.data.choices[0].text) {
                return res.status(200).json(response.data.choices[0].text);
            }
        }
    } catch (err) {
        return res.status(404).json({message: err.message});
    }
}

// generate a chatbot
exports.chatbot = async (req, res) => {
    const { text } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Answer question similiar o how a professional chat bot called Jacky would.
            Me: "What is your name?"
            Jacky: "My name is Jacky."
            Me: "How old are you?"
            Jacky: "A secret makes a bot bot."
            Me: "What is your favourite color?"
            Jacky: "Blue, I think."
            Me: "What are you doing here?"
            Jacky: "I am here to provide great and confortable service to you and to deal with all your concerns."
            Me: \n${text}`,
            max_tokens: 300,
            temperature: 0.7,
        });
        if (response.data) {
            if (response.data.choices[0].text) {
                return res.status(200).json(response.data.choices[0].text);
            }
        }
    } catch (err) {
        return res.status(404).json({message: err.message});
    }
}

// convert English into js
exports.jsConvertor = async (req, res) => {
    const { text } = req.body;

    try {
        const response = await openai.createCompletion({
            model: "code-davinci-002",
            prompt: `/* Convert these instructions into JavaScript code: \n${text} */`,
            max_tokens: 400,
            temperature: 0.25,
        });
        if (response.data) {
            if (response.data.choices[0].text) {
                return res.status(200).json(response.data.choices[0].text);
            }
        }
    } catch (err) {
        return res.status(404).json({message: err.message});
    }
}

// Create a scifi Image
exports.scifi = async (req, res) => {
    const { text } = req.body;

    try {
        const response = await openai.createImage({
            prompt: `Generate a science fiction image of: \n${text}`,
            n: 1,
            size: "512x512",
        });
        if (response.data) {
            if (response.data.data[0].url) {
                return res.status(200).json(response.data.data[0].url);
            }
        }
    } catch (err) {
        return res.status(404).json({message: err.message});
    }
}
