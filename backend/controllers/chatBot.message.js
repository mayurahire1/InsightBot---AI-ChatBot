import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";
import model from "../config/gemini.js";

export const Message = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text?.trim()) {
      return res.status(400).json({ error: "Message text is required" });
    }

    const user = await User.create({
      sender: "user",
      text,
    });

    // data
    const botResponses = {
      "what is your name": "My name is InsightBot.",
      "how are you": "I am doing well. How can I help you today?",
      "what is java":
        "Java is a high-level object-oriented programming language.",
      "what is python": "Python is a simple and powerful programming language.",
      "what is html": "HTML is used to structure web pages.",
      "what is css": "CSS is used to style web pages.",
      "what is javascript": "JavaScript is used to make web pages interactive.",
      "what is react":
        "React is a JavaScript library for building user interfaces.",
      "what is node.js": "Node.js allows JavaScript to run on the server.",
      "what is mongodb": "MongoDB is a NoSQL database.",
      "what is an api": "An API allows different applications to communicate.",
      "what is a database": "A database is a collection of organized data.",
      "what is git": "Git is a version control system.",
      "what is github": "GitHub is a platform for hosting Git repositories.",
      "what is oop": "OOP stands for Object-Oriented Programming.",
      "what is an array":
        "An array stores multiple values in a single variable.",
      "what is a function": "A function is a reusable block of code.",
      "what is ai": "AI stands for Artificial Intelligence.",
      hello: "Hello! How can I assist you?",
      hi: "Hi! What can I do for you?",
      "good morning": "Good morning! Have a great day.",
      "good afternoon": "Good afternoon! How can I help you?",
      "good evening": "Good evening! How are you today?",
      "thank you": "You're welcome!",
      bye: "Goodbye! Have a nice day.",
      "tell me a joke":
        "Why do programmers prefer dark mode? Because light attracts bugs.",
      "who created you": "I was created by Mayur Ahire.",
      "can you help me with coding?":
        "Yes, I can help you with programming concepts and code examples.",
      "what is machine learning":
        "Machine learning is a branch of artificial intelligence that learns from data.",
      "what is cloud computing":
        "Cloud computing provides computing resources over the internet.",
    };

    const normalizedText = text.trim().toLowerCase();
    let botResponse;

    if (botResponses[normalizedText]) {
      botResponse =
        botResponses[normalizedText] || "Sorry, I don't understand that!!!";
    } else {
      try {
        const prompt = `
        You are InsightBot, a helpful AI assistant created by Mayur Ahire.
        Answer clearly and professionally.
        Keep answers concise.

        User: ${text}
          `;

        const result = await model.generateContent(prompt);

        botResponse = result.response.text();
      } catch (err) {
        console.error("Gemini Error:", err);
        botResponse = "Sorry, I'm unable to generate a response right now.";
      }
    }
    const bot = await Bot.create({
      text: botResponse,
    });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });
  } catch (error) {
    console.error("Error in Message controller:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing the message" });
  }
};
