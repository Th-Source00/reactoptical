import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from '../../Components/iconify';
import overlayFour from '../../Assets/others-assets/background/overlay_4.jpg';
import Arrow from '../arrow/Arrow';
import axios from 'axios';





export default function LoginClient() {
  // react states
  const theme = useTheme();
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState('');
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   

    try {
      const response = await axios.post('http://localhost:2680/api/optlogin', { email, pin });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.tokenId);
        showSuccess('Login successful');
        navigate('/Show/Profile');
        // Redirect or perform any other actions as needed
      }
    } catch (err) {
      showError('Login failed. Please check your credentials.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const showSuccess = (message) => {
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: message,
    });
  };

  const showError = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
    });
  };

  const renderForm = (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <Stack spacing={3}>
        {/* <div className='d-flex'>
           <TextField
          name="FirstName"
          id="FirstName"
          label=" FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type='text'          
         
        />
        <TextField
          name="lastName"
          id="lastName"
          label="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type='text'          
         
        />
        </div>  */}

        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          required          
         
        />
       
       <TextField
          name="pin"
          label="Enter pin"
          value={pin}
          id="pin"
          onChange={(e) => { setPin(e.target.value) }}
          type={showPin ? 'text' : 'pin'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPin(!showPin)} edge="end">
                  <Iconify icon={showPin ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <TextField
          name="Pin"
          label="Enter Pin to Login"
                      value={pin}
          onChange={(e) => setPin(e.target.value)}
          type={showPin ? 'text' : 'pin'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPin(!showPin)} edge="end">
                  <Iconify icon={showPin ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2"  underline="hover" to="###" onClick={()=>{showError('Please contact Admin to reset pin')}}>
          Forgot pin?
        </Link>
      </Stack>

     
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
      >
         {loading ? 'Logging in...' : 'Login'}

      
      </LoadingButton>
     
    </form>
  );

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${overlayFour})`,
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        
        <div className='d-flex'>
        <ul className="align-self-start mt-3">
				<li>
          <Link to="/"> <Arrow/>
        </Link></li>

			
			</ul>
        </div>
        <Card sx={{ p: 2, maxWdth: 420 }}>
          <Typography variant="h4">Sign in to Optical Centers</Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link onClick={()=>{showError('contact admin to be registered')}} variant="subtitle2" to="#" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <a href="####">
            <Link to="###Contact Page####">Found Glasses</Link>
          </a>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>OR</Typography>
          </Divider>
         
              {renderForm}

        
        </Card>
      </Box>
    </div>
  );
}
































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';
// import Iconify from '../../Components/iconify';
// import overlayFour from '../../Assets/others-assets/background/overlay_4.jpg';

// export default function LoginClient() {
//   const theme = useTheme();
//   const [showPin, setShowPin] = useState(false);
//   const [pin, setPin] = useState('');
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!pin) {
//       showError('Invalid login credential.');
//       return;
//     }

//     let user = '';
//     if (pin === '1233') {
//       user = 'John';
//     } else if (pin === '1255') {
//       user = 'James';
//     } else {
//       user = 'Unknown User';
//     }

//     // Set the logged-in user in the state
//     setLoggedInUser(user);

//     // Show success message
//     showSuccess('Login successful.');
//   };

//   const showSuccess = (message) => {
//     Swal.fire({
//       title: 'Success',
//       icon: 'success',
//       text: message,
//     });
//   };

//   const showError = (message) => {
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: message,
//     });
//   };

//   const renderForm = (
//     <form onSubmit={handleSubmit}>
//       <Stack spacing={3}>
//         <TextField
//           name="Pin"
//           label="Enter Pin to Login"
//           value={pin}
//           onChange={(e) => setPin(e.target.value)}
//           type={showPin ? 'text' : 'pin'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPin(!showPin)} edge="end">
//                   <Iconify icon={showPin ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
//         <Link variant="subtitle2" underline="hover" to="/forgot-pin">
//           Forgot pin?
//         </Link>
//       </Stack>

//       <LoadingButton
//         fullWidth
//         size="large"
//         type="submit"
//         variant="contained"
//         color="inherit"
//       >
//         Login
//       </LoadingButton>
//     </form>
//   );

//   const renderProfile = loggedInUser && (
//     <Box>
//       <Typography variant="h4">Welcome, {loggedInUser}</Typography>
//       {/* Add more profile information here */}
//     </Box>
//   );

//   return (
//     <div>
//       <Box
//         sx={{
//           backgroundImage: `url(${overlayFour})`,
//           backgroundSize: 'cover',
//           height: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Card sx={{ p: 5, maxWidth: 420 }}>
//           <Typography variant="h4">Sign in to Optical Centers</Typography>
//           <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
//             Don’t have an account?
//             <Link variant="subtitle2" to="/signup" sx={{ ml: 0.5 }}>
//               Get started
//             </Link>
//           </Typography>

//           <a href="####">
//             <Link to="###Contact Page####">Found Glasses</Link>
//           </a>

//           <Divider sx={{ my: 3 }}>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>OR</Typography>
//           </Divider>

//           {loggedInUser ? renderProfile : renderForm}
//         </Card>
//       </Box>
//     </div>
//   );
// }





  // const email = e.target.email.value; // Replace with your method to get the email
    // const pin = e.target.pin.value;   
  
      // axios.post('http://localhost:2680/api/OptLogin', { email, pin })
      //     .then(res => {
      //         if (res.data.Status === "Success") {
      //             navigate('/Show/Profile');
      //         }
      //          else {
      //           showError(res.data.Error);
      //         }
      //     })
      //     .catch(err => {
      //         console.error(err);
      //         showError(res.data.Error);

      //         // showError('An error occurred. Please try again.');
      //         // alert('An error occurred. Please try again.');
          // });
        // };

        // const handleSubmit = (e) => {
        //     e.preventDefault();
    
        //     axios.post('http://localhost:2680/OptLogin',(email,pin))
        //         .then(res => {
        //             if (res.data.Status === "Success") {
        //                 navigate('/Show/Profile')
        //             }
    
        //             else {
        //                 alert(res.data.Error);
        //             }
        //         })
        //     // .then(err => console.log(err));
        // }
    
    
         
      // const handleLogin = (e) => {
      //        e.preventDefault();
      
      //     const passwordInput = document.getElementById('password'); // Assuming the password input field has id="password"
      
      //     if (!passwordInput) {
      //       console.error("Password input field not found!");
      //       return;
      //     }
      
      //     const password = passwordInput.value;
      
      //     if (password === "Client1") {
      //       showSuccess("Login Successful!!");
      
      //       // Redirect to new window location if password matches
      //       // setTimeout(function () { window.location = `/Show/Profile/${firstName}/${lastName}`}, 3000);
      //       // history.push(`/Show/Profile/${firstName}/${lastName}`);
      //       navigate(`/Show/Profile/${firstName}/${lastName}`);
    
      //       // Update with your desired new location
      //     } else {
      //       showError("Invalid login credential!");
      //     }
    
      //    console.log(firstName, lastName);
        
      //






















































// // import { useState } from 'react';

// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import Stack from '@mui/material/Stack';
// // import Button from '@mui/material/Button';
// // import Divider from '@mui/material/Divider';
// // import TextField from '@mui/material/TextField';
// // import Typography from '@mui/material/Typography';
// // import IconButton from '@mui/material/IconButton';
// // import LoadingButton from '@mui/lab/LoadingButton';
// // import { alpha, useTheme } from '@mui/material/styles';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import { Link } from 'react-router-dom';


// // // import { useRouter } from '../../routes/hooks/use-router';

// // import { bgGradient } from '../../theme/css';
// // import overlayFour from "../../Assets/others-assets/background/overlay_4.jpg"

// // // import Logo from '../../Assets/others-assets/logo.svg';
// // import Iconify from '../../Components/iconify';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';
// // import "animate.css";


// // // ----------------------------------------------------------------------

// // // ---------------------------------------------------------------

// // export default function Login() {
// //   const theme = useTheme();
// //   // const router = useRouter();
// //   const [showPin, setShowPin] = useState(false);
// //   // const [email, setEmail] = useState('');
// //   const [pin, setPin] = useState('');


// //   // ============================================
// //   //  sweetalert show success message
// //   const showSuccess = (message) => {
// //     Swal.fire({
// //       title: 'Success',
// //       showClass: {
// //         popup: 'animate__animated animate__fadeInDown'
// //       },
// //       hideClass: {
// //         popup: 'animate__animated animate__fadeOutUp'
// //       },
// //       icon: 'success',
// //       text: message,
// //     });
// //   };


// //   // SweetAlert show  error message
// //   const showError = (message) => {
// //     Swal.fire({
// //       icon: 'error',
// //       title: 'error',
// //       showClass: {
// //         popup: 'animate__animated animate__swing'
// //       },
// //       hideClass: {
// //         popup: 'animate__animated animate__fadeOutUp'
// //       },
// //       text: message,
// //     });
// //   };
// //   // ============================================
// //   // ============================================
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();




// //     // send email and pin to server for authentication
// //     e.preventDefault();

    

// //     if (!pin) {
// //       showError("Invalid login credential .");
// //       return;
// //     }
// //     axios.post('http://localhost:2680/api/signin', {
// //       pin
// //     })
// //       .then(res => {
// //         window.localStorage.setItem('tokenId', res.data.token); //The local storage stores the data in the web browser with we give a unique id call tokenId


// //         alert('done');
// //         showSuccess(res.data.token);
// //         setTimeout(function () { window.location = "/profile/user"; }, 3000);

// //       })
// //       .catch(error => {
// //         console.log(error);
// //         showError('Unsuccessful login');
// //       });


// //   };

// //   // ============================================
// //   // ============================================
// //   // ============================================



// //   const renderForm = (
// //     <>
// //       <form onSubmit={() => { handleSubmit }}>
// //         <Stack spacing={3}>
// //           {/* <TextField name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} label="Email address" /> */}


// //           <TextField
// //             name="Pin"
// //             label="Enter Pin to Login"
// //             value={pin}
// //             onChange={(e) => { setPin(e.target.value) }}
// //             type={showPin ? 'text' : 'pin'}
// //             InputProps={{
// //               endAdornment: (
// //                 <InputAdornment position="end">
// //                   <IconButton onClick={() => setShowPin(!showPin)} edge="end">
// //                     <Iconify icon={showPin ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
// //                   </IconButton>
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />
// //         </Stack>

// //         <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
// //           <Link variant="subtitle2" underline="hover">
// //             Forgot pin?
// //           </Link>
// //         </Stack>




// //         <LoadingButton
// //           fullWidth
// //           size="large"
// //           type="submit"
// //           variant="contained"
// //           color="inherit"

// //         >
// //           Login
// //         </LoadingButton>

// //       </form>
// //     </>
// //   );


// //   return (
// //     <>
// //       {/* <Helmet>
// //         <title> Login | Shabak UI </title>
// //       </Helmet> */}
// //       <div>

// //         <Box
// //           sx={{
// //             ...bgGradient({
// //               color: alpha(theme.palette.background.default, 0.9),
// //               imgUrl: { overlayFour },
// //             }),
// //             height: 1,
// //           }}
// //         >
// //           {/* <Logo
// //         sx={{
// //           position: 'fixed',
// //           top: { xs: 16, md: 24 },
// //           left: { xs: 16, md: 24 },
// //         }}
// //       /> */}

// //           <Stack marginTop="1in" alignItems="center" justifyContent="center" sx={{ height: 1 }}>
// //             <Card
// //               sx={{
// //                 p: 5,
// //                 width: 1,
// //                 maxWidth: 420,
// //               }}
// //             >
// //               <Typography variant="h4">Sign in to Optical Centers</Typography>

// //               <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
// //                 Don’t have an account?
// //                 <Link variant="subtitle2" sx={{ ml: 0.5 }}>
// //                   <a href="/signup">Get started</a>
// //                 </Link>
// //               </Typography>

// //               {/* <Stack direction="row" spacing={2}>
// //               <Button
// //                 fullWidth
// //                 size="large"
// //                 color="inherit"
// //                 variant="outlined"
// //                 sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
// //               >
// //                 <Iconify icon="eva:google-fill" color="#DF3E30" />
// //               </Button>

// //               <Button
// //                 fullWidth
// //                 size="large"
// //                 color="inherit"
// //                 variant="outlined"
// //                 sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
// //               >
// //                 <Iconify icon="eva:facebook-fill" color="#1877F2" />
// //               </Button>

// //               <Button
// //                 fullWidth
// //                 size="large"
// //                 color="inherit"
// //                 variant="outlined"
// //                 sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
// //               >
// //                 <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
// //               </Button>
// //             </Stack> */}


// //               <a href="####">
// //                 <Link to="###Contact Page####">Found Glasses</Link>
// //               </a>


// //               <Divider sx={{ my: 3 }}>
// //                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
// //                   OR
// //                 </Typography>
// //               </Divider>

// //               {renderForm}
// //             </Card>
// //           </Stack>
// //         </Box>


// //       </div >

// //     </>
// //   );
// // }

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setLoading(true);
  //     // setError('');

  //     try {
  //         const response = await axios.post('http://localhost:2680/api/optlogin', { email, pin });
  //         if (response.status === 200) {
  //             // Store the token in local storage or any other storage mechanism
  //             localStorage.setItem('token', response.data.token);
  //             showSuccess('Login successful');
  //             // Redirect or perform any other actions as needed
  //         }
  //     } catch (err) {
  //         showError('Login failed. Please check your credentials.');
  //     } finally {
  //         setLoading(false);
  //     }
  // };


    // const handleSubmit = async (e) => {
    //   e.preventDefault();
  
    //   if (!email || !pin) {
    //     showError("All input is required");
    //     return;
    //   }
  
    //   try {
    //     const response = await axios.post('http://localhost:2680/api/optlogin', {
    //       email,
    //       pin
    //     });
  
    //     if (response.status === 200) {
    //       const { tokenId } = response.data;
    //       localStorage.setItem('tokenId', tokenId); // Store token in local storage
    //       showSuccess("Login successful");
    //       // Redirect to profile page or any other page on success
    //      navigate('/Show/Profile'); // Navigate to profile page
    //     }
    //   } catch (error) {
    //     if (error.response && error.response.status === 400) {
    //       showError(error.response.data);
    //     } else {
    //       setLoading(false);
    //       showError('Error logging in');
    //     }
    //   }
    // };
  


    // const handleSubmit = async (e) => {
    //   e.preventDefault();
      
    //   if (!email || !pin) {
    //     showError("All input is required");
    //     return;
    //   }
  
    //   try {
    //     const response = await axios.post('http://localhost:2680/api/optlogin', {
    //       email,
    //       pin
    //     });
  
    //     if (response.status === 200) {
    //       const { tokenId } = response.data;
        

    //       // Store the token in local storage or cookie
    //       localStorage.setItem('tokenId', tokenId);
    //       showSuccess("Login successful");
    //       navigate('/Show/Profile');

          
    //     }
    //   } catch (error) {
    //     if (error.response) {
    //       showError(error.response.data);

    //     console.log(email);
    //     console.log(error.response);
        

    //     } else {
    //       showError('Error logging in');
    //     }
    //   }
    // };
    // const handleSubmit = (e) => {
    //   e.preventDefault();

    //   axios.post('http://localhost:2680/api/optlogin', { email, pin })
    //       .then(res => {
    //           if (res.data.status === 400) {
                
    //         navigate('/Show/Profile');
    //           console.log(res.data.status);
    //           showSuccess(res.data.Status);
    //           }

    //           else {
    //               alert(res.data.Error);
    //           }
    //       })
    //   .then(err => console.log(err));

    //  };
