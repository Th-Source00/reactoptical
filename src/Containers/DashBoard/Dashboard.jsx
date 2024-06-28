import React, { useEffect, useState } from 'react'

import "./DashStyle.css"

// import SidebarComponent from '../../Components/sidebar/SidebarComponent.jsx'
import ProfileComponent from '../../Components/profile/ProfileComponent.jsx'
import Nav from '../../Components/NavBar/Nav.jsx'


// =========Sidebar IMports===========================

import patient from "../../Assets/others-assets/icons/glass/patient.png"
import planning from "../../Assets/others-assets/icons/glass/planning.png"
import register from "../../Assets/others-assets/icons/glass/register.png"
import inventory from "../../Assets/others-assets/icons/glass/inventory.png"


import Patient from '../DashboardView/Patients/Patient.jsx'
import { Link } from 'react-router-dom'
import Inventory from '../DashboardView/inventory/Inventory.jsx'
import Appointments from '../DashboardView/Appointments/Appointments.jsx'
import HomeDashboard from './HomeDashBoard.jsx'
import RegisterOpt from '../../Containers/DashboardView/Signup-opt/RegisterOpt.jsx'
import { debounce } from 'lodash'





export default function Dashboard() {

	// ================Sidebar Function Section===============================================
	const [isSidebarHidden, setIsSidebarHidden] = useState(false);

	useEffect(() => {
		const sidebar = document.getElementById('sidebar');
		sidebar.addEventListener('mouseleave', handleMouseLeave);
		sidebar.addEventListener('mouseenter', handleMouseEnter);

		return () => {
			sidebar.removeEventListener('mouseleave', handleMouseLeave);
			sidebar.removeEventListener('mouseenter', handleMouseEnter);
		};
	}, []);

	// const handleDropdownClick = (e) => {
	// 	e.preventDefault();
	// 	const allDropdowns = document.querySelectorAll('#sidebar .side-dropdown');

	// 	if (!e.target.classList.contains('active')) {
	// 		allDropdowns.forEach(i => {
	// 			const aLink = i.parentElement.querySelector('a:first-child');
	// 			aLink.classList.remove('active');
	// 			i.classList.remove('show');
	// 		});
	// 	}

	// 	e.target.classList.toggle('active');
	// 	e.target.nextElementSibling.classList.toggle('show');
	// };

	// const toggleSidebar = (e) => {
	// 	const allSideDivider = document.querySelectorAll('#sidebar .divider');
	// 	const sidebar = document.getElementById('sidebar');

	// 	if (sidebar.classList.contains('hide')) {
	// 		allSideDivider.forEach(item => {
	// 			item.textContent = '-';
	// 		});
	// 		const allDropdowns = document.querySelectorAll('#sidebar .side-dropdown');
	// 		allDropdowns.forEach(item => {
	// 			const a = item.parentElement.querySelector('a:first-child');
	// 			a.classList.remove('active');
	// 			item.classList.remove('show');
	// 		});
	// 	} else {
	// 		allSideDivider.forEach(item => {
	// 			item.textContent = item.dataset.text;
	// 		});
	// 	}

	// 	sidebar.classList.toggle('hide');
	// };

	const handleMouseLeave = () => {
		if (isSidebarHidden) {
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

	const handleMouseEnter = () => {
		if (isSidebarHidden) {
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

	const handleSidebarToggle = () => {
		setIsSidebarHidden(prevState => !prevState);
	};
	// ================================================================

	// const [selectedComponent, setSelectedComponent] = useState(null);
	const [showPatient, setShowPatient] = useState(false);
	const [showInventory, setShowInventory] = useState(false);
	const [showAppointments, setShowAppointments] = useState(false);
	const [showHomeDashboard, setShowHomeDashboard] = useState(true);
	const [showRegisterOpt, setShowRegisterOpt] = useState(false);

	const handleClick = debounce((componentNumber) => {
		if (componentNumber === 1) {
			setShowPatient(!showPatient);
			setShowInventory(false);
			setShowAppointments(false);
			setShowHomeDashboard(false);
			setShowRegisterOpt(false);
		} else if (componentNumber === 2) {
			setShowPatient(false);
			setShowInventory(!showInventory);
			setShowAppointments(false);
			setShowHomeDashboard(false);
			setShowRegisterOpt(false);
		} else if (componentNumber === 3) {
			setShowPatient(false);
			setShowInventory(false);
			setShowAppointments(!showAppointments);
			setShowHomeDashboard(false);
			setShowRegisterOpt(false);
		}
		else if (componentNumber === 4) {
			setShowPatient(false);
			setShowInventory(false);
			setShowAppointments(false);
			setShowHomeDashboard(!showHomeDashboard);
			setShowRegisterOpt(false);
		}
		else if (componentNumber === 5) {
			setShowPatient(false);
			setShowInventory(false);
			setShowAppointments(false);
			setShowHomeDashboard(false);
			setShowRegisterOpt(!showRegisterOpt);
		}
	}, 500);

	useEffect(() => {

		// Persist the state of toggled components across re-renders
		setShowPatient(prevState => prevState);
		setShowInventory(prevState => prevState);
		setShowAppointments(prevState => prevState);
		setShowHomeDashboard(prevState => prevState);
		setShowRegisterOpt(prevState => prevState);

	}, []);

	




	return (
		<div>
			{/* <DashboardRouter/> */}
			{/* <Routes>
				<Route path="/Appointments" element={<Appointments />} />
				<Route path="/Patients" element={<Patient />} />
				<Route path="/Inventory " element={<Inventory />} />
				<Route path="/signup " element={<RegisterOpt />} />

			</Routes> */}

			{/* <!-- SIDEBAR --> */}
			{/* <Router>
				<Routes>
					<Route path="/patientsss" element={<Patient />} />
				</Routes>
			</Router> */}

			{/* <SidebarComponent /> */}
			{/* =========================================================================== */}
			{/* =========================================================================== */}
			{/* =========================================================================== */}
			<section style={{ margin: "0", padding: "0" }} id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
				<ul className="side-menu">
					<li>
						<a onClick={handleSidebarToggle} href="##" id='dashboard-hamburger' className="active">
							&nbsp;&nbsp; <i className='bx bx-menu bx-md'></i>&nbsp;
							Admin Dashboard
						</a>
					</li>
					<li className="divider" data-text="main">Main</li>
					<div>
						<li ><a href='##' ><img className='img-icon-one' src={planning} width={20} height={20} alt='appointment icon' />
							{/* Appointments */}
							<Link onClick={() => handleClick(3)} to="/Dashboard/Appointments">Appointments</Link>

						</a>
						</li>
						<li >

							<a><img className='img-icon-two' src={patient} width={20} height={20} alt="patient icon" />
								<Link onClick={() => handleClick(1)} to="/Dashboard/Patients">Patients</Link>

							</a>

						</li>
						<li >

							<a>	<img className='img-icon-three' src={inventory} width={20} height={20} alt="inventory icon" />
								<Link onClick={() => handleClick(2)} to="/Dashboard/Inventory">

									Inventory
								</Link>
							</a>

						</li>
						<li className="divider" data-text="Register"> Register & Patients details</li>
						<li ><a target='_parent' href="##"> <img className='img-icon-eight' src={register} width={20} height={20} alt="register icon " />

							<Link onClick={() => handleClick(5)} to="/Dashboard/signup">

								Register a patient
							</Link>

						</a></li>
					</div>
				</ul>
				<div hidden className="">
					<div className="">
						<a href="##" hidden className="btn-upgrade">Upgrade</a>
						<p>Become a <span>PRO</span> member and enjoy <span>All Features</span></p>
					</div>
				</div>
			</section>

			{/* <!-- SIDEBAR --> */}
			{/* ============================================================================ */}
			{/* ============================================================================ */}
			{/* ============================================================================ */}
			{/* ============================================================================ */}
			{/* <!-- NAVBAR --> */}
			<section id="content">

				{/* <!-- NAVBAR --> */}
				< nav >

					<Nav />
					<span className="divider"></span>
					{/* ------------Profile Component-------- */}
					<div >
						<ProfileComponent />
					</div>

					{/* ------------Profile Component-------- */}
				</nav>
				{/* <!-- NAVBAR --> */}

				{/* <!-- MAIN --> */}
				<main>


					<div>
						<div>

							{showPatient &&  <Patient />}
							{showAppointments &&  <Appointments />}
							{showInventory &&  <Inventory />}
							{showRegisterOpt &&  <RegisterOpt />}
							{showHomeDashboard && <HomeDashboard />}

						</div>
					</div>
				</main>
				{/* <!-- MAIN --> */}
				{/* <div className='d-flex'>
					<div >
						<MorrisChart />
					</div>
					<div>
						<MorrisDonutChart />
					</div>

				</div> */}
				<div>


				</div>

			</section>
			{/* <!-- NAVBAR --> */}

			{/* // <script src="script.js"></script> */}
		</div >
	)
}

