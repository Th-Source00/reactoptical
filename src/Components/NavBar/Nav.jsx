import React, { Component } from 'react';
import "./nav.css"
import "../../Containers/DashBoard/DashStyle.css";
class Nav extends Component {
  
  render() {
    return (
      <div className='container'>
        {/* NAVBAR */}
        <nav>
       
                     
          <form action="##">
            <div className="form-group">
              <input type="text" placeholder="Search..." />
              <i className='bx bx-search icon' ></i>
            </div>
          </form>
          <h1 id='h1-title'>Optical Centers</h1>
          {/* <a href="##" className="nav-link">
            <i className='bx bxs-bell icon' ></i>
            <span className="badge">5</span>
          </a>
          <a href="##" className="nav-link">
            <i className='bx bxs-message-square-dots icon' ></i>
            <span className="badge">8</span>
          </a> */}
        </nav>
        {/* NAVBAR */}
      </div>
    );
  }
}

export default Nav;
