import React, { useState } from 'react'
import previous from "../../../Assets/others-assets/icons/glass/previous.png"
import { Link } from 'react-router-dom'
import { ProductsView } from './products/view'
import { debounce } from '@mui/material';


export default function Inventory() {

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
  
  return (
    <div>
      <div>
        <Link onClick={() => handleClick(4)} to="/Dashboard/HomeDashboard">
        
          <i><img src={previous} alt="BackIcon" /> Go back </i>
        </Link>
      </div>
      <ProductsView/>
    </div>
  )
}
