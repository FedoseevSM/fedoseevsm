import "./slide.css";

export const Slide = ({ children, style }) => {
  return (
    <div className="slide" style={style}>
      {children}
    </div>
  );
};
