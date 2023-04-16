import React from "react";

interface IProps {
  color?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ color, onClick, children }: IProps) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "5px 10px", backgroundColor: color, color: "white" }}
    >
      {children}
    </button>
  );
};

export default Button;
