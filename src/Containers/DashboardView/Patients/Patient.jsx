import React, { useState, useEffect } from 'react';
import "./patients.css"
import axios from "axios";
import 'animate.css';
import Swal from 'sweetalert2';
import previous from "../../../Assets/others-assets/icons/glass/previous.png"

import { Eye, Pencil, Plus, Wastebasket } from 'fluent-emoji';
// import { Form } from 'react-bootstrap';

import Stack from '@mui/material/Stack';

import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import qrcode from "../../../Assets/others-assets/icons/glass/qr-code.png"
// import { Button, Modal } from 'react-bootstrap';
import glasses from '../../../Assets/others-assets/icons/glass/glasses.png'
// import HomeDashboard from '../../DashBoard/HomeDashBoard';
import { debounce } from '@mui/material';




export default function Patient() {
  const [patientsData, setPatientsData] = useState([]);


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




  useEffect(() => {
    viewFetch();
  }, []);
  function viewFetch() {
    axios.get(`http://localhost:2680/api/viewtest`)
      .then((response) => {
        const data = response.data;
        // Assign a sequential number to each patient for display
        const formattedPatients = data.map((patients, index) => ({
          ...patients,
          displayIndex: index + 1 // Sequential number starting from 1
        }));
        setPatientsData(formattedPatients);
        // setPatientsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  ///////////////////////////////////////////


  const HandleDataView = (id) => {
    // local sTorage
    window.localStorage.setItem('empId', id);


    axios.get(`http://localhost:2680/api/patients/view/upd/${id}`
      ,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'application/json'
        }
      }
    ).then(response => {
      setFirstName(response.data[0].firstName);
      setLastName(response.data[0].lastName);
      setDob(response.data[0].dob);
      setPhoneNumber(response.data[0].phoneNumber);
      setLocation(response.data[0].location);
      setEmail(response.data[0].email);
      setPrescriptions(response.data[0].prescriptions);
      setMedications(response.data[0].medications);
      setTreatment(response.data[0].treatment);
      setComment(response.data[0].comment);
      setFrameBrand(response.data[0].frameBrand);
      setColour(response.data[0].colour);

      setCode(response.data[0].code);
      setPin(response.data[0].pin);

    })
      .catch(error => {
        console.error('Error Updating Employee details: ', error);
      })

  }

  const HandleDetailsView = (id) => {
    // local sTorage
    window.localStorage.setItem('empId', id);


    axios.get(`http://localhost:2680/api/patients/view/upd/${id}`
      ,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'application/json'
        }
      }
    ).then(response => {
      setFirstName(response.data[0].firstName);
      setLastName(response.data[0].lastName);
      setDob(response.data[0].dob);
      setPhoneNumber(response.data[0].phoneNumber);
      setLocation(response.data[0].location);
      setEmail(response.data[0].email);
      setPrescriptions(response.data[0].prescriptions);
      setMedications(response.data[0].medications);
      setTreatment(response.data[0].treatment);
      setComment(response.data[0].comment);
      setFrameBrand(response.data[0].frameBrand);
      setColour(response.data[0].colour);

      setCode(response.data[0].code);
      setPin(response.data[0].pin);
      // setQrData(response.data[0].qrData);
    })
      .catch(error => {
        console.error('Error Updating Employee details: ', error);
      })

  }


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



  const HandleDataViewQrcode = async (id) => {

    // local sTorage
    window.localStorage.setItem('empId', id);
    // console.log();

    await axios.get(`http://localhost:2680/api/qrcode/${id}`
      ,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'application/json'
        }
      }
    ).then(response => {
      console.log(response.data.qrcode);
      //  let QrText = QRCode?.toDataURL(response.data?.qrcode);
      setQrData(response.data?.qrcode);
    })
      .catch(error => {
        console.error('Error fetching QR code:', error);
      })



    // try {
    //   const response = await axios.get(`http://localhost:2680/api/qrcode/${id}`);
    //   setQrData(response.data[0].qrData);
    //   setPatientsData(id);
    // } catch (error) {
    //   console.error('Error fetching QR code:', error);
    // }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Optical Centers</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin: 0;
              height: 100vh;
              text-align: center;
            }
            #header {
              width: 100%;
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
            }
            #qr-code {
              display: flex;
              justify-content: center;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>
          <div id="header">
            <img src="${glasses}" alt="Header Image" style="width: 50%; max-width: 150px;" />
          </div>
          <div id="qr-code">
            <img src="${qrData}" alt="QR Code" style="width: 390px; height: 390px;" />
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };



  //   const printWindow = window.open('', '_blank');
  //   printWindow.document.write(`
  //     <html>
  //       <head>
  //         <title>Optical Centers</title>
  //       </head>
  //       <body>
  //         <img src="${qrData}" alt="QR Code" style="width: 390px; height: 390px;" />
  //       </body>
  //     </html>
  //   `);
  //   // const printWindow = window.open('', '_blank');
  //   // printWindow.document.write(`<img src="${qrData}" style="width: 190px; height: 190px;" alt="QR Code" />`);
  //   printWindow.document.close();
  //   printWindow.print();
  // };

  // const handlePrint = () => {
  //   const printContent = document.getElementById('printableArea').innerHTML;
  //   const printWindow = window.open('', '_blank');
  //   printWindow.document.write(printContent);
  //   printWindow.document.close();
  //   printWindow.print();
  // };






  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      showClass: {
        popup: 'animate__animated animate__tada'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOutUp'
      },
      text: "You won't be able to revert this!",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`http://localhost:2680/api/delete/patient/${id}`)

          .then((response) => {

            viewFetch();

            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          })
          .catch((error) => {
            console.error('Error deleting info data:', error);
          });
      }
    })


  }
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  const nameRegex = /^[A-Za-z\s]+$/;
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  ///////////////////////////////////////// //
  ///////////////////////////////////////// //
  ///////////////////////////////////////// //
  ///////////////////////////////////////// //

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
  ///////////////////////////////////////// //
  // // =========================================
  const handleSubmitUpdate = async () => {
    let patientsUpdateDataId = localStorage.getItem("empId");
    // ===============================
    // regex validation
    // ===========================
    if (!firstName.match(nameRegex)) {
      showError('Check firstname and try again');
      return;
    }
    if (!lastName.match(nameRegex)) {
      showError('Invalid last name format');
      return;
    }
    if (!dob.match(dobRegex)) {
      showError('Invalid date of birth format (YYYY-MM-DD)');
      return;
    }
    if (!email.match(emailRegex)) {
      showError('Invalid email format');
      return;
    }
    try {
      await axios.put(`http://localhost:2680/api/patients/data/update/${patientsUpdateDataId}`,
        {
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
      showSuccess('Details Updated successfully');
      viewFetch();
    } catch (error) {
      console.error('Error Updated Details:', error);
      showError('Details could not be Updated');
    }
  };


  const renderFormDetails = (
    <>
      {
        <form>
          <Stack spacing={3}>


            <div style={{ fontSize: "16px" }} className='container'>
              <div style={{ borderRadius: "25px" }} classname="d-flex">
                <b>First Name :   <i>{firstName ? firstName : "Not Set"}</i></b>
                &nbsp;
                &nbsp;
                <b>LastName :    <i>{lastName ? lastName : "Not Set"}</i> </b>
              </div>


              <b> Dob:  <i>{dob ? dob : "Not Set"}</i> </b>
              <div>
                <b>PhoneNumber:  <i>{phoneNumber ? phoneNumber : "Not Set"}</i>  </b>
                &nbsp;
                &nbsp;
                <b>Location:  <i>{location ? location : "Not Set"}</i>  </b>
              </div>

              <b> Email:  <i>{email ? email : "Not Set"}</i> </b>

              <div>
                <b>Prescriptions:  <i>{prescriptions ? prescriptions : "Not Set"} </i> </b>
                &nbsp;
                &nbsp;
                <br />
                <b>Medications:   <i>{medications ? medications : "Not Set"}</i>  </b>
              </div>

              <b> Treatment:   <i>{treatment ? treatment : "Not Set"}</i> </b>


              <br />
              <b> Comment:  <i>{comment ? comment : "Not Set"} </i> </b>
              <br />
              <b> FrameBrand:  <i>{frameBrand ? frameBrand : "Not Set"}</i> </b>
              <br />
              <b> Colour:<i> {colour ? colour : "Not Set"}</i></b>

              <br />
              <b>Code:<i> {code ? code : "Not Set"}</i> </b>

            </div>
          </Stack>
        </form>

      }

    </>
  );

  const renderForm = (
    // ============================================
    // Step One

    <>
      <form >

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
          {/* <LoadingButton
            fullWidth
            size="large"
            type="button"
            variant="contained"
            color="success"
            onClick={nextStep}
          >
            Next
          </LoadingButton> */}

        </>


        {/* ============================================= */}

        {/* ============================================= */}

        <Stack spacing={3}>


          <TextField
            className='text-field'
            name="Prescriptions"
            value={prescriptions}
            onChange={(e) => { setPrescriptions(e.target.value) }}
            label="Prescriptions"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className='text-field'
            name="Medications"
            value={medications}
            onChange={(e) => { setMedications(e.target.value) }}
            label="Medications"
            InputLabelProps={{
              shrink: true,
            }}
          />


          <TextField

            name="Treatment"
            value={treatment}
            onChange={(e) => { setTreatment(e.target.value) }}
            label="Treatments"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            name="Comments"
            value={comment}
            onChange={(e) => { setComment(e.target.value) }}
            aria-label="comment box"
            minRows={3}
            placeholder="Comments"
            InputLabelProps={{
              shrink: true,
            }}
          />
          {/* <small style={{ marginBottom: "20px" }}><i>{maxChars - comment.length} characters remaining</i></small> */}
        </Stack>
        {/* 
       
        {/* ============================================= */}
        {/* ============================================= */}
        &nbsp;
        <Stack spacing={3}>
          <TextField
            className='text-field'
            name="frameBrand"
            value={frameBrand}
            onChange={(e) => { setFrameBrand(e.target.value) }}
            label="Frame Brand"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className='text-field'
            name="colour"
            value={colour}
            onChange={(e) => { setColour(e.target.value) }}
            label="Colour"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className='text-field'
            name="code"
            type='text'
            value={code}
            onChange={(e) => { setCode(e.target.value) }}
            label="Code"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>

        {/* &nbsp;
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
        </LoadingButton> */}




        {/* ============================================= */}

        <Stack spacing={3}>
          &nbsp;

          <>

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


          </>
        </Stack>

        {/* &nbsp;
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
        </LoadingButton> */}






        <>
          {/* Display QR code and data on step 4 */}

          {/* <div style={{ marginLeft: "30%", marginRight: "auto", marginBottom: "5px" }} className="container-fluid">
                {qrData && (
                  <div>
                    <QRCode value={generateQRData} size={150} />                   
                  </div>
                )}
              </div> */}
          {/* <LoadingButton
            fullWidth
            size="large"
            type="button"
            variant="contained"
            color="info"
            onClick={() => { handleShow() }}
          >

            Generate QR Code
          </LoadingButton> */}
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
            type="submit"
            variant="contained"
            color="success"
            disabled={!isFormValid()}
          >
            Submit
          </LoadingButton>


        </div> */}

      </form>
    </>

  );

  // ===================================

  console.log(qrData);

  return (

    <div className='patient-section'>

      <div className='d-flex'>
        <Link onClick={() => handleClick(4)} to="Dashboard/HomeDashboard">
          <i><img src={previous} alt="BackIcon" />Go back</i>
        </Link>
        <br />

      </div><h3>Patients List</h3>
      <div >
        <table className="table text-nowrap  table-striped table-bordered">
          <thead >
            <tr>
              <th>ID#</th>

              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Location</th>

              <th>Patient's ID</th>
              {/* <th>Prescriptions</th>
              <th>Medications</th>
              <th>Treatment</th>
              <th>Remarks /Comments</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patientsData.map((patients) => (
              <tr key={patients.id}>
                {/* <td>{patients.id +1}</td> */}
                <td>{patients.displayIndex}</td>
                <td>{patients.firstName}</td>
                <td>{patients.lastName}</td>
                <td>{patients.email}</td>
                <td>{new Date(patients.dob).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                <td>{patients.phoneNumber}</td>
                <td>{patients.location}</td>
                <td>{patients.patientIdf}</td>



                {/* <td>{patients.prescriptions}</td>
                <td>{patients.medications}</td>
                <td>{patients.treatment}</td>
                <td>{patients.comment}</td> */}
                <td className='d-flex'>
                  <button
                    onClick={() => handleDelete(patients.id)}
                    id='icon-btn'>
                    <Wastebasket color='red' width={20} height={20} />
                  </button>
                  <button
                    onClick={() => { HandleDataView(patients.id) }}
                    className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewSinglepatients" style={{ border: "none", background: "none", color: "blue" }}>
                    <Pencil width={20} height={20} />
                  </button>

                  <button
                    onClick={() => { HandleDetailsView(patients.id) }}
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#viewSinglepatientsDetails"
                    style={{ border: "none", background: "none", color: "blue" }}>
                    <Eye width={20} height={20} />
                  </button>

                  <button
                    onClick={() => { HandleDataViewQrcode(patients.id) }}
                    data-bs-toggle="modal"
                    data-bs-target="#viewSinglepatientsQRcode"
                    className="btn "
                  >
                    <img src={qrcode} alt="qrcode icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='addNew-div'>
          <a href="###">
            <Link id="plusButton" type='button' className='btn btn-success' to="*"><Plus width={30} height={30} /></Link>
          </a>
        </div>
        {/* ============================= */}
        <div class="modal fade" id="viewSinglepatients" tabIndex="-1" aria-labelledby="viewSinglepatientsLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewSinglepatientsLabel">patients Details</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {renderForm}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={() => { handleSubmitUpdate() }} class="btn btn-primary">Save changes</button>

              </div>
            </div>
          </div>
        </div>



        <div className="modal fade"
          id="viewSinglepatientsQRcode"
          tabIndex="-1"
          aria-labelledby="viewSinglepatientsQRcodeLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="viewSinglepatientsQRcodeLabel">Patient's QR Code</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div style={{ textAlign: 'center', marginTop: '20px' }} className="container-fluid">
                  {qrData && (
                    <div>
                      <img src={qrData} size={190} style={{ width: '190px', height: '190px' }} />

                      <p style={{ marginTop: "10px", fontSize: "14px" }}>
                        Patient ID: {patientsData.length > 0 && patientsData[0].patientIdf.substring(0, 8)}
                      </p>
                    </div>
                  )}
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-secondary" onClick={() => { handlePrint() }}>Print</button>
                <button type="button" onClick={() => { handleSubmitUpdate() }} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade"
          id="viewSinglepatientsDetails"
          tabIndex="-1"
          aria-labelledby="viewSinglepatientsDetailsLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="viewSinglepatientsDetailsLabel">View Patient's Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {renderFormDetails}

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>







      </div>


    </div >
  )
}



























