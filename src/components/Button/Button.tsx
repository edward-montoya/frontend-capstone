import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
    title: string,
    onClick: Function,
    type?: 'submit' | 'button'
  }

const Button = ({ title, onClick, type = 'button' }: ButtonProps) => {
  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
