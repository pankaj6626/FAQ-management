const FAQ = require("../models/faq.model");
const { translateText } = require("../utils/translate");

exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const translations = {
      hi: await translateText(question, "hi"),
      bn: await translateText(question, "bn"),
    };

    const faq = new FAQ({ question, answer, translations });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
