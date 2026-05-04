import express from 'express';
import Event from '../models/Event.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ order: 1, createdAt: 1 });
    return res.json(events);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
