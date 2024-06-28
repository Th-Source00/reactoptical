import React, { Component } from 'react';
import "./sidebar.css"
import '../../Containers/DashBoard/DashStyle.css'; // Import your CSS file if needed

// import Arrow from '../arrow/Arrow';
import patients from "../../Assets/others-assets/icons/glass/patient.png"
// import doc from "../../Assets/others-assets/icons/glass/doc.png"
// import otherStaff from "../../Assets/others-assets/icons/glass/otherStaff.png"
// import bed from "../../Assets/others-assets/icons/glass/bed.png"
// import qrcode from "../../Assets/others-assets/icons/glass/qr-code.png"

import planning from "../../Assets/others-assets/icons/glass/planning.png"
import register from "../../Assets/others-assets/icons/glass/register.png"
import inventory from "../../Assets/others-assets/icons/glass/inventory.png"





// import { Link } from 'react-router-dom';


class SidebarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarHidden: false
    };
  }
  

  componentDidMount() {
    const sidebar = document.getElementById('sidebar');
    sidebar.addEventListener('mouseleave', this.handleMouseLeave);
    sidebar.addEventListener('mouseenter', this.handleMouseEnter);
  }

  componentWillUnmount() {
    const sidebar = document.getElementById('sidebar');
    sidebar.removeEventListener('mouseleave', this.handleMouseLeave);
    sidebar.removeEventListener('mouseenter', this.handleMouseEnter);
  }

  handleDropdownClick = (e) => {
    e.preventDefault();
    const allDropdowns = document.querySelectorAll('#sidebar .side-dropdown');

    if (!e.target.classList.contains('active')) {
      allDropdowns.forEach(i => {
        const aLink = i.parentElement.querySelector('a:first-child');

        aLink.classList.remove('active');
        i.classList.remove('show');
      });
    }

    e.target.classList.toggle('active');
    e.target.nextElementSibling.classList.toggle('show');
  };

  toggleSidebar = (e) => {
    const allSideDivider = document.querySelectorAll('#sidebar .divider');
    const sidebar = document.getElementById('sidebar');

    if (sidebar.classList.contains('hide')) {
      allSideDivider.forEach(item => {
        item.textContent = '-';
      });
      const allDropdowns = document.querySelectorAll('#sidebar .side-dropdown');
      allDropdowns.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });
    } else {
      allSideDivider.forEach(item => {
        item.textContent = item.dataset.text;
      });
    }

    sidebar.classList.toggle('hide');
  };

  handleMouseLeave = () => {
    if (this.state.isSidebarHidden) {
      const allDropdowns = document.querySelectorAll('#sidebar .side-dropdown');
      const allSideDivider = document.querySelectorAll('#sidebar .divider');
      allDropdowns.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });
      allSideDivider.forEach(item => {
        item.textContent = '-';
      });
    }
  };

  handleMouseEnter = () => {
    if (this.state.isSidebarHidden) {
      const allDropdowns = document.querySelectorAll('#sidebar .side-dropdown');
      const allSideDivider = document.querySelectorAll('#sidebar .divider');
      allDropdowns.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
      });
      allSideDivider.forEach(item => {
        item.textContent = item.dataset.text;
      });
    }
  };

  handleSidebarToggle = () => {
    this.setState(prevState => ({
      isSidebarHidden: !prevState.isSidebarHidden
    }));
  };



  render() {
    return (
      <>
        <section style={{ margin: "0", padding: "0" }} id="sidebar" className={this.state.isSidebarHidden ? 'hide' : ''}>




          <ul className="side-menu">

            <li>
              <a onClick={() => { this.handleSidebarToggle() }} href="##" id='dashboard-hamburger' className="active">
                &nbsp;&nbsp; <i className='bx bx-menu bx-md'></i>&nbsp; Dashboard
              </a>
            </li>
            <li className="divider" data-text="main">Main</li>
            <div>

              <li><a href="##" > <img className='img-icon-one' src={planning} width={20} height={20} alt='appointment icon' /> Appointments</a></li>
              <li><a href="##" > <img className='img-icon-two' src={patients} width={20} height={20} alt="patient icon" /> Patients</a></li>
              <li><a href="##" > <img className='img-icon-three' src={inventory} width={20} height={20} alt="patient icon" /> Inventory</a></li>

              {/* ---------------------------------------------------------------------------------- */}
              <li className="divider" data-text="Register"> Register & Patients details</li>
              <li><a target='_parent' href="signup"> <img className='img-icon-eight' src={register} width={20} height={20} alt="register icon " /> Register a patient</a></li>



            </div>

          </ul>
          <div hidden className="ads">
            <div className="wrapper">
              <a href="##" className="btn-upgrade">Upgrade</a>
              <p>Become a <span>PRO</span> member and enjoy <span>All Features</span></p>
            </div>
          </div>
        </section>
      </>
    );
  }
}




export default SidebarComponent;
