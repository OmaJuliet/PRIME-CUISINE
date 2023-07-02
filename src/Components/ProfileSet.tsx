import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { RxPerson } from 'react-icons/rx';


const ProfileSet = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');

    setFirstName(storedFirstName || searchParams.get('firstName') || '');
    setLastName(storedLastName || searchParams.get('lastName') || '');
    setEmail(storedEmail || searchParams.get('email') || '');
  }, [location]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set('firstName', firstName);
    searchParams.set('lastName', lastName);
    searchParams.set('email', email);

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);


    navigate({
      pathname: '/profile',
      search: `?${searchParams.toString()}`,
    });

  };

  return (
    <>
      <SideBar />
      <form className="container mx-auto flex flex-col justify-center px-32 mb-20" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center mb-5 mt-8 gap-y-4">
          <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden">
            <div className="w-[10rem] h-[10rem] overflow-hidden bg-[#efeeee] rounded-full relative flex items-end justify-center">
              <RxPerson className="w-[80%] h-[80%] text-[gray]/[0.5]" />
            </div>
            <p>Update your profile</p>
          </div>
          <div className="flex md:gap-x-4 md:justify-around gap-y-9 md:gap-y-0 lg:justify-around gap-x-4 flex-col sm:flex-row ml-[4%] w-[80%] sm:full md:w-[90%]">
            <div className="">
              <label htmlFor="firstName" className="font-[500] mb-2 ml-1">
                First Name
              </label>
              <div className="w-[24rem]">
                <input
                  className="border-none focus:outline-none text-sm pl-2 lg:pl-4 md:pl-4 h-12 w-[100%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
                  type="text"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastName" className="font-[500] mb-2 ml-1">
                Last Name
              </label>
              <div className="md:w-[100%] w-[100%] lg:w-[24rem]">
                <input
                  className="border-none focus:outline-none text-sm pl-6 h-12 w-[100%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
                  type="text"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-center mb-10 mt-8">
          <label htmlFor="email" className="font-[500] mb-1">
            Email Address
          </label>
          <div className="lg:w-[32rem] text-center">
            <input
              className="border-none focus:outline-none text-sm pl-6 h-12 w-[80%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
              type="email"
              placeholder="sample@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="animated-btn px-[6rem] mx-auto py-[0.9rem] bg-brnadColor text-white rounded-[5px] flex">
          Apply profile settings
        </button>
      </form>
    </>
  );
};

export default ProfileSet;
