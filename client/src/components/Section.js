function Section({ children, className = "", spacing = "default", id }) {
  return (
    <section id={id} className={`section section--${spacing} ${className}`}>
      {children}
    </section>
  );
}

export default Section;