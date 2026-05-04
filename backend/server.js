import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import pageRoutes from './routes/pages.js';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import eventRoutes from './routes/events.js';
import libraryRoutes from './routes/library.js';
import blogRoutes from './routes/blog.js';
import homeRoutes from './routes/home.js';
import searchRoutes from './routes/search.js';
import { ensureDefaultContent } from './utils/ensureDefaultContent.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_ORIGINS = (
  process.env.CLIENT_ORIGINS ||
  process.env.CLIENT_ORIGIN ||
  'https://britishcouncilenglish-redesign.vercel.app'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

if (!MONGO_URI) {
  console.error('MONGO_URI is required.');
  process.exit(1);
}

const allowedOrigins = new Set([
  ...CLIENT_ORIGINS,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
  })
);
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'britishcouncilenglish-api',
    mongo: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.get('/', (req, res) => {
  res.json({
    ok: true,
    service: 'britishcouncilenglish-api',
    endpoints: [
      '/api/health',
      '/api/home',
      '/api/pages',
      '/api/events',
      '/api/library/resources',
      '/api/blog/posts',
      '/api/search',
      '/api/contact',
      '/api/newsletter',
    ],
  });
});

app.use('/api/pages', pageRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/library', libraryRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error.' });
});

mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 30000,
    family: 4,
  })
  .then(async () => {
    console.log('MongoDB connected.');
    await ensureDefaultContent();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});
