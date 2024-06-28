import React, { useEffect, useState } from 'react';
import "./Splash.css"
import Lottie from 'react-lottie';
import animationData from '../../Assets/animations/loadingbar.json';

import glasses from "../../Assets/others-assets/icons/glass/glasses.png"
import { Container } from '@mui/material';


const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  // ==================================
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup function to clear the timer
  }, []);

  return (
    <>
      <Container>
        <div className={`splash-screen${loading ? 'visible' : 'hidden'}`}>
          <div className='d-flex flex-row bd-highlight mb-3'>
            <img src={glasses} className="p-2 bd-highlight" id='glasses-img' alt='glasses img' /><br />
          </div>

          <div className='p-2 bd-highlight'>
            <Lottie
              options={defaultOptions}
              height={95}
              width={205}
            />
          </div>


        </div>
      </Container>
    </>
  );
};

export default SplashScreen;


