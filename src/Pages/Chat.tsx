import React, { useState } from 'react';
import "../styles/chat.css";
import img from "../img/chat.png";
import rep from "../img/sales-rep.png";
import { FaPlus, FaTimes } from "react-icons/fa";

import SideBar from "../Components/SideBar";


const Chat = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
    <>
    <SideBar />
        {modal && (
            <section className="modal animate">
                <div onClick={toggleModal} className="overlay"></div>
                <article className="modal-content">
                    <div className="rep-cont">
                        <img src={rep} className="rep-img" alt="sales rep"/>
                        <h3>Chat With Zee</h3>
                    </div>
                    <div className="chat-box"><p>Hello User. How can I be of assistance to you?</p></div>
                    <input type="text" placeholder="Enter message here" className="message-box"></input>
                    <button className="close-modal" onClick={toggleModal}>
                        <FaTimes />
                    </button>

                </article>
            </section>
        )}
        
            <section className="chat-container">
                <img src={img} className="chat-img" alt="user" />
                <h2 className="chat-name">Chat with our sales rep</h2>
                <p className="chat-locs">You're yet to start a conversation</p>

                  <button className="animated-btn" onClick={toggleModal} > Start a chat now</button>
            </section>

    </>
  )
}

export default Chat