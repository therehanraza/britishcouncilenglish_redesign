import FeatureCard from '../components/ui/FeatureCard.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { blogPosts, images } from '../data/siteContent.js';

function Blog() {
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
        <div className="feature-grid">
          {blogPosts.map((post) => (
            <FeatureCard item={{ ...post, type: post.category }} key={post.title} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
