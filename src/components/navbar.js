import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                CV
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <i className="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experiences">
                    <i className="fas fa-id-badge"></i> Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/educations">
                    <i className="fas fa-graduation-cap"></i> Educations
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios">
                    <i className="fas fa-address-card"></i> Portfolios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
{/* mobile responsive */}


        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <i className="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="/experiences">
              <i className="fas fa-id-badge"></i> Experiences
            </Link>
          </li>
          <li>
            <Link to="/educations">
              <i className="fas fa-graduation-cap"></i> Educations
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <i className="fas fa-address-card"></i> Portfolios
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
