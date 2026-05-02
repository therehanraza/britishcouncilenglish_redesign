import FeatureCard from '../components/ui/FeatureCard.jsx';
import InfoList from '../components/ui/InfoList.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SidebarCard from '../components/ui/SidebarCard.jsx';
import { images, workAreas } from '../data/siteContent.js';

function OurWork() {
  return (
    <main className="page two-column-page">
      <div className="content-column">
        <PageHero
          eyebrow="Our work in India"
          title="Creating opportunities through education, culture, and skills"
          copy="Our work helps young people develop skills, gain international experience, and build stronger understanding between cultures."
          image={images.onlineLearning}
          imageAlt="People learning together online"
          actions={[
            { label: 'Explore programmes', to: '#programmes' },
            { label: 'Partner with us', to: '/contact', variant: 'secondary' },
          ]}
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

        <section className="section-block" id="programmes">
          <SectionTitle title="In this section" copy="Programme areas are easier to scan as image-led summaries." />
          <InfoList items={workAreas} />
        </section>
      </div>

      <aside className="sidebar-column" aria-label="Our work highlights">
        <SidebarCard title="English teaching and learning" text="Support for quality English education and assessment." image={images.adultLearning} />
        <SidebarCard title="Higher education" text="International collaboration, grants, policy, scholarships, and mobility." image={images.university} />
        <SidebarCard title="Skills and schools" text="Projects that support young people and school communities." image={images.school} />
      </aside>
    </main>
  );
}

export default OurWork;
