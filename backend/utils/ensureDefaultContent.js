import { defaultBlogPosts, defaultEvents, defaultLibraryResources } from '../data/defaultContent.js';
import BlogPost from '../models/BlogPost.js';
import Event from '../models/Event.js';
import LibraryResource from '../models/LibraryResource.js';

async function seedIfEmpty(Model, defaults, label) {
  const count = await Model.estimatedDocumentCount();

  if (count > 0) {
    return;
  }

  await Model.insertMany(defaults);
  console.log(`${label} seeded.`);
}

export async function ensureDefaultContent() {
  await Promise.all([
    seedIfEmpty(Event, defaultEvents, 'Events'),
    seedIfEmpty(LibraryResource, defaultLibraryResources, 'Library resources'),
    seedIfEmpty(BlogPost, defaultBlogPosts, 'Blog posts'),
  ]);
}
