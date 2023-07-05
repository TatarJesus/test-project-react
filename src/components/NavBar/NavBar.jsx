import { Link } from "react-router-dom";

import { publicRoutes } from "../../routes";
import { elementsNavBar } from "../../const/constNavBar";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="left-buts">
        {publicRoutes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`left-buts-elem ${route.name.toLowerCase()}`}
          >
            {route.svg}
            <span>{route.name}</span>
          </Link>
        ))}
      </div>
      <div className="right-buts">
        {elementsNavBar.map((element) => (
          <div
            key={element.name}
            className={`right-buts-elem ${element.name.toLowerCase()}`}
          >
            {element.svg}
            <span>{element.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
