import { Link } from "react-router-dom";
import "../styles/Components.css";

function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "medium",
  target,
  rel,
  onClick,
}) {
  const className = `button button--${variant} button--${size}`;

  // Internal Link
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  // External Link
  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // Standard Button
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;