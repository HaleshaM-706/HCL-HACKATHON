import { Router } from 'express';

const router = Router();

// POST /assignment/get
router.post('/get', (req, res) => {
  res.status(200).send({status : true, message :'List of staff assignment', payload : []});
});

export default router;
