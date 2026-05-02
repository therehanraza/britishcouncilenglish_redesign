import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'About British Council India',
    links: ['What we do', 'Our presence in India', 'Leadership team', 'Jobs and opportunities'],
  },
  {
    title: 'Partner with us',
    links: ['Why partner with us?', 'Who we work with', 'Affiliate marketing'],
  },
  {
    title: 'Professional development',
    links: ['Continuing professional development', 'Conferences', 'Teaching qualifications'],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <h2>British Council India</h2>
          <p>
            Building connections through English, education, arts, culture,
            libraries, exams, and international opportunities.
          </p>
          <div className="site-footer__contact-list" aria-label="Contact summary">
            <span>
              <MapPin size={18} aria-hidden="true" /> India offices
            </span>
            <span>
              <Phone size={18} aria-hidden="true" /> Course and exam support
            </span>
            <span>
              <Mail size={18} aria-hidden="true" /> Newsletter updates
            </span>
          </div>
        </div>

        <div className="site-footer__links">
          {footerSections.map((section) => (
            <div className="site-footer__section" key={section.title}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link}>
                    <Link to="/our-work">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p>English, exams, education, culture, and library services in India.</p>
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
