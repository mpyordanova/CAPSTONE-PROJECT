import React from "react";
import Menu from "./Menu";
import Search from './Search';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-line">
                <h2>From Ocean Blues to Mountain Hues</h2>
            </div>
            <div className="header-search"><Search/>
            </div>
            <div className="header-menu">
            <Menu/>
            </div>
       </header>
    )
}

export default Header;

{/* <header className='header' style={{backgroundImage: "url(/Pictures/Baloon.jpg)"}}> */}
