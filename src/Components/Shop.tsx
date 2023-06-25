import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SideBar from "./SideBar";
import Details from "../Components/Details";
import TopSect from "../Components/TopSect";
import Cart from "../Components/Cart";

const Shop = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState<any[]>([]);

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

  const handleChange = (item: any, d: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const updatedAmount = cartItem.amount + d;
          return { ...cartItem, amount: updatedAmount > 0 ? updatedAmount : 1 };
        }
        return cartItem;
      })
    );
  };

  return (
    <>
      <SideBar />
      <section className="flex flex-col ml-24 px-8 pt-8 w-full bg-bgColor">
        <React.Fragment>
          <TopSect setShow={setShow} size={cart.length} />
          {show ? (
            <Details handleClick={handleClick} />
          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          )}
        </React.Fragment>
      </section>
      <ToastContainer />
    </>
  );
};

export default Shop;

