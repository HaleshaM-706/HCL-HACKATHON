import { Router, Request, Response } from 'express';
import passport from 'passport';


export const logInAdmin =  (req: Request, res: Response, next: (arg0: any) => void) => {
  passport.authenticate('local', (err: any, user: Express.User, info: { message: any; }) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.json({ message: 'Login successful', user });
    });
  })(req, res, next);
}