# InsightBot - AI Powered Chatbot

## Overview

InsightBot is a full-stack AI-powered chatbot built using the MERN stack and Google Gemini API. The chatbot provides both predefined responses and dynamic AI-generated answers, enabling users to interact naturally and receive intelligent responses.

The project follows a hybrid approach:

* Static responses for common and predefined questions.
* AI-generated responses using Google Gemini for unknown queries.

## Features

* User-friendly chat interface
* Real-time messaging
* Predefined chatbot responses
* Google Gemini AI integration
* Dynamic AI-generated replies
* MongoDB chat storage
* REST API architecture
* Error handling and fallback responses
* Responsive design

## Tech Stack

### Frontend

* React.js
* CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### AI Integration

* Google Gemini API

## Project Architecture

User Message
↓
Frontend (React)
↓
Backend API (Express)
↓
Check Static Responses
↓
Found? → Return Static Response
↓ No
Google Gemini API
↓
Generate AI Response
↓
Store Conversation in MongoDB
↓
Return Response to User

## Installation

### Clone Repository

git clone https://github.com/your-username/InsightBot.git

### Navigate to Project

cd InsightBot

### Install Backend Dependencies

cd backend
npm install

### Install Frontend Dependencies

cd ../frontend
npm install

## Environment Variables

Create a .env file inside the backend directory.

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

## Run Backend

cd backend
npm run dev

## Run Frontend

cd frontend
npm run dev

## Future Enhancements

* User Authentication (JWT)
* Chat History Management
* Conversation Memory
* Voice Assistant Support
* File Upload Support
* Multi-language Responses
* Real-time Typing Indicator
* Dark Mode

## Learning Outcomes

Through this project, I gained hands-on experience with:

* MERN Stack Development
* REST API Design
* MongoDB Database Integration
* AI API Integration
* Prompt Engineering
* Error Handling
* Full-Stack Application Development

## Author

Mayur Ahire

M.Sc. Computer Science Student

## License

This project is developed for educational and learning purposes.
