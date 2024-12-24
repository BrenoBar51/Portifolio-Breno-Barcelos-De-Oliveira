import React from "react";

export interface ButtonProps {
  name: string;
  link?: string;
}

export const Button: React.FC<ButtonProps> = ({ name, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        <button className="h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          {name}
        </button>
      </a>
    </>
  );
}