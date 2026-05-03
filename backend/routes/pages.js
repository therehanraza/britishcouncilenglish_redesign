import express from 'express';
import Page from '../models/page.js';

const router = express.Router();

// GET all pages
router.get('/pages', async (req, res) => {
  try {
    const pages = await Page.find();
    res.json(pages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single page by slug
router.get('/pages/:slug', async (req, res) => {
  try {
    const page = await Page.findOne({ slug: req.params.slug });
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    res.json(page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create new page
router.post('/pages', async (req, res) => {
  try {
    const page = new Page(req.body);
    const savedPage = await page.save();
    res.status(201).json(savedPage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update page
router.put('/pages/:slug', async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;