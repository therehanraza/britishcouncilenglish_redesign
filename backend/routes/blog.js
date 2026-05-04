import express from 'express';
import BlogPost from '../models/BlogPost.js';

const router = express.Router();

router.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ order: 1, createdAt: 1 });
    return res.json(posts);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
