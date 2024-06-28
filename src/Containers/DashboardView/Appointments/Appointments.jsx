import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'animate.css';
import Swal from 'sweetalert2';
import previous from "../../../Assets/others-assets/icons/glass/previous.png"

import { EyeInSpeechBubble, Plus, Wastebasket } from 'fluent-emoji';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { debounce } from '@mui/material';








export default function Appointments() {
  const [patientsData, setPatientsData] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState('');

  const [Prescriptions, setPrescriptions] = useState("");
  const [Medications, setMedications] = useState("");
  const [AppointmentDates, setAppointmentDates] = useState("");

  useEffect(() => {
    viewFetch();
  }, []);
  function viewFetch() {
    axios.get(`http://localhost:2680/api/viewtest`)
      .then((response) => {
        setPatientsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  ///////////////////////////////////////////
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
 
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  ///////////////////////////////////////////
  const HandleDataView = (id) => {
    // local sTorage
    window.localStorage.setItem('AppointId', id);


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
      
      setPrescriptions(response.data[0].Prescriptions);
      setMedications(response.data[0].Medications);
      setAppointmentDates(response.data[0].AppointmentDates);
    })
      .catch(error => {
        console.error('Error Updating Employee details: ', error);
      })

  }




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
  // const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


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
  const handleSubmitUpdate = async() => {
    // e.preventDefault();


    let patientsUpdateDataId = localStorage.getItem("AppointId");


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


    // ============================End of validation

    try {
      await axios.put(`http://localhost:2680/api/patients/data/update/${patientsUpdateDataId}`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          dob: dob,
          phoneNumber: phoneNumber,
          location: location,
          
          prescriptions: Prescriptions,
          medications: Medications,
          AppointmentDates:AppointmentDates
        });

      showSuccess('Details Updated successfully');
      viewFetch();
    } catch (error) {
      console.error('Error Updated Details:', error);
      showError('Details could not be Updated');
    }
   

  };

 

  // ===================================
  // ===================================
  const renderForm = (
    <>
      <form >

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
            onChange={(e) => {setDob(e.target.value) }}
            label="Date of Birth"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField className='text-field'
            name="email" value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            hidden
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
            hidden
            label="Location (Residential / Digital Address)"
          />
        </Stack>

        &nbsp;



        {/* ============================================= */}

        <Stack spacing={3}>
          
          <TextField className='text-field'
            name="Prescriptions" value={Prescriptions}
            onChange={(e) => { setPrescriptions(e.target.value) }}
            hidden
            label="Prescriptions"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField className='text-field'
            name="Medications" value={Medications}
            onChange={(e) => { setMedications(e.target.value) }}
            hidden
            label="Medications"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField className='text-field'
            name="AppointmentDates"
            value={AppointmentDates}
            type='date'
            onChange={(e) => {setAppointmentDates(e.target.value) }}
            label="Appointment Date"
            InputLabelProps={{
              shrink: true,
            }}
          />

        </Stack>


      </form>
    </>




  );
  // ===================================


  return (
    <div className='patient-section'>
      <div className='d-flex'>
        <Link onClick={(e) => e.preventDefault(handleClick(4)) } to="/Dashboard/HomeDashboard">
          <i><img src={previous} alt="BackIcon" /> Go back </i>
        </Link>
       
      </div> <h3>Appointments</h3>
      <div>






        <table className="table text-nowrap  table-striped table-bordered">
          <thead >
            <tr>
              <th>First Name</th>
              <th>Last Name</th>             
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Appointment Dates</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patientsData.map((patients) => (
              <tr key={patients.id}>
                <td>{patients.firstName}</td>
                <td>{patients.lastName}</td>                
                {/* <td>{patients.dob}</td>                 */}
                               
                <td>{new Date(patients.dob).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                <td>{patients.phoneNumber}</td> 
                {/* <td>{patients.AppointmentDates}</td>  */}
                <td>
                            {patients.AppointmentDates && 
                                new Date(patients.AppointmentDates).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
                            }
                        </td>
                {/* <td>{new Date(patients.AppointmentDates).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</td> */}

                
                <td className='d-flex'>
                  <button onClick={() => handleDelete(patients.id)} id='icon-btn'>
                    <Wastebasket color='red' width={20} height={20} />
                  </button>
                  <button onClick={() => { HandleDataView(patients.id) }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewSinglepatients" style={{ border: "none", background: "none", color: "blue" }}>
                    <EyeInSpeechBubble width={20} height={20} />
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
                <button type="button" onClick={()=>{handleSubmitUpdate()}} class="btn btn-primary">Save changes</button>

              </div>
            </div>
          </div>
        </div>

        
      </div>


    </div>
  )
}




















// // import React, { useEffect, useState } from 'react'
// // // import Card from 'react-bootstrap/Card';
// // // import ListGroup from 'react-bootstrap/ListGroup';
// // import previous from "../../../Assets/others-assets/icons/glass/previous.png"
// // import { Link } from 'react-router-dom'
// // import axios from "axios";
// // import 'animate.css';
// // import Swal from 'sweetalert2';
// // import { EyeInSpeechBubble, Plus, Wastebasket } from 'fluent-emoji';


// // import Stack from '@mui/material/Stack';


// // import TextField from '@mui/material/TextField';
// // import qrcode from "../../../Assets/others-assets/icons/glass/qr-code.png"



// // export default function Appointments({ patientNames }) {
// //   const [AppointData, setAppointData] = useState([]);

// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [phoneNumber, setPhoneNumber] = useState("");
// //   const [dob, setDob] = useState("");
// //   const [appointmentDates, setAppointmentDates] = useState("");


// //   useEffect(() => {
// //     viewAppFetch();
// //   }, []);
// //   function viewFetch() {
// //     axios.get(`http://localhost:2680/api/viewtest`)
// //       .then((response) => {
// //         setAppointData(response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching data:', error);
// //       });
// //   }
// //   const HandleAppDataView = (id) => {
// //     axios.get(`http://localhost:2680/api/viewtest/${id}`);

// //   }

// //   const handleAppDelete = (id) => {
// //     Swal.fire({
// //       title: 'Are you sure you want to delete?',
// //       showClass: {
// //         popup: 'animate__animated animate__tada'
// //       },
// //       hideClass: {
// //         popup: 'animate__animated animate__zoomOutUp'
// //       },
// //       text: "You won't be able to revert this!",
// //       icon: 'warning',
// //       showCancelButton: true,
// //       confirmButtonColor: '#3085d6',
// //       cancelButtonColor: '#d33',
// //       confirmButtonText: 'Yes, delete it!'
// //     }).then((result) => {
// //       if (result.isConfirmed) {
// //         Swal.fire(
// //           'Deleted!',
// //           'Your file has been deleted.',
// //           'success'
// //         )
// //       }
// //     })

// //   }
// //   // =========================================
// //   const handleAppSubmitUpdate = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await axios.put('http://localhost:9980/api/erddata',
// //         firstName,
// //         lastName,
// //         dob,
// //         phoneNumber,
// //         appointmentDates

// //       );
// //       alert('Details updated successfully');
// //     } catch (error) {
// //       console.error('Error updating details:', error);
// //       alert('Details update could not be sent');
// //     }
// //   };
// //   // =====================================
// //   // =====================================
 
  
// //   // =====================================
// //   const renderForm = (
// //     <>
// //       <form onSubmit={handleAppSubmitUpdate}>

// //         <Stack spacing={3}>
// //           <div className='d-flex'>
// //             <TextField className='text-field'
// //               name="Firstname" value={firstName}
// //               onChange={(e) => { setFirstName(e.target.value) }}
// //               label="First Name"
// //             />
// //             <TextField className='text-field'
// //               name="lastName" value={lastName}
// //               onChange={(e) => { setLastName(e.target.value) }}
// //               label="Last Name"
// //             />
// //           </div>

// //           <TextField className='text-field'
// //             name="dob"
// //             type='date' value={dob}
// //             onChange={(e) => { setDob(e.target.value) }}
// //             label="Date of Birth"
// //             InputLabelProps={{
// //               shrink: true,
// //             }}
// //           />

// //           <TextField className='text-field'
// //             name="phoneNumber" type='tel' value={phoneNumber}
// //             onChange={(e) => { setPhoneNumber(e.target.value) }}
// //             label="Phone number"
// //           />


// //           <TextField className='text-field'
// //             name="appointmentDates" value={appointmentDates}
// //             onChange={(e) => { setAppointmentDates(e.target.value) }}
// //             label="AppointmentDates"
// //           />
// //         </Stack>



// //       </form>
// //     </>

// //   );

 
// //   return (
// //     <div>
// //       <div className='d-flex'>
// //         <i>
// //           <Link onClick={() => handleClick(4)} to="/HomeDashboard">
// //             <img src={previous} alt="BackIcon" />
// //           </Link>
// //         </i>
// //         <h3>Appointments</h3>
// //       </div>
     
// //       <table className="table  table-striped table-bordered">
// //         <thead >
// //           <tr>
// //             <th>First Name</th>
// //             <th>Last Name</th>
// //             <th>Date of Birth</th>
// //             <th>Phone Number</th>
// //             <th>Appointment Dates</th>
// //             <th>Actions</th>

// //           </tr>
// //         </thead>
// //         <tbody>
// //           {AppointData.map((Appoint) => (
// //             <tr key={patients.id}>
// //               <td>{Appoint.firstName}</td>
// //               <td>{Appoint.lastName}</td>
// //               <td>{Appoint.dob}</td>
// //               <td>{Appoint.phoneNumber}</td>
// //              <td>{new Date(Appoint.AppointmentDates).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
             

// //               <td className='d-flex'>
// //                 <button onClick={() => handleAppDelete(patients.id)} id='icon-btn'>
// //                   <Wastebasket color='red' width={20} height={20} />
// //                 </button>
// //                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewSingleAppoint" style={{ border: "none", background: "none", color: "blue" }}>
// //                   <EyeInSpeechBubble width={20} height={20} />
// //                 </button>
// //                 <button className="btn" >
// //                   <img src={qrcode} alt="qrcode icon" />
// //                 </button>

// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>



// //       <div class="modal fade" id="viewSingleAppoint" tabIndex="-1" aria-labelledby="viewSingleAppointLabel" aria-hidden="true">
// //         <div class="modal-dialog">
// //           <div class="modal-content">
// //             <div class="modal-header">
// //               <h1 class="modal-title fs-5" id="viewSingleAppointLabel">Appoint Details</h1>
// //               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// //             </div>
// //             <div class="modal-body">
// //               {/* <Form className='details' onSubmit={handleAppSubmitUpdate}> */}
// //               {renderForm}
// //               {/* </Form> */}

// //             </div>
// //             <div class="modal-footer">
// //               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
// //               <button type="button" class="btn btn-primary">Save changes</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>


// //     </div>
// //   )
// // }


























































































// import React, { useEffect, useState } from 'react'
// // import Card from 'react-bootstrap/Card';
// // import ListGroup from 'react-bootstrap/ListGroup';
// import previous from "../../../Assets/others-assets/icons/glass/previous.png"
// import { Link } from 'react-router-dom'
// import axios from "axios";
// import 'animate.css';
// import Swal from 'sweetalert2';
// import { EyeInSpeechBubble, Plus, Wastebasket } from 'fluent-emoji';


// import Stack from '@mui/material/Stack';


// import TextField from '@mui/material/TextField';




// export default function Appointments({ patientNames }) {
//   const [patientsData, setPatientsData] = useState([]);

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dob, setDob] = useState("");
//   const [location, setLocation] = useState("");
//   const [email, setEmail] = useState('');
//   const [allergyName, setAllergyName] = useState('');
//   const [allergyReaction, setAllergyReaction] = useState('');
//   const [allergySeverity, setAllergySeverity] = useState('');
//   const [Diagnosis, setDiagnosis] = useState("");
//   const [Prescriptions, setPrescriptions] = useState("");
//   const [Medications, setMedications] = useState("");
//   const [AppointmentDates, setAppointmentDates] = useState("");

//   useEffect(() => {
//     viewFetch();
//   }, []);
//   function viewFetch() {
//     axios.get(`http://localhost:2680/api/viewtest`)
//       .then((response) => {
//         setPatientsData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }

//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   const HandleAppDataView = (id) => {
//     // local sTorage
//     window.localStorage.setItem('AppId', id);


//     axios.get(`http://localhost:2680/api/patients/view/upd/${id}`
//       ,
//       {
//         method: "GET",
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'Authorization': 'application/json'
//         }
//       }
//     ).then(response => {
//       setFirstName(response.data[0].firstName);
//       setLastName(response.data[0].lastName);
//       setDob(response.data[0].dob);
//       setPhoneNumber(response.data[0].phoneNumber);
//       setLocation(response.data[0].location);      
//       setEmail(response.data[0].email);
//       setAllergyName(response.data[0].allergyName);
//       setAllergyReaction(response.data[0].allergyReaction);
//       setAllergySeverity(response.data[0].allergySeverity);
//       setDiagnosis(response.data[0].Diagnosis);
//       setPrescriptions(response.data[0].Prescriptions);
//       setMedications(response.data[0].Medications);
//       setAppointmentDates(response.data[0].AppointmentDates);
//     })
//       .catch(error => {
//         console.error('Error Updating Employee details: ', error);
//       })

//   }


//   // ======================================
//   // ======================================
//   // ======================================
//   // ======================================
//   // ======================================

//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   const handleAppDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure you want to delete?',
//       showClass: {
//         popup: 'animate__animated animate__tada'
//       },
//       hideClass: {
//         popup: 'animate__animated animate__zoomOutUp'
//       },
//       text: "You won't be able to revert this!",
//       icon: 'error',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {

//         axios.delete(`http://localhost:2680/api/delete/patient/${id}`)

//           .then((response) => {
//             viewFetch();
//             Swal.fire(
//               'Deleted!',
//               'Your file has been deleted.',
//               'success'
//             )
//           })
//           .catch((error) => {
//             console.error('Error deleting info data:', error);
//           });
//       }
//     })


//   }
//   // =========================================
//   // =========================================
//   // =========================================
//   // =========================================
//   // =========================================
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   ///////////////////////////////////////////
//   const nameRegex = /^[A-Za-z\s]+$/;
//   const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
//   // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


//   ///////////////////////////////////////// //
//   ///////////////////////////////////////// //
//   ///////////////////////////////////////// //
//   ///////////////////////////////////////// //

//   // ==============================

//   //  sweetalert show success message
//   const showSuccess = (message) => {
//     Swal.fire({
//       title: 'Success',
//       showClass: {
//         popup: 'animate__animated animate__fadeInDown'
//       },
//       hideClass: {
//         popup: 'animate__animated animate__fadeOutUp'
//       },
//       icon: 'success',
//       text: message,
//     });
//   };


//   // SweetAlert show  error message
//   const showError = (message) => {
//     Swal.fire({
//       icon: 'error',
//       title: 'error',
//       showClass: {
//         popup: 'animate__animated animate__swing'
//       },
//       hideClass: {
//         popup: 'animate__animated animate__fadeOutUp'
//       },
//       text: message,
//     });
//   };
//   ///////////////////////////////////////// //
//   ///////////////////////////////////////// //
//   // // =========================================
//   const handleAppSubmitUpdate = async () => {
    
//     let patientsUpdateDataId = localStorage.getItem("AppId");



//     // ===============================
//     // regex validation
//     // ===========================
//     if (!firstName.match(nameRegex)) {
//       showError('Check firstname and try again');
//       return;
//     }

//     if (!lastName.match(nameRegex)) {
//       showError('Invalid last name format');
//       return;
//     }

//     if (!dob.match(dobRegex)) {
//       showError('Invalid date of birth format (YYYY-MM-DD)');
//       return;
//     }

//     // if (!email.match(emailRegex)) {
//     //   showError('Invalid email format');
//     //   return;
//     // }

//     // if (!phoneNumber.match(phoneRegex)) {
//     //   showError('Invalid phone number format');
//     //   return;
//     // }

//     // ============================End of validation

//     try {
//       await axios.put(`http://localhost:2680/api/patients/data/update/${patientsUpdateDataId}`,
//         {
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           dob: dob,
//           phoneNumber: phoneNumber,
//           location: location,
//           allergyName: allergyName,
//           allergyReaction: allergyReaction,
//           allergySeverity: allergySeverity,
//           Diagnosis: Diagnosis,
//           Prescriptions: Prescriptions,
//           Medications: Medications,
//           AppointmentDates:AppointmentDates
//         });

//       showSuccess('Details Updated successfully');
//       viewFetch();
//     } catch (error) {
//       console.error('Error Updated Details:', error);
//       showError('Details could not be Updated');
//     }


//   };


//   // =====================================
//   const renderForm = (
//     <>
//       <form >

// <Stack spacing={3}>
//   <div className='d-flex'>
//     <TextField className='text-field'
//       name="Firstname" value={firstName}
//       onChange={(e) => { setFirstName(e.target.value) }}
//       label="First Name"
//     />
//     <TextField className='text-field'
//       name="lastName" value={lastName}
//       onChange={(e) => { setLastName(e.target.value) }}
//       label="Last Name"
//     />
//   </div>

//   <TextField className='text-field'
//     name="dob"
//     type='date' value={dob}
//     onChange={(e) => { setDob(e.target.value) }}
//     label="Date of Birth"
//     InputLabelProps={{
//       shrink: true,
//     }}
//   />
//   <TextField className='text-field'
//     name="email" value={email}
//     onChange={(e) => { setEmail(e.target.value) }}
//     hidden
//     label="Email address"
//   />
//   <TextField className='text-field'
//     name="phoneNumber" type='tel' value={phoneNumber}
//     onChange={(e) => { setPhoneNumber(e.target.value) }}
//     label="Phone number"
//   />
//   <TextField className='text-field'
//     name="location" value={location}
//     onChange={(e) => { setLocation(e.target.value) }}
//     hidden
//     label="Location (Residential / Digital Address)"
//   />
// </Stack>

// &nbsp;



// {/* ============================================= */}

// <Stack spacing={3}>
//   <TextField className='text-field'
//     name="AllergyName" value={allergyName}
//     onChange={(e) => { setAllergyName(e.target.value) }}
//     hidden
//     label="Allergy Name"
//   />
//   <TextField className='text-field'
//     name="AllergyReaction" value={allergyReaction}
//     onChange={(e) => { setAllergyReaction(e.target.value) }}
//     hidden
//     label="Allergy Reaction "
//   />
//   <TextField className='text-field'
//     name="phoneNumber" value={allergySeverity}
//     onChange={(e) => { setAllergySeverity(e.target.value) }}
//     hidden
//     label="Allergy Severity"
//   />

//   <TextField className='text-field'
//     name="Diagnosis" value={Diagnosis}
//     onChange={(e) => { setDiagnosis(e.target.value) }}
//     hidden
//     label="Diagnosis"
//   />

//   <TextField className='text-field'
//     name="Prescriptions" value={Prescriptions}
//     onChange={(e) => { setPrescriptions(e.target.value) }}
//     hidden
//     label="Prescriptions"
//     InputLabelProps={{
//       shrink: true,
//     }}
//   />

//   <TextField className='text-field'
//     name="Medications" value={Medications}
//     onChange={(e) => { setMedications(e.target.value) }}
//     hidden
//     label="Medications"
//     InputLabelProps={{
//       shrink: true,
//     }}
//   />

//   <TextField className='text-field'
//     name="AppointmentDates"
//     value={AppointmentDates}
//     onChange={(e) => {setAppointmentDates(e.target.value) }}  
//     type='date'
//     label="Appointment Date"
//     InputLabelProps={{
//       shrink: true,
//     }}
//   />

// </Stack>


// </form>
//     </>

//   );


//   return (
//     <div>
//       <div className='d-flex'>
//         <i>
//           <Link onClick={() => handleClick(4)} to="/HomeDashboard">
//             <img src={previous} alt="BackIcon" />
//           </Link>
//         </i>
//         <h3>Appointments</h3>
//       </div>

//       <table className="table  table-striped table-bordered">
//         <thead >
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Date of Birth</th>
//             <th>Phone Number</th>
//             <th>Appointment Dates</th>
//             <th>Actions</th>

//           </tr>
//         </thead>
//         <tbody>
//           {patientsData.map((patients) => (
//             <tr key={patients.id}>
//               <td>{patients.firstName}</td>
//               <td>{patients.lastName}</td>
//               <td>{patients.dob}</td>
//               <td>{patients.phoneNumber}</td>
//               <td>{new Date(patients.AppointmentDates).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</td>


//               <td className='d-flex'>
//                 <button onClick={() => handleAppDelete(patients.id)} id='icon-btn'>
//                   <Wastebasket color='red' width={20} height={20} />
//                 </button>
//                 <button onClick={()=>{HandleAppDataView(patients.id)}} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewSingleAppoint" style={{ border: "none", background: "none", color: "blue" }}>
//                   <EyeInSpeechBubble width={20} height={20} />
//                 </button>
               
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>



//       <div class="modal fade" id="viewSingleAppoint" tabIndex="-1" aria-labelledby="viewSingleAppointLabel" aria-hidden="true">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="viewSingleAppointLabel">Appoint Details</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               {/* <Form className='details' onSubmit={handleAppSubmitUpdate}> */}
//               {renderForm}
//               {/* </Form> */}

//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" onClick={()=>{handleAppSubmitUpdate()}} class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   )
// }
