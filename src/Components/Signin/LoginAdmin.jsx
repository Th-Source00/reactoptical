
import { useState } from 'react';

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
import { Link } from 'react-router-dom';


// import { useRouter } from '../../routes/hooks/use-router';

import { bgGradient } from '../../theme/css';
import overlayFour from "../../Assets/others-assets/background/overlay_4.jpg"

// import Logo from '../../Assets/others-assets/logo.svg';
import Iconify from '../iconify';
import Swal from 'sweetalert2';
import axios from 'axios';
import "animate.css";
import Arrow from '../arrow/Arrow';


// ----------------------------------------------------------------------

// ---------------------------------------------------------------

export default function LoginAdmin() {
  const theme = useTheme();
  // const router = useRouter();
  const [showPassword, setshowPassword] = useState(false);
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // ============================================
  //  sweetalert show success message
  const showSuccess = (message) => {
    Swal.fire({
      title: 'Success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      icon: 'success',
      text: message,
    });
  };


  // SweetAlert show  error message
  const showError = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'error',
      showClass: {
        popup: 'animate__animated animate__swing'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      text: message,
    });
  };

  // ============================================
  // ============================================
  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordInput = document.getElementById('password'); // Assuming the password input field has id="password"

    if (!passwordInput) {
      console.error("Password input field not found!");
      return;
    }

    const password = passwordInput.value;

    if (password === "12342") {
      showSuccess("Login Successful!!");

      // Redirect to new window location if password matches
      setTimeout(function () { window.location = "/Dashboard"; }, 3000);
      // Update with your desired new location
    } else {
      showError("Invalid login credential!");
    }
  };


  // ============================================
  // ============================================
  // ============================================



  const renderForm = (
    <>

      <Stack spacing={3}>
        {/* <TextField name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} label="Email address" /> */}


        <TextField
          name="password"
          label="Enter password to Login"
          value={password}
          id="password"
          onChange={(e) => { setPassword(e.target.value) }}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setshowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>




      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="inherit"
        onClick={(e) => { handleSubmit(e) }}
      >
        Login
      </LoadingButton>


    </>
  );


  return (
    <>

      <div className='container-fluid'>

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
          {/* <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}
      <div>
      
          <Link to="/"> <Arrow/>
        </Link>
      </div>

          <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
            <Card
              sx={{
                p: 3,
                maxWidth: 420,
              }}
            >
              <Typography variant="h8" >Admin Login portal</Typography>



              {/* <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:google-fill" color="#DF3E30" />
              </Button>

              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:facebook-fill" color="#1877F2" />
              </Button>

              <Button
                fullWidth
                size="large"
                color="inherit"
                variant="outlined"
                sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
              >
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
              </Button>
            </Stack> */}




              <Divider sx={{ my: 3 }}>

              </Divider>

              {renderForm}
            </Card>
          </Stack>
        </Box>


      </div >

    </>
  );
}
