import FeatureCard from '../components/ui/FeatureCard.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { useEffect, useState } from 'react';
import { images } from '../data/siteContent.js';
import { getBlogPosts } from '../services/api.js';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBlogPosts()
      .then((data) => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="page">
      <PageHero
        eyebrow="Blog"
        title="Stories, advice, and learning ideas"
        copy="Read practical guidance on English learning, exams, studying in the UK, cultural programmes, and library activities."
        image={images.blog}
        imageAlt="Newspaper and reading material"
      />

      <section className="section-block">
        <SectionTitle title="Latest articles" copy="A magazine-style grid makes articles easier to scan and explore." />
        {loading && <p className="content-status">Loading content...</p>}
        {error && <p className="content-status content-status--error">{error}</p>}
        {!loading && !error && (
          <div className="feature-grid">
            {blogPosts.map((post) => (
              <FeatureCard item={{ ...post, type: post.category }} key={post._id || post.title} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Blog;
