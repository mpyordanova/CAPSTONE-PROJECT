import React from "react";
import Menu from "./Menu";
import Login from "./login";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header-wrapper sticky no-sticky">
      
      <div className="header-line">
      
        <h1 className="Header-title" >
        {/* <a href="/" rel='home' className="active">From Ocean Blues to Mountain Hues</a> */}
        </h1>
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
