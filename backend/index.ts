// index.ts

import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import './models/index'
import indexRoutes from './routes/index'

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3001', 10);

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Initialize Passport
// app.use(passport.initialize());
// // Import Passport strategy (you need to create this file)
// import passportConfig from './config/passport';
// passportConfig(passport);

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send(`Server is running on port ${PORT}`);
});

app.use('/api', indexRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
