const mongoose = require('mongoose');

const attackSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  sentDate: { type: Date, default: Date.now },
  isPhishing: { type: Boolean, default: false },
});

const Attack = mongoose.model('Attack', attackSchema);

module.exports = Attack;
