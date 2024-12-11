import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const ButtonDownload = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <a
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      href="src/app/assets/pdf/Curriculo-Breno Barcelos De Oliveira.pdf"
      download="Resume Breno Barcelos De Oliveira"
    >
      {props.name}
    </a>
  );
}