import React, { useState } from 'react';
import '../../../Containers/DashBoard/DashStyle.css';
import Lottie from 'react-lottie';
import animationData from '../../../Assets/animations/plusanimate.json';

export default function PlusAnimate() {
    const [defaultOptions,SetdefaultOptions] = useState({
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      });
    
    return (
      <div>
        <button style={{border:"none",borderRadius:"50%"}} onClick={()=>{SetdefaultOptions({loop:false,autoplay:false})}}>
        <Lottie 
          options={defaultOptions}
          height={25}
          width={25}
        />
        </button>
      </div>
    );
  }