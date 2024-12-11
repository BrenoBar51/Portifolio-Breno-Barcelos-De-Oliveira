import { NavLink } from "react-router-dom";

export const Icons = () => {
  return (
    <ul className="flex mx-3 space-x-4 sm:space-x-2 md:space-x-4">
      <li>
        <button className="font-bold rounded-full transition focus:outline-none">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "border-2 rounded-full p-1" : "hover:border-2 rounded-full p-1")}
          >
            About Me
          </NavLink>
        </button>
      </li>
      <li>
        <button className="font-bold rounded-full transition focus:outline-none">
          <NavLink
            to="/Portfolio"
            className={({ isActive }) => (isActive ? "border-2 rounded-full p-1" : "hover:border-2 rounded-full p-1")}
          >
            Portfolio
          </NavLink>
        </button>
      </li>
      <li>
        <button className="font-bold rounded-full transition focus:outline-none">
          <NavLink
            to="/Resume"
            className={({ isActive }) => (isActive ? "border-2 rounded-full p-1" : "hover:border-2 rounded-full p-1")}
          >
            Resume
          </NavLink>
        </button>
      </li>
      <li>
        <button className="font-bold rounded-full transition focus:outline-none">
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "border-2 rounded-full p-1" : "hover:border-2 rounded-full p-1")}
          >
            Contact
          </NavLink>
        </button>
      </li>
    </ul>
  );
}