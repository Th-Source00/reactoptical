// Dashboard.js

import React, { useState } from 'react';
import Patient from '../Containers/DashboardView/Patients/Patient';
import Inventory from '../Containers/DashboardView/inventory/Inventory';
import Appointments from '../Containers/DashboardView/Appointments/Appointments';
import HomeDashboard from '../Containers/DashBoard/HomeDashBoard';
import RegisterOpt from './Signup-opt/RegisterOpt';
import { debounce } from 'lodash';


const SampleDaash = () => {


    const [showPatient, setShowPatient] = useState(null);
    const [showInventory, setShowInventory] = useState(null);
    const [showAppointments, setShowAppointments] = useState(null);
    const [showHomeDashboard, setShowHomeDashboard] = useState(null);
    const [showRegisterOpt, setShowRegisterOpt] = useState(null);
  
    const toggleComponent = debounce((component) => {
            if (component === "Patient") {
        setShowPatient(!showPatient);
        setShowInventory(false);
        setShowAppointments(false);
        setShowHomeDashboard(false);
        setShowRegisterOpt(false);
      } else if (component === "Inventory") {
        setShowPatient(false);
        setShowInventory(!showInventory);
        setShowAppointments(false);
        setShowHomeDashboard(false);
        setShowRegisterOpt(false);
      } else if (component === "Appointments") {
        setShowPatient(false);
        setShowInventory(false);
        setShowAppointments(!showAppointments);
        setShowHomeDashboard(false);
        setShowRegisterOpt(false);
      } else if (component === <HomeDashboard/>) {
        setShowPatient(false);
        setShowInventory(false);
        setShowAppointments(false);
        setShowHomeDashboard(!showHomeDashboard);
        setShowRegisterOpt(false);
      } else if (component === "RegisterOpt") {
        setShowPatient(false);
        setShowInventory(false);
        setShowAppointments(false);
        setShowHomeDashboard(false);
        setShowRegisterOpt(!showRegisterOpt);
      }
    } ,30000);
  
    return (
      <div>
        <h2>Dashboard</h2>
        <button onClick={() => toggleComponent("Patient")}>
          Toggle Component 1
        </button>
        {showPatient && <Patient />}
  
        <button onClick={() => toggleComponent("Inventory")}>
          Toggle Component 2
        </button>
        {showInventory && <Inventory />}
  
        <button onClick={() => toggleComponent("Appointments")}>
          Toggle Component 3
        </button>
        {showAppointments && <Appointments />}
  
        <button onClick={() => toggleComponent("HomeDashboard")}>
          Toggle Component 4
        </button>
        {showHomeDashboard && <HomeDashboard />}
  
        <button onClick={() => toggleComponent("RegisterOpt")}>
          Toggle Component 5
        </button>
        {showRegisterOpt && <RegisterOpt />}
      </div>
    );
}
export default SampleDaash;




// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [selectedComponent, setSelectedComponent] = useState(null);

//   const handleClick = (component) => {
//     setSelectedComponent(component);
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <div>
//         <ul>
//           <li>
//             <button onClick={() => handleClick('Patient')}>Component 1</button>
//           </li>
//           <li>
//             <button onClick={() => handleClick('Inventory')}>Component 2</button>
//           </li>
//           {/* Add more buttons for additional components */}
//         </ul>
//       </div>

//       <div>
//         {/* Conditional rendering of components based on the selectedComponent state */}
//         {selectedComponent === 'Patient' && <Patient />}
//         {selectedComponent === 'Inventory' && <Inventory />}
//         {/* Add more conditions for additional components */}
//       </div>
//     </div>
//   );
// };

// const Patient = () => {
//   return <div>Component 1 content</div>;
// };

// const Inventory = () => {
//   return <div>Component 2 content</div>;
// };

// export default Dashboard;






// import React, { useState } from 'react';

// function SampleDaash() {
//   const [selectedLink, setSelectedLink] = useState(null);

//   const handleLinkClick = (link) => {
//     setSelectedLink(link);
//   };

//   return (
//     <div className="dashboard">
//       <div className="sidebar">
//         <ul>
//           <li onClick={() => handleLinkClick("Link 1")}>Link 1</li>
//           <li onClick={() => handleLinkClick("Link 2")}>Link 2</li>
//           <li onClick={() => handleLinkClick("Link 3")}>Link 3</li>
//         </ul>
//       </div>
//       <div className="dashboard-section">
//         <h2>Dashboard Section</h2>
//         {selectedLink && <p>You clicked on: {selectedLink}</p>}
//       </div>
//     </div>
//   );
// }

// export default SampleDaash;
