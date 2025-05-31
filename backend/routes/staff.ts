import express from 'express';
import { createOrEditStaff } from '../controllers/staff';

const router = express.Router();

// POST /staff/get
// @todo add createOrEditStaff here
router.post('/list', (req, res) => {
  res.status(200).send({status : true, message :'List of staff here', payload : []});
});

export default router;