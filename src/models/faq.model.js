const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }, // Stores HTML (WYSIWYG support)
  translations: {
    type: Map,
    of: String, // { "hi": "हिंदी में सवाल", "bn": "বাংলায় প্রশ্ন" }
  },
  createdAt: { type: Date, default: Date.now },
});

faqSchema.methods.getTranslatedText = function (lang) {
  return this.translations?.[lang] || this.question;
};

module.exports = mongoose.model("FAQ", faqSchema);
