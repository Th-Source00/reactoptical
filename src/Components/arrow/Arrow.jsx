import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Assets/animations/arrowleft.json';

export default function Arrow() {
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
          height={130}
          width={105}
        />
      </div>
    );
  }