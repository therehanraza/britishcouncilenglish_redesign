import { useEffect, useState } from 'react';
import FeatureCard from '../components/ui/FeatureCard.jsx';
import InfoList from '../components/ui/InfoList.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { getPage } from '../services/api.js';
import { images } from '../data/siteContent.js';

function OurWork() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPage('our-work')
      .then((data) => {
        setPage(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="page">Loading...</div>;
  if (error) return <div className="page">Error: {error}</div>;
  if (!page) return null;

  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          copy={page.copy}
          image={page.image}
          imageAlt={page.imageAlt}
          actions={page.actions}
        />

        <section className="section-block">
          <SectionTitle
            eyebrow="Impact"
            title="British Council India Report 2024-25"
            copy="A report-style highlight card gives visitors a quick route into annual achievements and programme impact."
          />
          <div className="feature-grid feature-grid--two">
            <FeatureCard
              item={{
                title: 'British Council India Report 2024-25',
                text: 'A snapshot of activity across education, arts, English, skills, and partnerships.',
                image: images.report,
              }}
            />
            <FeatureCard
              item={{
                title: 'Learn English Online',
                text: 'Online learning options help more learners access English support from wherever they are.',
                image: images.onlineLearning,
                to: '/learn-english',
              }}
            />
          </div>
        </section>

        {page.sections.map((section, i) => (
          <section className="section-block" key={i} id={i === 0 ? 'programmes' : undefined}>
            <SectionTitle title={section.title} copy={section.copy} />
            {section.type === 'info-list' && <InfoList items={section.items} />}
          </section>
        ))}
      </div>

      <aside className="sidebar-column" aria-label="Our work highlights">
        {page.sidebar.map((card, i) => (
          <SidebarCard
            key={i}
            title={card.title}
            text={card.text}
            image={card.image}
            detail={card.detail}
          />
        ))}
      </aside>
    </main>
  );
}

export default OurWork;