import React, { useState } from 'react';
import '../../../Containers/DashBoard/DashStyle.css';
import Lottie from 'react-lottie';
import animationData from '../../../Assets/animations/menuicon.json';

export default function TogSide() {
  const [defaultOptions, SetdefaultOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  });

  return (
    <div>
      <button style={{ border: "none", borderRadius: "50%" }} onClick={() => { SetdefaultOptions({ loop: false, autoplay: false }) }}>
        <Lottie
        style={{margin:"0",padding:"0"}}
          options={defaultOptions}
          height={48}
          width={48}
        />
      </button>
    </div>
  );
}