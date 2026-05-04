import express from 'express';
import LibraryResource from '../models/LibraryResource.js';

const router = express.Router();

router.get('/resources', async (req, res) => {
  try {
    const resources = await LibraryResource.find().sort({ order: 1, createdAt: 1 });
    return res.json(resources);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
