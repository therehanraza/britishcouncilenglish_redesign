import { Link } from 'react-router-dom';

function BrandLogo() {
  return (
    <Link className="brand-logo" to="/" aria-label="British Council India home">
      <span className="brand-logo__mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span className="brand-logo__text">
        <span>British</span>
        <span>Council</span>
      </span>
      <span className="brand-logo__divider" aria-hidden="true" />
      <span className="brand-logo__country">India</span>
    </Link>
  );
}

export default BrandLogo;
