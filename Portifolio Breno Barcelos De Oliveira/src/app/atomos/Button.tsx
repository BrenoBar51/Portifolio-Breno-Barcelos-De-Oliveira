import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const Button = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) =>{
  return (
    <button className="h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
      {props.name}
    </button>
  );
}