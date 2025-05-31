import { Router, Request, Response } from "express";
import { logInAdmin } from "../controllers/auth";

const router = Router();

// POST /auth/login
router.post("/login", logInAdmin);
router.get("/check-auth", (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res
      .status(200)
      .send({ status: true, message: "List of staff here", payload: [] });
  } else {
    res
      .status(401)
      .send({ status: false, message: "Unauthorized!", payload: [] });
  }
});

export default router;
