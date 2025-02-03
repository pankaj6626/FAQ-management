const axios = require("axios");
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function translateText(text, targetLang) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`;
  try {
    const response = await axios.post(url, { q: text, target: targetLang });
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to original text
  }
}

module.exports = { translateText };
