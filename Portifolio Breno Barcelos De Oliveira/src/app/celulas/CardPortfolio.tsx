import React, { useState } from "react";

export interface CardProps {
  title: string;
  description: string;
  icons: string[];
  link?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icons,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_DESCRIPTION_LENGTH = 150;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedDescription = isExpanded
    ? description
    : description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : description;

  return (
    <>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <div className="flex flex-col justify-center items-center bg-gray-700 p-8 rounded-lg mt-16 hover:bg-gray-600 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <div className="flex space-x-4 py-6">
              {icons.map((icon) => (
                <img key={icon} src={icon} alt="" className="h-6 w-6" />
              ))}
            </div>
            <p className="text-gray-400">
              {displayedDescription}
              {description.length > MAX_DESCRIPTION_LENGTH && (
                <button
                  onClick={(event) => {
                    if (link) event?.preventDefault();
                    toggleExpand();
                  }}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  {isExpanded ? "Ver menos" : "Ver mais"}
                </button>
              )}
            </p>
          </div>
        </a>
      ) : (
        <div className="flex flex-col justify-center items-center bg-gray-700 p-8 rounded-lg mt-16 hover:bg-gray-600 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex space-x-4 py-6">
            {icons.map((icon) => (
              <img key={icon} src={icon} alt="" className="h-6 w-6" />
            ))}
          </div>
          <p className="text-gray-400">
            {displayedDescription}
            {description.length > MAX_DESCRIPTION_LENGTH && (
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                {isExpanded ? "Ver menos" : "Ver mais"}
              </button>
            )}
          </p>
        </div>
      )}
    </>
  );
}