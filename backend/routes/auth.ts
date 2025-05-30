import { Router, Request, Response } from 'express';
import passport from 'passport';
import { logInAdmin } from '../controllers/auth';

const router = Router();

// POST /auth/login
router.post('/login', logInAdmin);

export default router;
