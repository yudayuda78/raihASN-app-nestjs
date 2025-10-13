import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#5c40c2] text-white px-4 py-2 rounded-lg hover:bg-[#6b54d6] transition ${className || ""}`}
    >
      {children}
    </button>
  );
}
