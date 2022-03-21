const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    likes: { type: Number, required: true, default: 0 },
    coverimage: { type: String, required: true },
    content: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});
module.exports = bookSchema