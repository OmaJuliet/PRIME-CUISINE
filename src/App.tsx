import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Shop from "./Components/Shop";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import ComingSoon from "./Pages/ComingSoon";
import Help from "./Pages/Help";
import Settings from "./Pages/Settings";
import NotFound from "./Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import img from "./img/small-screen.svg";
import About from "./Pages/About";


const App = () => {
  
  //code to disable app display on screens smaller than 1024px
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isSmallScreen ? (
        <div className="mx-auto container justify-center flex flex-col mt-8"> 
            <p className="text-center text-white font-bold text-xl">Not optimized for smaller screens</p>
            <img src={img} className="mt-8" alt="for large screen size only" />
        </div>
      ) : (
        <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/home" element={<Shop/>} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About/>} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        </>
      )}
    </div>
  );
};

export default App;
