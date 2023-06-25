import React from 'react'
import { MenuItems } from './MenuItems'
import "../style/NavbarStyle.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";

const Navbar = () => {

  const signClick = () =>{
    <Routes>
      <Route path="/signup"element={<SignUp/>} />
    </Routes>
  }
  const [clicked, setclicked] = useState(false);
  const handleClick = () =>{
      setclicked(!clicked);
  }

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Trippy</h1>
      
      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item,index) => {
            return (
                <li key ={index}>
                    <Link className= {item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.tittle}
                    </Link>
                </li>
            );
        })}
        <Link to="/signup">
          <button onClick={signClick}>Sign Up</button>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
