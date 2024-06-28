
import { useState } from 'react';
import "./register.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
// import InputAdornment from '@mui/material/InputAdornment';

// import { useRouter } from '../../routes/hooks/use-router';

import { bgGradient } from '../../../theme/css';
// import overlayFour from "../../Assets/others-assets/background/overlay_4.jpg"

// import Logo from '../../Assets/others-assets/logo.svg';
// import Iconify from '../../../Components/iconify';
import Swal from 'sweetalert2';
import axios from 'axios';
import "animate.css";
import previous from "../../../Assets/others-assets/icons/glass/previous.png"
import { debounce } from '@mui/material';


// import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import QRCode from "qrcode.react"
// ----------------------------------------------------------------------

// ---------------------------------------------------------------

export default function RegisterOpt() {
  // Setup states
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const maxChars = 200;

  // step one States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState('');

  // step two States
  const [treatment, setTreatment] = useState("");
  const [comment, setComment] = useState("");
  const [prescriptions, setPrescriptions] = useState("");
  const [medications, setMedications] = useState("");

  // step Three States
  const [frameBrand, setFrameBrand] = useState("");
  const [code, setCode] = useState("");
  const [colour, setColour] = useState("");

  // step Four States
  const [AppointmentDates, setAppointmentDates] = useState("");
  const [pin, setPin] = useState("");
  const [qrData, setQrData] = useState("");

  ///////

  // ==============================

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
  ///////////////////////////////////////// //
  /////////////


  const getErrorMessage = () => {
    // Step one Validation
    // ==========================================
    if (currentStep === 1) {
      // if (!firstName || !/^[a-zA-Z0-9\s\-_:]+$/.test(firstName)) {
      //   return "First name required!!!!.";
      // }

      if (!firstName || !/^[a-zA-Z\s\-_:]+$/.test(firstName)) {
        return ("First name field only accepts Letters!! || Check and try again.");
      }
      if (!lastName || !/^[a-zA-Z\s\-_:]+$/.test(lastName)) {
        return ("Last name  field only accepts Letters!!.||Check and try again.");
      }
      if (!email || !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        return ("Please check your email and try again .");
      }
      if (!dob) {
        return ("Invalid date of birth || check and try again .");
      }

      if (!phoneNumber || !/^\+?[\d\s\-]+$/.test(phoneNumber)) {
        return ("Phone number feild only accepts numbers || Check and try again.");
      }

      if (!location || !/^[a-zA-Z0-9\s\-_:]+$/.test(location)) {
        return ("Check location and try again.");
      }
    }




    // Step Four Validation
    // ==========================================
    if (currentStep === 4 && (!pin)) {
      if (!pin) {
        return ("Invalid  Pin or Pin not set|| check and try again .");
      }
      return false;
    }


    return null;  // No errors found
  };
  // ============================================
  const isFormValid = () => {
    return getErrorMessage() === null;
  };


  const nextStep = () => {
    const errorMessage = getErrorMessage();
    if (errorMessage) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'red',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 5500,
        timerProgressBar: true
      });
      Toast.fire({

        icon: 'error',
        title: errorMessage,
      });

      return;
    }
    setCurrentStep(currentStep + 1);
  };
  // ============================================
  // ============================================
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  // ============================================


  // // ============================================
  // const generateQRData = () => {
  //   if (
  //     !firstName ||
  //     !lastName ||
  //     !email
  //   ) {
  //     setQrData('');
  //     return;
  //   }
  //   const data = {
  //     firstName,
  //     lastName,
  //     email
  //   };
  //   const qrDataString = JSON.stringify(data);
  //   setQrData(qrDataString);
  // };


  
  const [showPatient, setShowPatient] = useState(false);
	const [showInventory, setShowInventory] = useState(false);
	const [showAppointments, setShowAppointments] = useState(false);
	const [showHomeDashboard, setShowHomeDashboard] = useState(true);
	const [showRegisterOpt, setShowRegisterOpt] = useState(false);

	const handleClick = debounce((componentNumber) => {
		if (componentNumber === 1) {
			setShowPatient(!showPatient);
			setShowInventory(false);
			setShowAppointments(false);
			setShowHomeDashboard(false);
			setShowRegisterOpt(false);
		} else if (componentNumber === 2) {
			setShowPatient(false);
			setShowInventory(!showInventory);
			setShowAppointments(false);
			setShowHomeDashboard(false);
			setShowRegisterOpt(false);
		} else if (componentNumber === 3) {
			setShowPatient(false);
			setShowInventory(false);
			setShowAppointments(!showAppointments);
			setShowHomeDashboard(false);
			setShowRegisterOpt(false);
		}
		else if (componentNumber === 4) {
			setShowPatient(false);
			setShowInventory(false);
			setShowAppointments(false);
			setShowHomeDashboard(!showHomeDashboard);
			setShowRegisterOpt(false);
		}
		else if (componentNumber === 5) {
			setShowPatient(false);
			setShowInventory(false);
			setShowAppointments(false);
			setShowHomeDashboard(false);
			setShowRegisterOpt(!showRegisterOpt);
		}
	}, 500);




  // ============================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:2680/api/Optical',
        {
          //Step one handle submit to backend
          firstName: firstName,
          lastName: lastName,
          email: email,
          dob: dob,
          phoneNumber: phoneNumber,
          location: location,
          //Step two handle submit to backend
          prescriptions: prescriptions,
          medications: medications,
          treatment: treatment,
          comment: comment,
          //Step Three handle submit to backend
          frameBrand: frameBrand,
          colour: colour,
          code: code,

          //Step Four handle submit to backend
          AppointmentDates: AppointmentDates,
          pin: pin,
          qrData: qrData
        });
      // alert('Details sent successfully');
      showSuccess('Details sent successfully!');
      setTimeout(() => { window.location = "/Dashboard"; }, 1000);

    } catch (error) {
      console.error('Error sending Details:', error);
      // alert('Details could not be sent');
      showError('Error sending Details ||Email already exists || Check and try again');
    }

  };



  const renderForm = (
    // ============================================
    // Step One

    <>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
            <Stack spacing={3}>
              <div className='d-flex'>
                <TextField className='text-field'
                  name="Firstname" value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                  label="First Name"
                />
                <TextField className='text-field'
                  name="lastName" value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
                  label="Last Name"
                />
              </div>

              <TextField className='text-field'
                name="dob"
                type='date' value={dob}
                onChange={(e) => { setDob(e.target.value) }}
                label="Date of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField className='text-field'
                name="email" value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                label="Email address"
              />
              <TextField className='text-field'
                name="phoneNumber" type='tel' value={phoneNumber}
                onChange={(e) => { setPhoneNumber(e.target.value) }}
                label="Phone number"
              />
              <TextField className='text-field'
                name="location" value={location}
                onChange={(e) => { setLocation(e.target.value) }}
                label="Location (Residential / Digital Address)"
              />
            </Stack>

            &nbsp;
            <LoadingButton
              fullWidth
              size="large"
              type="button"
              variant="contained"
              color="success"
              onClick={nextStep}
            >
              Next
            </LoadingButton>

          </>

        )}
        {/* ============================================= */}
        {/* step Two */}
        {/* ============================================= */}
        {currentStep === 2 && (
          <>
            <Stack spacing={3}>

              <TextField
                className='text-field'
                name="Prescriptions"
                value={prescriptions}
                onChange={(e) => { setPrescriptions(e.target.value) }}
                label="Prescriptions"
              />

              <TextField
                className='text-field'
                name="Medications"
                value={medications}
                onChange={(e) => { setMedications(e.target.value) }}
                label="Medications"
              />


              <TextField

                name="Treatment"
                value={treatment}
                onChange={(e) => { setTreatment(e.target.value) }}
                label="Treatments"
              />
              <TextField
                name="Comments"
                value={comment}
                onChange={(e) => { setComment(e.target.value) }}
                aria-label="comment box"
                label="Comments"
                minRows={3}

                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />

              <small><b><div>{maxChars - comment.length} characters remaining</div></b></small>


            </Stack>
            <div className='d-flex'>
              <LoadingButton
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="primary"
                onClick={prevStep}
              >
                Back
              </LoadingButton>
              &nbsp;
              <LoadingButton
                fullWidth
                size="large"

                variant="contained"
                color="success"
                onClick={nextStep}
              //  onClick={()=>{handleQrGenerate()}}
              >
                Next
              </LoadingButton>

            </div>

          </>
        )
        }
        {/* ============================================= */}
        {/* ============================================= */}
        {currentStep === 3 && (
          <>
            <Stack spacing={3}>
              <TextField
                className='text-field'
                name="frameBrand"
                value={frameBrand}
                onChange={(e) => { setFrameBrand(e.target.value) }}
                label="Frame Brand"
              />
              <TextField
                className='text-field'
                name="colour"
                value={colour}
                onChange={(e) => { setColour(e.target.value) }}
                label="Colour"
              />
              <TextField
                className='text-field'
                name="code"
                type='text'
                value={code}
                onChange={(e) => { setCode(e.target.value) }}
                label="Code"
              />
            </Stack>

            &nbsp;
            <div className="d-flex">
              <LoadingButton
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="primary"
                onClick={prevStep}
              >
                Back
              </LoadingButton>
              &nbsp;
              <LoadingButton
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="success"
                onClick={nextStep}
              >
                Next
              </LoadingButton>

            </div>

          </>

        )}
        {/* ============================================= */}
        {/* Step 4 */}
        {currentStep === 4 && (
          <>
            <>
              <div className='d-flex'>
                <TextField className='text-field'
                  name="AppointmentDates"
                  type='date' value={AppointmentDates}
                  onChange={(e) => { setAppointmentDates(e.target.value) }}
                  label="Appointment Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                &nbsp;

                <TextField className='text-field'
                  name="Pin"
                  type='Number' value={pin}
                  onChange={(e) => { setPin(e.target.value) }}
                  label="Pin"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

              </div>
            </>

            &nbsp;
            {/* <div className="d-flex">
              <LoadingButton
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="primary"
                onClick={prevStep}
              >
                Back
              </LoadingButton>
              &nbsp;
              <LoadingButton
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="success"
                onClick={nextStep}
              >
                Next
              </LoadingButton>



            </div> */}

            <div className="d-flex">
              <LoadingButton
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="primary"
                onClick={prevStep}
              >
                Back
              </LoadingButton>
              &nbsp;


              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="success"
                disabled={!isFormValid()}
              >
                Submit
              </LoadingButton>


            </div>


          </>
        )}



      </form >
    </>

  );

  // ===========Qr generatorr logic =================================

  // ============================================
  // const [showModal, setShowModal] = useState(false);

  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);

  // console.log(generateQRData());

  return (
    <>
      {/* --------------------------------------------------- */}
      <div>
        <Link onClick={(e) => e.preventDefault(handleClick(4))} to="/Dashboard/HomeDashboard">
          <i><img src={previous} alt="BackIcon" /> Go back</i>
        </Link>
      </div>
      <div >

        <Box
          sx={{
            ...bgGradient({
              color: alpha(theme.palette.background.default, 0.9),
              // imgUrl: { overlayFour },
            }),
            height: 1,
          }}
        >

          <Stack marginTop="0.5in" alignItems="center" justifyContent="center" sx={{ height: 1 }}>
            <Card
              sx={{
                p: 5,
                width: 1,
                maxWidth: 520,
              }}
            >
              <Typography className='typo-head' variant="h4">Patient Registeration Portal</Typography>

              {/* <Typography className='typo-body' variant="body2" sx={{ mt: 2, mb: 5 }}>
                Already have an account?
                <a id='typo-link' href="#">
                  <Link to={onclick(handleClick(4))} className='typo-link' variant="subtitle2" sx={{ ml: 0.5 }}>
                    View Details
                  </Link></a>
              </Typography> */}


              <Divider className='divider' sx={{ my: 5 }}></Divider>

              {renderForm}
            </Card>
          </Stack>
        </Box>
      </div >




    </>
  );
}










































