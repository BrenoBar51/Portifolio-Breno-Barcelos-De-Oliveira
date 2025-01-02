import React from "react";

export interface ActionButtonProps {
  onClick: () => void;
  className?: string;
  name:string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, className, name}) => {
  return (
    <button className={`text-lg lg-laptop:text-3xl xl-desktop:text-5xl font-bold rounded-full transition focus:outline-none hover:border-2 p-1 ${className}`}
    onClick={onClick}>
      {name}
    </button>
  );
}