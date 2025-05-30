import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to check if the user is authenticated via session.
 */
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
    res.status(401).json({ message: 'Unauthorized: Please log in' });
}
