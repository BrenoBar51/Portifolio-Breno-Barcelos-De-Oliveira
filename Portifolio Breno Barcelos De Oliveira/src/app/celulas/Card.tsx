import React, { useState } from "react";

export interface CardProps {
  title: string;
  description: string;
  link?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 150;

  const toggleExpand = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const displayedDescription = isExpanded
    ? description
    : description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="m-0 p-0 w-full block bg-gray-card hover:bg-gray-card-hover h-fit rounded-xl"
    >
      <div className="container flex flex-col justify-center items-center m-0 p-8 rounded-lg transition duration-300 ease-in-out">
        <h2 className="text-2xl laptop:text-3xl xl-desktop:4xl font-bold text-white pb-6">
          {title}
        </h2>
        <p className="text-xl lg-laptop:text-3xl text-description">
          {displayedDescription}
          {description.length > MAX_DESCRIPTION_LENGTH && (
            <button
              onClick={(event) => {
                if (link) event?.preventDefault();
                toggleExpand();
              }}
              className="text-blue hover:underline focus:outline-none"
            >
              {isExpanded ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </p>
      </div>
    </a>
  );
};
