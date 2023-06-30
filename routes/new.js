import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('new', { title: 'Mini Messageboard' });
});

export default router;