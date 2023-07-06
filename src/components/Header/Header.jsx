import { BackSVG } from "../../assets/indexHeader";

import { elementsHeader } from "../../const/constHeader";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="name-pages">
        <BackSVG />
        <span>
          <b>User pages</b> - Profile
        </span>
      </div>
      <div className="navigation">
        {elementsHeader.map((element) => (
          <div key={element.name} className="navigation-elem">
            <element.svg />
            <span>{element.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
