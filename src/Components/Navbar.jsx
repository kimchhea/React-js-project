import logoPNG from "../assets/images/logoPNG.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Service",
    path: "service",
  },
  {
    label: "Accessories",
    path: "accessories",
  },
  {
    label: "About",
    path: "about",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <img className="logo" src={logoPNG} alt="Logo" />
      <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
        {isOpen ? <X /> : <Menu />}
      </button>
      <ul className={isOpen ? "nav-lists active" : "nav-lists"}>
        {links.map((link) => (
          <li
            onClick={() => setIsOpen(false)} // Fix applied here
            className="nav-link"
            key={link.label}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
