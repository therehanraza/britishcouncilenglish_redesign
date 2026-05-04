import express from 'express';
import Page from '../models/page.js';

const router = express.Router();

async function getAllPages(req, res) {
  try {
    const pages = await Page.find();
    return res.json(pages);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getPageBySlug(req, res) {
  try {
    const page = await Page.findOne({ slug: req.params.slug });

    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    return res.json(page);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// GET all pages
router.get('/', getAllPages);
router.get('/pages', getAllPages);

// GET single page by slug
router.get('/:slug', getPageBySlug);
router.get('/pages/:slug', getPageBySlug);

// POST create new page
router.post('/', async (req, res) => {
  try {
    const page = new Page(req.body);
    const savedPage = await page.save();
    res.status(201).json(savedPage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update page
router.put('/:slug', async (req, res) => {
  try {
    const page = await Page.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );

    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    res.json(page);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
