import { Router } from 'express';

const router = Router();

// POST /staff/get
router.post('/get', (req, res) => {
  res.status(200).send({status : true, message :'List of staff here', payload : []});
});

export default router;
