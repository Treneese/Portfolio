function Grid({ children, columns = 3, gap = "default", className = "" }) {
  return (
    <div className={`grid grid--${columns} grid--gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

export default Grid;