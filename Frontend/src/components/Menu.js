import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'



function Menu() {
    const [state, setState] = useState(false);
    const ShowMenu =()=>{
      setState(true);
    }
    const HideMenu =()=> {
      setState(false);
    }
    return(
      <div className='menu'>
        <div className='dropdown-menu' onMouseEnter={ShowMenu} onMouseLeave={HideMenu}>
          <button className='burger-menu'><GiHamburgerMenu>Menu</GiHamburgerMenu></button>
          {state?(<ul  onMouseEnter={ShowMenu}>
        <li><Link className='menu-list' to='/'>Home</Link></li><br/>
        <li><Link className='menu-list' to='/MyAlbums'>My Albums</Link></li><br/>
        <li><Link className='menu-list' to='/Beach'>Beach Vacations</Link></li><br/>
        <li><Link className='menu-list' to='/Mountain'>Mountain Escapes</Link></li><br/>
        <li><Link className='menu-list' to='/City'>City Tours</Link></li><br/>
        <li><Link className='menu-list' to='/Culture'>Culture Tours</Link></li><br/>
          </ul>):
          null}
        </div>
      </div>
    )
  }
  
  export default Menu;