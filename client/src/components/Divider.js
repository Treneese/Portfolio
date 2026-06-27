function Divider({
  margin = "default",
  color = "default",
}) {
  return (
    <hr
      className={`divider divider--${margin} divider--${color}`}
    />
  );
}

export default Divider;