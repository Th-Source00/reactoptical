import React from 'react';
import '../../../Containers/DashBoard/DashStyle.css';
import Lottie from 'react-lottie';
import animationData from '../../../Assets/animations/wavinghand.json';

export default function Waving() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={40}
          width={50}
        />
      </div>
    );
  }