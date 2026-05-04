import express from 'express';
import { buildSearchIndex } from '../utils/buildSearchIndex.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await buildSearchIndex(req.query.q || '');
    return res.json(results);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
