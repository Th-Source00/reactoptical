import { Button } from '@mui/material'
import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './indPage.css'
import {  SmilingFaceWithSunglasses, TwoHearts } from "fluent-emoji"
// import homebckgrnd from '../src/Assets/others-assets/images/covers/homebckgrnd.jpg'

export default function Indexpage() {
  return (
    <div className="wholepage">
      <div className="navbar">
        <Link to="/"  ><h1 id="h1-title" style={{ marginLeft: 0 }}>Optical Centers</h1></Link>
        
        <div className="login-register">
          <DropdownButton title="Login">
            <Dropdown.Item>
              <Link to="/signin/Admin">Login as Admin</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/signin">Login as Patient</Link>
            </Dropdown.Item>
          </DropdownButton>
          <Button>
            <Link onClick={() => { alert("Contact Admin to be registered") }} to="##">Register as Patient</Link>
          </Button>
        </div>
      </div>

      <div id="mainpage">
        <img src={require("../src/Assets/others-assets/icons/glass/glasses.png")} alt="Center Image" className="centered-image" />
        <p className="welcome-text">EYEGLASSES  |  SUNGLASSES  | CONTACTS  |  EYE EXAMS</p>
      </div>

      <>
        <div className="footer">
          <div >
            <p><strong>ADDRESS</strong></p>
            <p>Optical Center</p>
            <p>23 Somewhere-In-Accra E 44 St.</p>
            <p>OakPlazA Park, FL 38224</p>
          </div>
          <div className='footer-bottom'>
            <p><strong>FOR THE NEXT AVAILABLE APPOINTMENT, CALL TODAY</strong></p>
            <p>954-776-0363 OR contact admin to schedule</p>
          </div>
          
        </div>
        <div style={{ width:'100%',backgroundColor:'whitesmoke'}}>
        <p classname="last-foot" style={{ color: 'black', fontSize:'10px', marginLeft:'5in',marginRight:'0'}} >© 2024 Optical Centers | Website Design by Maxian Essel | Made with <TwoHearts width={20} height={20} /> & <SmilingFaceWithSunglasses width={20} height={20} /> </p>
          </div>


      </>
    </div>
  )
}



















// / import { Button } from '@mui/material'




















