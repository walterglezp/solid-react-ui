import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      onClick={(e) => {
        alert("Button clicked!");
      }}
      style={{ padding: "8px 16px", fontSize: "16px", cursor: "pointer" }}
    >
      {children}
    </button>
  );
};
