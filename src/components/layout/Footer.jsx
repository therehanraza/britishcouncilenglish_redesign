import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactIcons = {
  location: MapPin,
  phone: Phone,
  mail: Mail,
};

function Footer({ footer }) {
  if (!footer) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <div>
            <h2>{footer.title}</h2>
            <p>{footer.copy}</p>
          </div>
          <div className="site-footer__contact-list" aria-label="Contact summary">
            {footer.contactItems?.map((item) => {
              const Icon = contactIcons[item.type] || Mail;

              return (
                <span key={item.text}>
                  <Icon size={18} aria-hidden="true" /> {item.text}
                </span>
              );
            })}
          </div>
        </div>

        <div className="site-footer__links">
          {footer.sections?.map((section) => (
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
          <p>&copy; {footer.copyright}</p>
          <div className="site-footer__socials" aria-label="Social links">
            {footer.socialLinks?.map((link) => (
              <a href={link.url} target="_blank" rel="noreferrer" key={link.label}>
                <span aria-hidden="true">{link.shortLabel}</span>
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
