import { MouseEventHandler } from "react";

const Button = ({
  onClick,
  text,
  className = ''
}: {
  onClick: MouseEventHandler;
  text: String;
  className: String;
}) => (
  <button
    type="button"
    className={`btn ${className.toString()}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;