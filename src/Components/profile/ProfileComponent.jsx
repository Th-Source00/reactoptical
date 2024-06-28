import React, { useState } from 'react';
import AvatarProfile from "../../Assets/others-assets/images/avatars/avatar_1.jpg"
import AvatarClient from "../../Assets/others-assets/images/avatars/avatar_15.jpg"
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

// const HANDLEUSERLOGIN = () => {
 
//   localStorage.setItem('isLoggedUserIn', 'true');
// }; 

// =====================
const HANDLEADMINLOGIN = () => {
  
  localStorage.setItem('isLoggedAdminIn', 'true');
};

const ProfileComponent = () => {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(prevIsVisible => !prevIsVisible);
  };
 


  // Userlogout
  const handleLogoutAdmin = () => {
    // Remove the flag indicating the user is logged in
    localStorage.removeItem('isLoggedAdminIn');

    // Redirect to the login page or perform any other necessary actions
    window.location = "/"; // Update with your login page URL
  }; 

  

  return (
    <div className='container'>
      <div className="profile">
        <img
          src={AvatarProfile}
          alt="profile pic"
          onClick={toggleProfileDropdown}
        />
        <Dropdown show={isProfileDropdownVisible} onClose={() => setIsProfileDropdownVisible(false)}>
          <Dropdown.Toggle variant="link" size='sm' id="dropdown-basic">
            <i className='bx bx-chevron-down bx-xs'></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* <Dropdown.Item as={Link} to="##">
              <i className='bx bxs-user-circle icon'></i> Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="">
              <i className='bx bxs-cog'></i> Settings
            </Dropdown.Item> */}
            <Dropdown.Item as={Link} to="" onClick={() => { handleLogoutAdmin() }}>
              <i className='bx bxs-log-out-circle'></i> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};



// const HANDLEUSERLOGIN = () => {
 
//   localStorage.setItem('isLoggedUserIn', 'true');
// }; 

// // =====================
// const HANDLEADMINLOGIN = () => {
  
//   localStorage.setItem('isLoggedAdminIn', 'true');
// };

const ClientProfile = () => {
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(prevIsVisible => !prevIsVisible);
  };
 


  // Userlogout
  const handleLogoutAdmin = () => {
    // Remove the flag indicating the user is logged in
    localStorage.removeItem('isLoggedAdminIn');

    // Redirect to the login page or perform any other necessary actions
    window.location = "/"; // Update with your login page URL
  }; 

  

  return (
    <div className='container'>
      <div className="profile">
        <img
          src={AvatarClient}
          alt="profile pic"
          onClick={toggleProfileDropdown}
        />
        <Dropdown show={isProfileDropdownVisible} onClose={() => setIsProfileDropdownVisible(false)}>
          <Dropdown.Toggle variant="link" size='sm' id="dropdown-basic">
            <i className='bx bx-chevron-down bx-xs'></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* <Dropdown.Item as={Link} to="##">
              <i className='bx bxs-user-circle icon'></i> Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="">
              <i className='bx bxs-cog'></i> Settings
            </Dropdown.Item> */}
            <Dropdown.Item as={Link} to="" onClick={() => { handleLogoutAdmin() }}>
              <i className='bx bxs-log-out-circle'></i> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};



export {ClientProfile};





































export default ProfileComponent;






































// import React, { useState } from 'react';
//  import AvatarProfile from "../../Assets/others-assets/images/avatars/avatar_1.jpg"
// import "../../Containers/DashBoard/DashStyle.css"
// import { Link } from 'react-router-dom';

// const ProfileComponent = () => {
//   const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);

//   const toggleProfileDropdown = () => {
//     setIsProfileDropdownVisible(prevIsVisible => !prevIsVisible);
//   };

//   return (
//     <div className='container'>
//     <div className="profile">
//       <img
//         src={AvatarProfile}
//         alt="profile pic"
//         onClick={toggleProfileDropdown}
//       />
//       <ul className={`profile-link ${isProfileDropdownVisible ? 'show' : ''}`}>
//         <li>
//           <a href="##">
//             <i className='bx bxs-user-circle icon'></i><Link to="##">Profile</Link> 
//           </a>
//         </li>
//         <li>
//           <a href="##">
//             <i className='bx bxs-cog'></i> <Link to="">Settings</Link>
//           </a>
//         </li>
//         <li>
//           <a href="##">
//             <i className='bx bxs-log-out-circle'></i> <Link to="">Logout</Link>
//           </a>
//         </li>
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default ProfileComponent;
