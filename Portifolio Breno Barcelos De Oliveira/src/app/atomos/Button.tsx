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
        <button className="h-10 lg-laptop:text-2xl xl-desktop:text-3xl lg-mobile:h-14 xl-desktop:h-20 w-full bg-green hover:bg-green-hover text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
          {name}
        </button>
      </a>
    </>
  );
}