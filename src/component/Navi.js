import React, { Component } from "react";
import '../App.css'

export default class Navi extends Component {
    
  render() {
    return (
      
        <div className="navi">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
            <i class="bi bi-tree-fill"></i>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home 
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={(e)=> {
                    e.preventDefault();
                    window.scrollTo({
                    top:500,
                    behavior:"smooth",
                  })} } className="nav-link" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Works
                  </a>
                </li><li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      
    );
  }
}
