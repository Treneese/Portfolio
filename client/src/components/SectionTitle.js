import "../styles/Components.css";

function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}

      <h2 className="section-title__heading">{title}</h2>

      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;