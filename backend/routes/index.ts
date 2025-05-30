import { Router } from "express";
import authRoutes from "./auth";
import staffRoutes from "./staff";
import staffAssignmentRoutes from "./staffAssignment";
import { isAuthenticated } from "../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);
router.use("/staff", isAuthenticated, staffRoutes);
router.use("/assignment", isAuthenticated, staffAssignmentRoutes);

export default router;
