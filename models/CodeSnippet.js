const mongoose = require('mongoose');

const CodeSnippetSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    analysisResult: {
        type: Object,
        required: false,
    },
});

module.exports = mongoose.model('CodeSnippet', CodeSnippetSchema);
