require("dotenv").config({ path: "../config.env" });
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_SECRET,
});
const openai = new OpenAIApi(configuration);

// summarize text
exports.summarize = async (req,res) => {
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
                return res.status(200).json({ summary: response.data.choices[0].text });
            }
        }
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
}
