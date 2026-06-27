import "../styles/Components.css";

function TechStack({ items = [], align = "left" }) {
  return (
    <div className={`tech-stack tech-stack--${align}`}>
      {items.map((item) => (
        <span className="tech-stack__pill" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default TechStack;