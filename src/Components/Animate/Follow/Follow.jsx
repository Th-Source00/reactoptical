import React from 'react';
import '../../../Containers/DashBoard/DashStyle.css';
import Lottie from 'react-lottie';
import animationData from '../../../Assets/animations/heartbeat.json';

export default function Follow() {
    const defaultOptions = {
        loop: true,
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
          height={35}
          width={45}
        />
      </div>
    );
  }