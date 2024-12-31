import React from "react";


export interface SectionProps {
  children: React.ReactNode;
  backgroundColor: string;
  id?: string;
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(({children, backgroundColor, id }, ref) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-full m-0 p-0 ${backgroundColor}`}
      ref={ref}
      id={id}
    >
      {children}
    </div>
  );
})