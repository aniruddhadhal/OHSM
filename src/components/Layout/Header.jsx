import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const Header = () => {
  return (
   <>
  <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    
      <Link  to="/" className="navbar-brand">OHSM</Link>
      <ul className="navbar-nav  mb-2 ">
        <li className="nav-item">
          < NavLink  to="/solutions" className="nav-link" >Solutions</ NavLink>
        </li>
        <li className="nav-item">
          <NavLink   to="/company" className="nav-link" >Company</NavLink>
        </li>
        <li className="nav-item">
          <NavLink   to="/pricing" className="nav-link" >Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink   to="/resources" className="nav-link" >Resources</NavLink>
        </li>
        <li className="nav-item">
          <NavLink   to="/contect" className="nav-link" >Contect Us</NavLink>
        </li>
        </ul>
        <ul className="navbar-nav  ">
        <li className="nav-item">
          <NavLink   to="/login" className="nav-link" >Log In</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink   to="/demo" className=" demo nav-link " >Request a demo</NavLink>
        </li>
       
      </ul>
      
    </div>
 
</nav>

   
   </>
  )
}

export default Header
