import { useEffect, useState } from 'react';
import InfoList from '../components/ui/InfoList.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { getPage } from '../services/api.js';

function TakeExam() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPage('take-exam')
      .then((data) => {
        setPage(data);
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

        {page.sections.map((section, i) => (
          <section className="section-block" key={i} id={i === 0 ? 'exam-options' : undefined}>
            <SectionTitle title={section.title} copy={section.copy} />
            {section.type === 'info-list' && <InfoList items={section.items} />}
          </section>
        ))}
      </div>

      <aside className="sidebar-column" aria-label="Exam support">
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

export default TakeExam;
