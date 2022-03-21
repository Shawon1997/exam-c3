const mongoose = require("mongoose");
const bodySchema = new mongoose.Schema({
    body: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false

})

module.exports = bodySchema;