import React, { useEffect, useState } from 'react'

import "../../Containers/DashBoard/DashStyle.css"

// import SidebarComponent from '../../Components/sidebar/SidebarComponent.jsx'
import  { ClientProfile } from '../../Components/profile/ProfileComponent.jsx'
import Nav from '../../Components/NavBar/Nav.jsx'


// =========Sidebar IMports===========================
import { alpha } from '@mui/material/styles';

import history from "../../Assets/others-assets/icons/glass/history.png"
import app from "../../Assets/others-assets/icons/glass/app.png"
import comments from "../../Assets/others-assets/icons/glass/comments.png"
// import invent from "../../Assets/others-assets/icons/glass/invent.png"
import './styleIn.css'



import { Link,  useNavigate } from 'react-router-dom'


import { debounce } from 'lodash'

import BookAppointment from './Appointments/BookAppointment.jsx'
import Records from './History/Records.jsx'
import ClientIndex from './ClientIndex.jsx'
import ClientInventory from './Inventory/ClientInventory.jsx'
import { Avatar, Box, Typography } from '@mui/material'
// import { account } from './account.jsx'
import avatar12 from "../../Assets/others-assets/images/avatars/avatar_15.jpg"
// import BlogView from './blog/view/blog-view.jsx';
import axios from 'axios'
import Swal from 'sweetalert2';
// import ChatApp from './Messages/ChatApp.jsx';
import Chatroot from './Messages/ChatIndex.jsx';





export default function ShowProfile() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [loading, setLoading] = useState(false);
	// const [message, setMessage] = useState('');
  



    const navigate = useNavigate();


	useEffect(() => {

  
	  fetchUserDetails();
	}, []);
	
	const fetchUserDetails = async () => {
			setLoading(true);
			
		
			const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
		
			if (!token) {
			 showError('No token found. Please log in.');
			  navigate('/signin');
			  setLoading(false);
			  return;
			}
		
			try {
			  const response = await axios.get('http://localhost:2680/api/details', {
				headers: {
				  'x-access-token': token,
				},
			  });
		
			  if (response.status === 200) {
				setFirstName(response.data.firstName);
				setLastName(response.data.lastName);
			  }
			} catch (err) {
			  console.error('Error fetching user details:', err);
			  showError('Failed to fetch user details. Please try again.');
			} finally {
			  setLoading(false);
			}
		  

	  };

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

	const handleDropdownClick = (e) => {
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

	const toggleSidebar = (e) => {
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
	const [ShowChatWithUs, setShowChatWithUs] = useState(false);
	const [ShowClientInventory, setShowClientInventory] = useState(false);
	const [ShowBookAppointment, setShowBookAppointment] = useState(false);
	const [ShowIndex, setShowIndex] = useState(true);
	const [ShowRecords, setShowRecords] = useState(false);

	const handleClick = debounce((componentNumber) => {
		if (componentNumber === 1) {
			setShowChatWithUs(!ShowChatWithUs);
			setShowClientInventory(false);
			setShowBookAppointment(false);
			setShowIndex(false);
			setShowRecords(false);
		} else if (componentNumber === 2) {
			setShowChatWithUs(false);
			setShowClientInventory(!ShowClientInventory);
			setShowBookAppointment(false);
			setShowIndex(false);
			setShowRecords(false);
		} else if (componentNumber === 3) {
			setShowChatWithUs(false);
			setShowClientInventory(false);
			setShowBookAppointment(!ShowBookAppointment);
			setShowIndex(false);
			setShowRecords(false);
		}
		else if (componentNumber === 4) {
			setShowChatWithUs(false);
			setShowClientInventory(false);
			setShowBookAppointment(false);
			setShowIndex(!ShowIndex);
			setShowRecords(false);
		}
		else if (componentNumber === 5) {
			setShowChatWithUs(false);
			setShowClientInventory(false);
			setShowBookAppointment(false);
			setShowIndex(false);
			setShowRecords(!ShowRecords);
		}
	}, 500);

	useEffect(() => {

		// Persist the state of toggled components across re-renders
		setShowChatWithUs(prevState => prevState);
		// setShowClientInventory(prevState => prevState);
		setShowBookAppointment(prevState => prevState);
		setShowIndex(prevState => prevState);
		setShowRecords(prevState => prevState);

	}, []);
	const showSuccess = (message) => {
		Swal.fire({
		  title: 'Success',
		  icon: 'success',
		  text: message,
		});
	  };
	
	  const showError = (message) => {
		Swal.fire({
		  icon: 'error',
		  title: 'Error',
		  text: message,
		});
	  };
	


	// const { firstName, lastName } = useParams();
	const renderAccount = (
		<Box
		  sx={{
			width:890,
			my: 2,
			mx: 1,
			py: 3,
			px: 0.5,
			display: 'flex',
			borderRadius: 2.5,
			alignItems: 'center',
			bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
		  }}
		>
		  <Avatar src={avatar12} alt="photoURL" />
	
		  <Box sx={{ ml: 2 }}>
			<Typography  id="names" variant="subtitle2">
			{loading ? 'Loading...' : `${firstName} ${lastName}`}
				
				</Typography>
	
			{/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
			  {account.role}
			</Typography> */}
		  </Box>
		</Box>
	  );
	




	return (
		<div>


			{/* <SidebarComponent /> */}
			{/* =========================================================================== */}
			{/* =========================================================================== */}
			{/* =========================================================================== */}
			<section style={{ margin: "0", padding: "0" }} id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
				<ul className="side-menu">
			
					<Link className="active" onClick={handleSidebarToggle}>
					&nbsp;&nbsp; {renderAccount}
					</Link>
					

					{/* <li>
						<a onClick={handleSidebarToggle} href="##" id='dashboard-hamburger' className="active">
							&nbsp;&nbsp; <i className='bx bx-menu bx-md'></i>&nbsp;
							Dashboard
						</a>
					</li> */}
					<li className="divider" data-text="main">Main</li>
					<div>
						<li ><a href='##' ><img className='img-icon-one' src={app} width={20} height={20} alt='appointment icon' />
							{/* Appointments */}
							<Link onClick={() => handleClick(3)} to="##">
								Book Appointments
							</Link>

						</a>
						</li>
						{/* <li >

							<a><img className='img-icon-two' src={patient} width={20} height={20} alt="patient icon" />
								<Link onClick={() => handleClick(1)} to="#">
									Frame brand & Number/code
								</Link>

							</a>

						</li> */}
						<li >

							{/* <a>	<img className='img-icon-three' src={invent} width={20} height={20} alt="inventory icon" />
								<Link onClick={() => handleClick(2)} to="#">
									Inventory
								</Link>
							</a> */}

						</li>
						<li >

							<a>	<img className='img-icon-three' src={history} width={20} height={20} alt="inventory icon" />
								<Link onClick={() => handleClick(5)} to="#">
									History /Records
								</Link>
							</a>

						</li>
						<li className="divider" data-text="Register"> Talk to Admin</li>
						<li ><a target='_parent' href="##"> <img className='img-icon-eight' src={comments} width={20} height={20} alt="register icon " />
							<Link onClick={() => handleClick(1)} to="##">
								Chat  with us
							</Link>

						</a></li>
					</div>
				</ul>
				{/* <div hidden className="ads">
					<div className="wrapper">
						<a href="##" className="btn-upgrade">Upgrade</a>
						<p>Become a <span>PRO</span> member and enjoy <span>All Features</span></p>
					</div>
				</div> */}
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
						<ClientProfile />
					</div>

					{/* ------------Profile Component-------- */}
				</nav>
				{/* <!-- NAVBAR --> */}

				{/* <!-- MAIN --> */}
				<main>


					<div>
						<div>

							{ShowChatWithUs && <Chatroot/>}
							{ShowBookAppointment && <BookAppointment />}
							{ShowClientInventory && <ClientInventory />}
							{ShowRecords && <Records />}
							{ShowIndex && <ClientIndex />}

						</div>
					</div>
				</main>
				{/* <!-- MAIN --> */}
				
				

			</section>
			{/* <!-- NAVBAR --> */}

			{/* // <script src="script.js"></script> */}
		</div >
	)
}

