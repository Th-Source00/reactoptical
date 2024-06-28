import AppWidgetSummary from '../../Containers/AppView/app-widget-summary';

import Grid from '@mui/material/Unstable_Grid2';

import history from "../../Assets/others-assets/icons/glass/hi-story.png"
import app from "../../Assets/others-assets/icons/glass/appoint.png"
import comments from "../../Assets/others-assets/icons/glass/ic_glass_message.png"
import invent from "../../Assets/others-assets/icons/glass/ic_glass_bag.png"
// import { useParams } from 'react-router-dom';
// import BlogView from './blog/view/blog-view';

import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Insta from './EmbedSocials/Insta';
import Fb from './EmbedSocials/Fb';
import './styleIn.css';
// import { Typography } from '@mui/material';
import Swal from 'sweetalert2';







const ClientIndex = () => {
  // const { firstName, lastName } = useParams();
  // const [auth, setAuth] = useState(false);
  // const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);



  // const showSuccess = (message) => {
  //   Swal.fire({
  //     title: 'Success',
  //     icon: 'success',
  //     text: message,
  //   });
  // };

  const showError = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
    });
  };

  axios.defaults.withCredentials = true;


  useEffect(() => {
    fetchUserDetails();
  });

  const fetchUserDetails = async () => {
    setLoading(true);


    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    if (!token) {
      showError('No token found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('http://localhost:2680/api/details', {
        headers: {
          'x-access-token': token,
        },
      });

      if (response.status === 200) {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
      }
    } catch (err) {
      console.error('Error fetching user details:', err);
      showError('Failed to fetch user details. Please try again.');
    } finally {
      setLoading(false);
    }

  };


  // useEffect(() => {
  //   axios.get('http://localhost:2680/api/details')

  //     .then(res => {
  //       if (res.data.Status === "Success") {
  //         setAuth(true)
  //         setFirstName(res.data.firstName)
  //         setLastName(res.data.lastName)
  //         navigate('/login')
  //       }

  //       else {
  //         setAuth(false)
  //         setMessage(res.data.Error)
  //       }
  //     })
  //     .then(err => console.log(err))


  // }, [])


  return (
    <>
      <div>


        <div >
          <div>
              <h3 id='username'  >
            {/* Welcome! &nbsp; <h2 id="names">{firstName} {lastName}</h2> </h3> */}
            {/* Welcome! &nbsp; {firstName} {lastName} */}
			{loading ? 'Loading...' : `Welcome! ${firstName} ${lastName}`}

            
            </h3>
          </div>

        

          <div className="info-data" >

            <Grid classname='container' spacing={7}>
              <Grid xs={15} sm={10} md={3}>
                <AppWidgetSummary
                  title="Records/History"
                  total={144}
                  color="info"
                  icon={<img alt="icon" width={50} height={50} src={history} />}
                />
              </Grid>


            </Grid>
            {/* ======================================= */}


            {/* ====================================  */}
            <Grid classname='container' spacing={7}>
              <AppWidgetSummary
                title="Inventory"
                total={130}
                color="info"
                icon={<img alt="icon" width={50} height={50} src={invent} />}

              />
            </Grid>
            <Grid classname='container' spacing={7}>

              <Grid xs={12} sm={10} md={3}>
                <AppWidgetSummary
                  title="Appointments "
                  total={234}
                  color="error"
                  icon={<img alt="icon" src={app} />}
                />
              </Grid>
            </Grid>

            {/* =============================================================  */}

            <Grid xs={12} sm={6} md={3}>
              <AppWidgetSummary
                title="Messages"
                total={234}
                color="info"
                icon={<img alt="icon" src={comments} />}
              />
            </Grid>
          </div>
          <br />
          <div className='d-flex'>
            <Insta />
            &nbsp;
            &nbsp;
            &nbsp;
            <Fb />

          </div>



        </div>



      </div>

    </>

  )
}
export default ClientIndex;




////////// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ClientIndex = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem('tokenId');
//       if (!token) {
//         setMessage('No token found, please log in.');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:2680/api/details', {
//           headers: {
//             'x-access-token': token
//           }
//         });

//         if (response.status === 200) {
//           setFirstName(response.data.firstName);
//           setLastName(response.data.lastName);
//         }
//       } catch (error) {
//         if (error.response) {
//           setMessage(error.response.data);
//         } else {
//           setMessage('Error fetching user details');
//         }
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>
//       {message && <p>{message}</p>}
//       {!message && (
//         <div>
//           <p>First Name: {firstName}</p>
//           <p>Last Name: {lastName}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientIndex;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ClientIndex = () => {
//   const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '' });
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem('tokenId');

//       if (!token) {
//         setMessage('No token found, please log in first');
//         return;
//       }

//       try {
//         const response = await axios.get('http://localhost:2680/api/details', {
//           headers: {
//             'x-access-token': token
//           }
//         });

//         if (response.status === 200) {
//           setUserDetails(response.data);
//         }
//       } catch (error) {
//         if (error.response) {
//           setMessage(error.response.data);
//         } else {
//           setMessage('Error fetching user details');
//         }
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   return (
//     <div>
//       <h2>User Details</h2>
//       {message ? (
//         <p>{message}</p>
//       ) : (
//         <div>
//           <p>First Name: {userDetails.firstName}</p>
//           <p>Last Name: {userDetails.lastName}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientIndex;




