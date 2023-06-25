import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "../styles/sidebar.css";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function TopSect({ setShow, size }: { setShow: (value: boolean) => void; size: number }) {
  const [firstName, setFirstName] = useState('');

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const storedFirstName = localStorage.getItem('firstName');

    setFirstName(searchParams.get('firstName') || storedFirstName || '');
  }, [location]);


  return (
    <>
        <div className="flex justify-between items-center px-8 pt-2 pb-6 text-white sticky w-full top-0 z-50 bg-bgColor shadow-lg border-b-[2px] border-bgColor">
          <div className="flex justify-center items-center relative">
            <p className="font-semibold text-base">Hello {firstName}👋</p>
          </div>

          {/* <div className="relative w-80 h-11">
            <input
              type="text"
              className="w-full h-full py-4 px-10 text-base text-black rounded-lg"
              placeholder="Search food..."
            />
            <i>
              <FaSearch className="absolute left-4 top-4 text-lg w-4 h-4 text-center text-black focus:outline-none" />
            </i>
          </div> */}

          <div className="flex flex-row flex-wrap text-white">
            <p
              onClick={() => setShow(true)}
              className="text-xl mt-5 mr-4 hover:text-brandColor hover:underline cursor-pointer"
            >
              Store
            </p>
            <span className="text-brandColor text-xl cursor-pointer" onClick={() => setShow(false)}>
              <FaShoppingCart className="text-2xl mt-6" />
            </span>
            <p className="mt-4 ml-1 text-sm">{size}</p>
          </div>
        </div>
    </>
  );
}

export default TopSect;