import React from 'react';
import {Link} from "react-router-dom";
import TodaysWeather from './TodaysWeather';

function Sidebar(props) {
    const location = props.user.userLocation;
    return (
        <div className="sidebar col-sm-2 bg-primary py-3 text-light ms-3">
       <p className="h1 mx-auto fw-bold">Meteorolog</p>
       <hr className="w-20"/> 
       <div className="my-5 w-100 text-left fs-3 sidenav">
           <Link to="/">
           <p><i className="fas fa-dice-four mx-3"></i>Dashboard</p>
           </Link>
           <Link to="/settings">
           <p><i className="fas fa-cog mx-3"></i>Setting</p>
           </Link>
       </div>
       {location ? (<TodaysWeather location={location}/>) : null }  
      </div>
    )
}

export default Sidebar
