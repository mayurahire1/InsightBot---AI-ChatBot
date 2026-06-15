import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log(process.env.GEMINI_API_KEY);
async function run() {
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const result = await model.generateContent("Hello");
    console.log(result.response.text());
}

run();