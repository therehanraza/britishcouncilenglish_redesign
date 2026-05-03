import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'About British Council India',
    links: [
      { label: 'What we do', path: '/our-work' },
      { label: 'Our presence in India', path: '/our-work' },
      { label: 'Leadership team', path: '/our-work' },
      { label: 'Jobs and opportunities', path: '/our-work' },
    ],
  },
  {
    title: 'Partner with us',
    links: [
      { label: 'Why partner with us?', path: '/our-work' },
      { label: 'Who we work with', path: '/our-work' },
      { label: 'Affiliate marketing', path: '/our-work' },
    ],
  },
  {
    title: 'Professional development',
    links: [
      { label: 'Continuing professional development', path: '/learn-english' },
      { label: 'Conferences', path: '/events' },
      { label: 'Teaching qualifications', path: '/learn-english' },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        <div className="site-footer__intro">
          <div>
            <h2>British Council India</h2>
            <p>
              Building connections through English, education, arts, culture,
              libraries, exams, and international opportunities.
            </p>
          </div>
          <div className="site-footer__contact-list" aria-label="Contact summary">
            <span><MapPin size={18} aria-hidden="true" /> India offices — Delhi, Mumbai, Chennai, Kolkata</span>
            <span><Phone size={18} aria-hidden="true" /> Course and exam support available Mon–Sat</span>
            <span><Mail size={18} aria-hidden="true" /> Sign up for newsletter updates</span>
          </div>
        </div>

        <div className="site-footer__links">
          {footerSections.map((section) => (
            <div className="site-footer__section" key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 British Council India. English, exams, education, culture, and library services.</p>
          <div className="site-footer__socials" aria-label="Social links">
            <a href="https://www.facebook.com/BritishCouncilIndia" target="_blank" rel="noreferrer">
              <span aria-hidden="true">Fb</span>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/britishcouncilindia/" target="_blank" rel="noreferrer">
              <span aria-hidden="true">Ig</span>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/british-council/" target="_blank" rel="noreferrer">
              <span aria-hidden="true">In</span>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;