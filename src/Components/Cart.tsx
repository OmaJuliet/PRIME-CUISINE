import React, { useState, useEffect } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import question from "../img/user.png";
import { usePaystackPayment } from 'react-paystack';
import "../styles/checkoutBtn.css";


interface CartItem {
  id: string;
  img: string;
  title: string;
  amount: number;
  price: number;
}

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  handleChange: (item: CartItem, value: number) => void;
}


//checkout
const config = {
  reference: (new Date()).getTime().toString(),
  email: "julietmesoma8@gmail.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_live_48497b7c12fc3e250f75353e737d56117968ea9e',
  // publicKey: 'pk_test_dde2bc98b40c1c8a58a8990d8620159ea191f15e', // test public key
};

// you can call this function anything
const onSuccess = (reference: any) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}


const Cart = ({ cart, setCart, handleChange }: CartProps) => {

  //checkout
  const initializePayment = usePaystackPayment(config);


  const [price, setPrice] = useState(0);

  const handleRemove = (id: string) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    toast.error("Item removed from cart", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <>
      <section className="w-full align-center items-center mx-auto container flex justify-center">
        <section className="mt-8 px-8 text-white">
          {cart.length === 0 ? (
            <div className="container mx-auto justify-center">
              <p className="text-center text-white font-semibold text-xl">Nothing in cart yet</p>
              <img src={question} className="" alt="" />
            </div>

          ) : (
            cart.map((item) => (
              <div className="flex items-center justify-between mt-10 pb-2 border-b-2" key={item.id}>
                <div className="flex w-80">
                  <img src={item.img} alt="" className="w-20 h-16" />
                  <p className="font-bold ml-5 mt-4">{item.title}</p>
                </div>
                <div className="flex items-center justify-between pb-2 mt-2">
                  <button className="px-2.5 py-1.5 text-lg font-bold mr-1.5" onClick={() => handleChange(item, -1)}>
                    -
                  </button>
                  <button>{item.amount}</button>
                  <button className="px-2.5 py-1.5 text-lg font-bold mr-1.5" onClick={() => handleChange(item, 1)}>
                    +
                  </button>
                </div>
                <div>
                  <span className="text-brandColor py-1.5 px-2.5 rounded-lg mr-2.5">$ {item.price}</span>
                  <button
                    className="py-2 px-2.5 font-semibold bg-red-100 rounded-lg cursor-pointer text-brandColor hover:text-red-600"
                    onClick={() => handleRemove(item.id)}
                  >
                    <FaTrash title="Remove from cart" />
                  </button>
                </div>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <>
              <div className="flex justify-between mt-8">
                <span className="text-lg font-semibold">Meal Price :</span>
                <span className="text-lg font-semibold text-brandColor"> ${price}</span>
              </div>
              <div className="flex justify-between mt-4 border-b-2">
                <span className="text-lg font-semibold">Delivery Fee :</span>
                <span className="text-lg font-semibold text-brandColor"> $10</span>
              </div>
              <div className="flex justify-between mt-4 border-b-2">
                <span className="text-xl font-bold">Total Cost :</span>
                <span className="text-xl font-bold text-brandColor"> ${price + 10}</span>
              </div>
              <section className="flex justify-between mt-12">
                <button onClick={() => {
                  initializePayment(onSuccess, onClose)
                }} className="checkout-btn">Checkout</button>
              </section>
            </>
          )}

        </section>
      </section>
      <ToastContainer />
    </>
  );
};

export default Cart;