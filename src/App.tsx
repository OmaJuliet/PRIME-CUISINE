import { useEffect, useState } from "react";
import "./App.css";
import { toast } from 'react-toastify';
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
import Details from "./Components/Details";
import DetailsMobile from "./Components/DetailsMobile";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState<any[]>([]);
  
  //code to disable app display on screens smaller than 1024px
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = (item: any) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) return;
    setCart([...cart, item]);
    toast.success('Item has been added to cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
        <div className="mx-auto justify-center"> 
        <DetailsMobile handleClick={handleClick} />
        </div>
      ) : (
        <>
        <Router>
          <Routes>
            <Route path="/" element={<Shop/>} />
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
