import ButtonLink from '../components/ui/ButtonLink.jsx';
import FeatureCard from '../components/ui/FeatureCard.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import FeaturedCarousel from '../components/ui/FeaturedCarousel.jsx';
import { useEffect, useState } from 'react';
import { getHomeContent } from '../services/api.js';

function Home() {
  const [homeContent, setHomeContent] = useState({
    heroSlides: [],
    pathways: [],
    homePromos: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHomeContent()
      .then((data) => {
        setHomeContent(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="page">
        <p className="content-status">Loading content...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page">
        <p className="content-status content-status--error">{error}</p>
      </main>
    );
  }

  return (
    <main>
      <div className="page">

        {/* Hero Carousel - replaces static PageHero */}
        <FeaturedCarousel items={homeContent.heroSlides} />

        <section className="welcome-panel">
          <SectionTitle
            title="Welcome to the British Council in India"
            copy="We support peace and prosperity by building connections, understanding, and trust between people in the UK and countries worldwide."
          />
          <div className="quick-links">
            <ButtonLink to="/take-exam" variant="ghost">
              Important update about IELTS
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Public notice: beware of fraud
            </ButtonLink>
          </div>
        </section>

        <section className="section-block">
          <SectionTitle
            eyebrow="Explore"
            title="What would you like to do?"
            copy="Choose a pathway and move straight into the section that matches your goal."
          />
          <div className="feature-grid feature-grid--four">
            {homeContent.pathways.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </section>

        <section className="section-block">
          <SectionTitle
            eyebrow="Featured updates"
            title="Courses, scholarships, culture, and professional learning"
            copy="Important opportunities are grouped into clear cards so visitors can scan quickly and act with confidence."
          />
          <div className="feature-grid">
            {homeContent.homePromos.map((item) => (
              <FeatureCard item={item} key={item.title} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default Home;
