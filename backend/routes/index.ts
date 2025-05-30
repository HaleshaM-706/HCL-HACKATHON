import { Router } from 'express';
import authRoutes from './auth';
import staffRoutes from './staff';
import staffAssignmentRoutes from './staffAssignment';

const router = Router();

router.use('/auth', authRoutes);
router.use('/staff', staffRoutes);
router.use('/assignment', staffAssignmentRoutes);

export default router;
