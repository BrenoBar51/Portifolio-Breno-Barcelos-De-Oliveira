import React from "react";

export interface CardProps{
  title: string;
  description: string;
  icons: string[];
}

export const Card: React.FC<CardProps> = ({ title, description, icons }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 p-8 rounded-lg mt-16 hover:bg-gray-600">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="flex space-x-4">
        {icons.map((icon) => (
          <img key={icon} src={icon} alt="" className="h-6 w-6" />
        ))}
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}