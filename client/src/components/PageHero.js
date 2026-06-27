import "../styles/Components.css";

function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "large",
}) {
  return (
    <section className={`page-hero page-hero--${align} page-hero--${size}`}>
      {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}

      <h1 className="page-hero__title">{title}</h1>

      {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
    </section>
  );
}

export default PageHero;