const OpenAI = require('openai');
require("dotenv").config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

module.exports = openai