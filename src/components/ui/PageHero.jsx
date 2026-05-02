import ButtonLink from './ButtonLink.jsx';

function PageHero({ eyebrow, title, copy, image, imageAlt, actions = [], children }) {
  return (
    <section className="page-hero">
      <div className="page-hero__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{copy}</p>
        {actions.length > 0 && (
          <div className="page-hero__actions">
            {actions.map((action) => (
              <ButtonLink key={action.label} to={action.to} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>

      {image && (
        <div className="page-hero__media">
          <img src={image} alt={imageAlt || ''} />
        </div>
      )}

      {children}
    </section>
  );
}

export default PageHero;
