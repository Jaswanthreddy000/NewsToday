import React, { useEffect } from "react";
import './Navbar.css';
import newstoday from "../../images/background.png";
import rightSideImage from "../../images/globe.png";

const Navbar = ({ setCategory }) => {
    return (
      <div>
         <div className="background-section d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-white">
                <div className="logo-text">NewsToday</div>
              </div>
            </div>
          </div>
        </div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-4">
                <li className="nav-item ">
                  <div className="nav-link" onClick={()=>setCategory("general")}>Home</div>
                </li>
                <li className="nav-item ">
                  <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                </li>
              </ul>
            </div>
          </div>
       </nav>
      </div>
       
    );
  };

export default Navbar;
