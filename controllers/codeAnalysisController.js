const CodeSnippet = require('../models/CodeSnippet');

const analyzeCode = async (req, res) => {
    const { code, language } = req.body;

    // Simulated static analysis (Replace with actual analysis logic)
    const analysisResult = {
        issues: [],
        suggestions: [],
    };

    // Example checks for Python code (simple demonstration)
    if (language === 'python') {
        if (code.includes('for i in range(len')) {
            analysisResult.issues.push("Inefficient loop. Consider using 'enumerate()' for better performance.");
            analysisResult.suggestions.push("Refactor the loop to use 'enumerate()'.");
        }
    }

    // Save to database
    const snippet = new CodeSnippet({
        code,
        language,
        analysisResult,
    });

    await snippet.save();

    res.json(analysisResult);
};

module.exports = { analyzeCode };
