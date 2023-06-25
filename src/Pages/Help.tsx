import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Question } from './Question';
import "../styles/help.css";
import { Link } from 'react-router-dom';
import SideBar from "../Components/SideBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast("Form is not yet active");
};

const Help = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <>
      <SideBar />

      <div className="accordion-style">
        <h2 className="accordion-heading">Frequently Asked Questions</h2>
        <div className="accordion-container">
          {Question.map((item, index) => (
            <React.Fragment key={index}>
              <div className="accordion-item" onClick={() => toggle(index)}>
                <h1 className="accordion-question">{item.question}</h1>
                <span className="accordion-icon">
                  {clicked === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              {clicked === index && (
                <div className="accordion-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <section className="accordion-extra">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Kindly fill the <span onClick={notify}>form </span></p>
          <p>Want to file a complaint? Report an issue? Head over to the <Link to="/settings"><span >settings</span></Link> page to do this</p>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default Help;
