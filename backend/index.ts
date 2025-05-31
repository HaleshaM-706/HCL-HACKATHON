import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import passport from 'passport';
import passport from './config/passport';
import session from 'express-session'
import cookieParser from 'cookie-parser';
import './models/index'
import indexRoutes from './routes/index';
import config from "config";


// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3001', 10);

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: config.get<string>("mongodbUri"),
    resave: false,
    saveUninitialized: false
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send(`Server is running on port ${PORT}`);
});

app.use('/api', indexRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
