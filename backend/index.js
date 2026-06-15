import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dns from 'dns';
import cors from 'cors';

import chatbotRoutes from './routes/chatbot.route.js';

const app = express();
dotenv.config();

// using Google's public DNS servers to avoid potential DNS resolution issues
dns.setServers(['8.8.8.8', '8.8.4.4']);
// console.log('Using DNS servers:', dns.getServers());

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors());


// Database connection code

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Full MongoDB Error:", err);
  });

  // Defining routes

  app.use("/bot/v1", chatbotRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});