import React from 'react';
import { useParams } from 'react-router-dom';

function AccountComponent() {
  // Extract firstName and lastName from the URL parameters
  const { firstName, lastName } = useParams();

  // Construct the account object
  const account = {
    displayName: `${firstName} ${lastName}`,
    email: 'demo@minimals.cc',
    photoURL: '../../../Assets/images/',
  };

  return (
    <div>
      
      <p>Display Name: {account.displayName}</p>
      <p>Email: {account.email}</p>
      <img src={account.photoURL} alt="Profile" />
    </div>
  );
}

export default AccountComponent;






















// export const account = {
//   displayName: 'Jaydon Frankie',
//   email: 'demo@minimals.cc',
//   photoURL: '/assets/images/avatars/avatar_25.jpg',
// };