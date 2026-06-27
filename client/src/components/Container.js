function Container({ children, size = "default", className = "" }) {
  return (
    <div className={`container container--${size} ${className}`}>
      {children}
    </div>
  );
}

export default Container;