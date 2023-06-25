// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import SideBar from "../Components/SideBar";

// const Profile = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);

//   const firstName = searchParams.get('firstName') || 'N/A';
//   const lastName = searchParams.get('lastName') || 'N/A';
//   const email = searchParams.get('email') || 'N/A';

//   return (
//     <>
//       <SideBar />
//       <div>
//         <h1>Profile</h1>
//         <p>First Name: {firstName}</p>
//         <p>Last Name: {lastName}</p>
//         <p>Email: {email}</p>
//       </div>
//     </>
//   );
// };

// export default Profile;





import { useState, useEffect } from 'react';
import SideBar from '../Components/SideBar';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';


import "../styles/profile.css";

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');

    setFirstName(searchParams.get('firstName') || storedFirstName || '');
    setLastName(searchParams.get('lastName') || storedLastName || '');
    setEmail(searchParams.get('email') || storedEmail || '');
  }, [location]);

  return (
    <>
      <SideBar />
      <section>
        <section className="profile-container">
            <section className="profile-details">
              <h1>Your Profile</h1>
              <p className="profile-loc">First Name: {firstName}</p>
              <p className="profile-loc">Last Name: {lastName}</p>
              <p className="profile-loc">Email: {email}</p>
              <Link to="/settings"><button className="animated-btn mt-6">Update profile</button></Link>
            </section>
        </section>
      </section>
    </>
  );
};

export default Profile;

