import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeatureCard({ item, compact = false }) {
  const content = (
    <>
      {item.image && !compact && (
        <div className="feature-card__image-wrap">
          <img className="feature-card__image" src={item.image} alt="" loading="lazy" />
        </div>
      )}
      <div className="feature-card__body">
        {item.type && <p className="feature-card__meta">{item.type}</p>}
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        {item.to && (
          <span className="feature-card__link">
            Explore <ArrowUpRight size={16} strokeWidth={2.6} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  );

  if (item.to) {
    return (
      <Link
        className={compact ? 'feature-card feature-card--compact' : 'feature-card'}
        to={item.to}
      >
        {content}
      </Link>
    );
  }

  return (
    <article className={compact ? 'feature-card feature-card--compact' : 'feature-card'}>
      {content}
    </article>
  );
}

export default FeatureCard;