import { useState } from 'react';
import "../styles/button.css";
import { IoHelp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    category: '',
    message: ''
  });
  const [showError, setShowError] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Check if form fields are filled
    if (!formValues.title || !formValues.category || !formValues.message) {
      setShowError(true);
      return;
    }

    toast.success('Thanks for filling out the form. A rep will respond to you shortly to help you out with your issue', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    // Clear the form after submission
    setFormValues({
      title: '',
      category: '',
      message: ''
    });
  };

  return (
    <>
      <form className="container mx-auto flex flex-col justify-center px-32" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center mb-5 mt-8 gap-y-4">
          <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden ">
            <div className="w-[10rem] h-[10rem] overflow-hidden bg-[#efeeee] rounded-full relative flex items-end justify-center">
              <IoHelp className="w-[80%] h-[80%] text-[gray]/[0.5]" />
            </div>
            <p className="font-semibold text-sm mb-4">
              Report an Issue. How can we help you?
            </p>
          </div>
          <div className="flex md:gap-x-4 md:justify-around gap-y-9 md:gap-y-0 lg:justify-around gap-x-4 flex-col sm:flex-row ml-[4%] w-[80%] sm:full md:w-[90%]">
            <div className="">
              <label htmlFor="title" className="font-[500] mb-2 ml-1">
                Issue Title
              </label>
              <div className="w-[24rem]">
                <input
                  className="border-none focus:outline-none text-sm pl-2 lg:pl-4 md:pl-4 h-12 w-[100%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
                  type="text"
                  id="title"
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                  placeholder="Enter message title"
                />
              </div>
              {showError && !formValues.title && <p className="text-red-500 text-sm">Please enter a title</p>}
            </div>
            <div>
              <label htmlFor="category" className="font-[500] mb-2 ml-1">
                Category
              </label>
              <div className="md:w-[100%] w-[100%] lg:w-[24rem]">
                <select
                  className="border-none focus:outline-none cursor-pointer text-sm text-black pl-3 h-12 w-[100%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
                  id="category"
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="password">Password Reset</option>
                  <option value="payment">Payment Issue</option>
                  <option value="service">Sales Rep Services</option>
                </select>
              </div>
              {showError && !formValues.category && <p className="text-red-500 text-sm">Please select a category</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-center mb-10 mt-4 ">
          <label htmlFor="message" className="font-[500] mb-1">
            Issue Message
          </label>
          <div className="lg:w-[32rem] text-center">
            <textarea
              className="border-none focus:outline-none text-sm pl-3 h-32 pt-4 w-[80%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
          </div>
          {showError && !formValues.message && <p className="text-red-500 text-sm">Please enter a message</p>}
        </div>
        <button type="submit" className="animated-btn px-[6rem] mx-auto py-[0.9rem] bg-brnadColor text-white rounded-[5px] flex">
          Submit request
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Support;
