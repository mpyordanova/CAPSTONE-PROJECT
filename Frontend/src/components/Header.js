import React from "react";
import Menu from "./Menu";
import Login
 from "./login";
const Header = () => {
  return (
    <header className="header">
      <div className="header-line">
        <Login/>
        <h2>From Ocean Blues to Mountain Hues</h2>
      </div>
      <div className="header-search"></div>
      <div className="header-menu">
        <Menu />
      </div>
    </header>
  );
};

export default Header;

{
  /* <header className='header' style={{backgroundImage: "url(/Pictures/Baloon.jpg)"}}> */
}
