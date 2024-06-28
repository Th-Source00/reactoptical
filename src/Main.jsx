import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginAdmin from './Components/Signin/LoginAdmin.jsx';
import SplashScreen from './Components/SlashScreen/SplashScreen';
import Dashboard from './Containers/DashBoard/Dashboard.jsx'
import Indexpage from './Indexpage.jsx';
import ErrorPage from '../src/Errorpage.jsx';
import LoginClient from './Components/Signin/LoginClient.jsx';

// import QRCodeGenerator from './Components/Qrcode/QrCode.jsx';
import ShowProfile from './Components/ClientSide/ShowProfile.jsx';



export default function Main() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000); // Adjust the time to match your splash screen duration
  }, []);



  



  return (
    <>
      {showSplashScreen ? <SplashScreen /> :
        <div>
          

          <Router>
            <Routes>
              <Route path="/" element={<Indexpage />} />
              <Route path="/signin/Admin" element={<LoginAdmin />} />
              <Route path="/signin" element={<LoginClient />} />
              {/* <Route path="/QrCode" element={<QRCodeGenerator />} /> */}
              <Route path="/Show/Profile"element={<ShowProfile/>} />              
              <Route path="/Dashboard/*" element={<Dashboard />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>

        </div>
        
      }

    </>
  )
}



