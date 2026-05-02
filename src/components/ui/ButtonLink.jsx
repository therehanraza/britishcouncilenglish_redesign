import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ButtonLink({ children, to, variant = 'primary' }) {
  return (
    <Link className={`button-link button-link--${variant}`} to={to}>
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
    </Link>
  );
}

export default ButtonLink;
