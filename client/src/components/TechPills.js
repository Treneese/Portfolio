export default function TechPills({ items = [] }) {
  return (
    <div className="tech-pills">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}