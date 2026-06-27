import { Link } from "react-router-dom";
import "../styles/Components.css";


function CategoryCard({
  number,
  title,
  subtitle,
  description,
  to,
  onClick,
}) {
  const content = (
    <>
      <div className="category-card__top">
        {number && <span className="category-card__number">{number}</span>}
      </div>

      <div className="category-card__content">
        <h2>{title}</h2>
        {subtitle && <h4>{subtitle}</h4>}
        {description && <p>{description}</p>}
      </div>

      <div className="category-card__arrow">→</div>
    </>
  );

  if (onClick) {
    return (
      <button type="button" className="category-card" onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className="category-card">
      {content}
    </Link>
  );
}

export default CategoryCard;