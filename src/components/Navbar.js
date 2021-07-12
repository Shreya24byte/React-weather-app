import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        
    <nav className="navbar navbar-expand-lg text-light navbar-primary bg-primary">
  <div className="container-fluid">
    <span className="navbar-brand fw-bold">Meterolog</span>
    <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Navigate
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/">
            <li className="dropdown-item">Dashboard</li>
            </Link>
            <Link to="/settings">
            <li className="dropdown-item">Setting</li>
            </Link>
          </ul>
     </li>
  </div>
</nav>
    )
}

export default Navbar
