import { useState } from "react";
// import "./styles.scss";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const handleQRCodeGeneration = () => {
    QRCode.toDataURL(url, { width: 300 }, (err, dataUrl) => {
      if (err) console.error(err);
      // set dataUrl state to dataUrl
      setDataUrl(dataUrl);
    });
  };
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <form onSubmit={handleQRCodeGeneration}>
        <input
          required
          type="url"
          placeholder="Enter a valid URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input type="submit" value="Generate" />
      </form>
      {
        /* code to conditionally display the QR code and a download button
        would go here */
      }
    </div>
  );
};
export default QRCodeGenerator;



































































































































































































// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';

// const QRCodeGenerator = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         dob: '',
//         phoneNumber: '',
//         location: '',
//         allergyName: '',
//         allergyReaction: '',
//         allergySeverity: '',
//         diagnosis: '',
//         appointmentDates: '',
//         pin: ''
//     });

//     const [qrData, setQrData] = useState('');

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const generateQRData = () => {
//         const {
//             firstName,
//             lastName,
//             email,
//             dob,
//             phoneNumber,
//             location,
//             allergyName,
//             allergyReaction,
//             allergySeverity,
//             diagnosis,
//             appointmentDates,
//             pin
//         } = formData;

//         const data = {
//             firstName,
//             lastName,
//             email,
//             dob,
//             phoneNumber,
//             location,
//             allergyName,
//             allergyReaction,
//             allergySeverity,
//             diagnosis,
//             appointmentDates,
//             pin
//         };

//         const qrDataString = JSON.stringify(data);
//         setQrData(qrDataString);
//     };

//     return (
//         <div>
//             <h1>QR Code Generator</h1>
//             <div>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter first name"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter last name"
//                 />
//             </div>
//             {/* Add more input fields for other data */}
//             {/* ... */}
//             <br />
//             <button onClick={generateQRData}>Generate QR Code</button>
//             <br />
//             {qrData && (
//                 <div>
//                     <QRCode value={qrData} />
//                     <p>Scan the QR code above</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default QRCodeGenerator;


















// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';

// const QRCodeGenerator = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [qrData, setQrData] = useState('');

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//     updateQRCode();
//   };

//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//     updateQRCode();
//   };

//   const updateQRCode = () => {
//     const fullName = `${firstName} ${lastName}`;
//     setQrData(fullName.trim());
//   };

//   return (
//     <div>
//       <h1>QR Code Generator</h1>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           value={firstName}
//           onChange={handleFirstNameChange}
//           placeholder="Enter first name"
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           value={lastName}
//           onChange={handleLastNameChange}
//           placeholder="Enter last name"
//         />
//       </div>
//       <br />
//       {qrData && (
//         <div>
//           <QRCode value={qrData} />
//           <p>Scan the QR code above</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default QRCodeGenerator;























// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
// import { Button } from 'react-bootstrap';

// const QrCodeGenerate = () => {
//     // const [userData, setUserData] = useState({
//     //     name: '',
//     //     email: '',
//     //     phone: ''
//     // });
//     const [firstName,setFirstName]=useState("");
//     const [lastName,setLastName]=useState("");

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setUserData({ ...userData, [name]: value });
//     // };

//     // const { name, email, phone } = userData;
//     const qrData = `FirstName: ${firstName}\n Lastname: ${lastName}\n`;

//     return (
//         <div className="container">
//             <h1 className="my-4">QR Code Generator</h1>
//             <div className="row">
//                 <div className="col-md-6">
//                     <div id="qr-code-container">
//                         <QRCode value={qrData} size={256} />
//                     </div>
//                     <Button variant="primary" onClick={() => window.print()} className="mt-3">
//                         Print QR Code
//                     </Button>
//                 </div>
//                 <div className="col-md-6">
//                     {/* <div className="user-details">
//                         <h3>User Details</h3>
//                         <p><strong>Name:</strong> {name}</p>
//                         <p><strong>Email:</strong> {email}</p>
//                         <p><strong>Phone:</strong> {phone}</p>
//                     </div> */}
//                     <form>
//                         <div className="form-group">
//                             <label htmlFor="name">First Name</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="firstName"
//                                 name="firstName"
//                                 value={firstName}
//                                 onChange={(e)=>{setFirstName(e.target.value)}}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="lastName">lastName</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="lastName"
//                                 name="lastName"
//                                 value={lastName}
//                                 onChange={(e)=>{setLastName(e.target.value)}}
//                             />
//                         </div>
//                         {/* <div className="form-group">
//                             <label htmlFor="phone">Phone</label>
//                             <input
//                                 type="tel"
//                                 className="form-control"
//                                 id="phone"
//                                 name="phone"
//                                 value={phone}
//                                 onChange={handleChange}
//                             />
//                         </div> */}
//                     </form>
//                     {/* Hidden div for printing */}
//                     <div id="print-contents" className="d-none">
//                         <h3>Patient Details</h3>
//                         <p><strong>First Name:</strong> {firstName}</p>
//                         <p><strong>last Name:</strong> {lastName}</p>
//                         {/* <p><strong>Email:</strong> {email}</p> */}
//                         {/* <p><strong>Phone:</strong> {phone}</p> */}
//                         <div id="qr-code-for-print">
//                             <QRCode value={qrData} size={256} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default QrCodeGenerate;
























// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
// import { Button } from 'react-bootstrap';

// const QrCode = () => {
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handlePrint = () => {
//     const printContents = document.getElementById('qr-code-container').innerHTML;
//     const originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//   };

//   const { name, email, phone } = userData;
//   const qrData = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;

//   return (
//     <div className="container">
//       <h1 className="my-4">QR Code Generator</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <div id="qr-code-container">
//             <QRCode value={qrData} size={256} />
//           </div>
//           <Button variant="primary" onClick={handlePrint} className="mt-3">
//             Print QR Code
//           </Button>
//         </div>
//         <div className="col-md-6">
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone">Phone</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 name="phone"
//                 value={phone}
//                 onChange={handleChange}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QrCode;






// import React, { useRef, useState } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import QRCode from 'qrcode.react';

// const QRCodeGenerator = () => {

//   const qrRef = useRef();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const qrData = `FirstName: ${firstName}\n Lastname: ${lastName}\n`;

//   const handlePrint = () => {
//     const printContents = qrRef.current.innerHTML;
//     const originalContents = document.body.innerHTML;

//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//     window.location.reload(); // Reload to reset the page content
//   };

//   return (
//     <Container className="text-center mt-5">
//       <div>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">First Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={(e) => { setFirstName(e.target.value) }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">lastName</label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               name="lastName"
//               value={lastName}
//               onChange={(e) => { setLastName(e.target.value) }}
//             />
//           </div>
       
//         </form>
//       </div>
//       <div ref={qrRef}>
//         <QRCode value={qrData} size={256} />
//       </div>
//       <Button className="mt-3" onClick={handlePrint}>
//         Print QR Code
//       </Button>
//     </Container>
//   );
// };

// export default QRCodeGenerator;


















// import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
// import { Button } from 'react-bootstrap';

// const QRCodeGenerator = () => {
//   const [qrData, setQRData] = useState('https://example.com');

//   const handlePrint = () => {
//     const printContents = document.getElementById('qr-code-container').innerHTML;
//     const originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//   };

//   return (
//     <div className="container">
//       <h1 className="my-4">QR Code Generator</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <div id="qr-code-container">
//             <QRCode value={qrData} size={256} />
//           </div>
//           <Button variant="primary" onClick={handlePrint} className="mt-3">
//             Print QR Code
//           </Button>
//         </div>
//         <div className="col-md-6">
//           <form>
//             <div className="form-group">
//               <label htmlFor="qr-data">QR Code Data</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="qr-data"
//                 value={qrData}
//                 onChange={(e) => setQRData(e.target.value)}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QRCodeGenerator;
