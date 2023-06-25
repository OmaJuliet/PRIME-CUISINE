import { useEffect, useState } from 'react';
import { IoRestaurant } from "react-icons/io5";
import "../styles/comingsoon.css";

import SideBar from "../Components/SideBar";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoon = () => {
    // Timer function
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`12/01/${year}`) - +new Date();

        let timeLeft: TimeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [year] = useState<number>(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval as keyof TimeLeft]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
            </span>
        );
    });

    return (
        <>
            <SideBar />
            <div className="bgimg ml-24">
                <div className="logo-cont">
                    <IoRestaurant className="the-logo" />
                </div>
                <div className="coming-soon-container">
                    <h2>OPENING SOON!!</h2>
                    <p className="top-p">Grand opening of Prime Cuisine Restaurant. Huge discounts for first 100 reservations.</p>
                    <hr />
                    <p className="bottom-p">Coming soon in: {timerComponents.length ? timerComponents : <span>We're Open! 🔥</span>}</p>
                    <p className="bottom-p">Launching: December {year}</p>
                </div>
                <div className="bottom"> </div>
            </div>
        </>
    );
};

export default ComingSoon;
