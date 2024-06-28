import React, { useEffect, useState } from 'react'
import "./DashStyle.css"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Waving from '../../Components/Animate/WavingHand/Waving';

import patients from "../../Assets/others-assets/icons/glass/patients.png"
import qrcode1 from "../../Assets/others-assets/icons/glass/qr-code1.png"
import appoint from "../../Assets/others-assets/icons/glass/appoint.png"
// import SalesReport from '../../Components/sales-component/SalesReport.jsx'

// import Iconify from '../../Components/iconify/iconify.jsx';
import AppWidgetSummary from '../../Containers/AppView/app-widget-summary.jsx';
// import AppTasks from '../../Containers/AppView/app-tasks';
// import AppNewsUpdate from '../../Containers/AppView/app-news-update';
// import AppOrderTimeline from '../../Containers/AppView/app-order-timeline.jsx';
// import AppCurrentVisits from '../../Containers/AppView/app-current-visits.jsx';
// import AppWebsiteVisits from '../../Containers/AppView/app-website-visits.jsx';

// import AppTrafficBySite from '../../Containers/AppView/app-traffic-by-site.jsx';
// import AppCurrentSubject from '../../Containers/AppView/app-current-subject.jsx';
// import AppConversionRates from '../../Containers/AppView/app-conversion-rates.jsx';

// import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';
import home from "../../Assets/others-assets/icons/glass/home.png"
import axios from 'axios';
import Chatroot from '../../Components/ClientSide/Messages/ChatIndex.jsx';
import { debounce } from '@mui/material';






export default function HomeDashboard() {
    const [userCount, setUserCount] = useState(0);
    const [appointmentCount, setAppointmentCount] = useState(0);


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

        axios.get('http://localhost:2680/api/user/count')
            .then(response => {
                setUserCount(response.data.count);
            })
            .catch(error => {
                console.error('There was an error fetching the user count!', error);
            });
        // handlePatientCount();


        axios.get('http://localhost:2680/api/user/count/app')
            .then(response => {
                setAppointmentCount(response.data.count);
            })
            .catch(error => {
                console.error('There was an error fetching the appointment count!', error);
            });

    }, []);


    // const handlePatientCount=()=>{
    // axios.get('http://localhost:2680/api/user/count')
    // .then(response => {
    //     setUserCount(response.data.count);
    // })
    // .catch(error => {
    //     console.error('There was an error fetching the user count!', error);
    // });
    // }

    // handleAppointmentCount = () => {
    // axios.get('http://localhost:2680/api/user/count/app')
    // .then(response => {
    //     setUserAppCount(response.data.count);
    // })
    // .catch(error => {
    //     console.error('There was an error fetching the user count!', error);
    // }); 



    // }


    const DashNav = (
        <>

            <ul className="breadcrumbs">
                <li><a href="##"><img src={home} alt="HomeIcon" /></a></li>
                <li className="divider">/</li>
                <li><a href="##" className="active"><Link onClick={() => handleClick(4)} to="/HomeDashboard">Dashboard </Link></a></li>
            </ul>

        </>
    );

    return (
        <>
            {DashNav}
            <Typography variant="h4" sx={{ mb: 5 }}>
                <h1 className=" d-flex" id="title">Good to see you, Admin <Waving /></h1>
            </Typography>


            <div className="info-data">
                <Grid classname='container' spacing={7}>
                    <Grid xs={15} sm={10} md={3}>
                        <AppWidgetSummary
                            title="Active Patients"
                            total={userCount}
                            color="info"
                            icon={<img alt="icon" width={50} height={50} src={patients} />}
                        />
                    </Grid>

                </Grid>
                {/* ======================================= */}
                {/* <Grid xs={15} sm={10} md={2}>
                        <AppWidgetSummary
                            title="Doctors Available"
                            total={71}
                            color="success"
                            icon={<img alt="icon" width={50} height={50} src={docs} />}
                        />
                    </Grid>
                */}

                {/* ====================================  */}
                <Grid classname='container' spacing={7}>
                    <AppWidgetSummary
                        title="QR Generated"
                        total={userCount}
                        color="info"
                        icon={<img alt="icon" width={50} height={50} src={qrcode1} />}
                    />
                </Grid>
                {/* =============================================================  */}
                <Grid xs={12} sm={6} md={3}>
                    <AppWidgetSummary
                        title="Appointments"

                        total={appointmentCount}
                        color="error"
                        icon={<img alt="icon" src={appoint} />}
                    />
                </Grid>
            </div>
            {/* ========================================================================  */}
           &nbsp;
            <>
                <div className="content-data">
                    <div >
                        <Chatroot />
                    </div>
                </div>
            </>



            {/* <div className="data">
                <div className="content-data">
                    <div className="head">
                        <h3>Patients Survey</h3>
                        <div className="menu">
                            <i className='bx bx-dots-horizontal-rounded icon'></i>
                            <ul className="menu-link">
                                <li><a href="##" >Edit</a></li>
                                <li><a href="##" >Save</a></li>
                                <li><a href="##" >Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chart">
                        <div id="chart"><SalesReport /> </div>
                    </div>

                </div>

                <div className="content-data">
                
                    {/* ==================================  

                    <div className="head">
                        <h3>Chatbox</h3>
                        <div className="menu">
                            <i className='bx bx-dots-horizontal-rounded icon'></i>
                            <ul className="menu-link">
                                <li><a href="##" >Edit</a></li>
                                <li><a href="##" >Save</a></li>
                                <li><a href="##" >Remove</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-box">
                        <p className="day"><span>Today</span></p>
                        <div className="msg">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="chat">
                                <div className="profile">
                                    <span className="username">Alan</span>
                                    <span className="time">18:30</span>
                                </div>
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className="msg me">
                            <div className="chat">
                                <div className="profile">
                                    <span className="time">18:30</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum eos quam dolores eligendi exercitationem animi nobis reprehenderit laborum! Nulla.</p>
                            </div>
                        </div>
                        <div className="msg me">
                            <div className="chat">
                                <div className="profile">
                                    <span className="time">18:30</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto!</p>
                            </div>
                        </div>
                        <div className="msg me">
                            <div className="chat">
                                <div className="profile">
                                    <span className="time">18:30</span>
                                </div>
                                <p>Lorem ipsum, dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div className="form-group">
                            <input type="text" placeholder="Type..." />
                            <button type="submit" className="btn-send"><i Name='bx bxs-send' ></i></button>
                        </div>


                    </form>
                </div>
                 ======================================================= 
                ======================================================= 

            </div> */}

        </>
    );
}
