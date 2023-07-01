import React, { useState } from "react";
import StarRating from "./StarRating";
import { AiFillStar } from "react-icons/ai";



const Rating: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [message, setMessage] = useState("");
    const [showThanks, setShowThanks] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!rating || !message) {
            setErrorMessage("Please fill in message fields AND star the app.");
            return;
        }

        setShowThanks(true);
        setErrorMessage("");
    };

    return (
        <>
            <div className="container mx-auto flex flex-col justify-center px-32">
                {showThanks ? (
                    <div className="container mx-auto flex justify-center w-80 bg-brandColor p-4 rounded-md mb-4 mt-8">
                        <p className="text-xl font-bold">Thanks for rating our app!</p>
                    </div>
                ) : (
                    <form className="container mx-auto flex flex-col justify-center px-32" onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center mb-5 mt-8 gap-y-4">
                            <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden ">
                                <div className="w-[10rem] h-[10rem] overflow-hidden bg-[#efeeee] rounded-full relative flex items-end justify-center">
                                    <AiFillStar className="w-[80%] h-[80%] text-[gray]/[0.5]" />
                                </div>
                                <p className="font-semibold text-base mb-4">
                                    Rate Our App
                                </p>
                            </div>
                            <div className="flex md:gap-x-4 mt-4 gap-y-9 md:gap-y-0 lg:justify-around gap-x-4 flex-row ml-[4%] w-[80%] sm:full md:w-[90%]">
                                <div className="flex flex-row items-center">
                                    <label htmlFor="rating" className="mr-4 mt-4 text-lg text-bold">
                                        Rating:
                                    </label>
                                    <StarRating
                                        rating={rating}
                                        onRatingChange={handleRatingChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center md:items-center mb-2 mt-6 ">
                                <label htmlFor="message" className="font-[500] mb-1">
                                    Rating Message
                                </label>
                                <div className="lg:w-[32rem] text-center">
                                    <input
                                        className="border-none focus:outline-none text-sm pl-3 h-32 w-[80%] bg-[#efeeee]/[0.5] border-transparent rounded-lg"
                                        type="text"
                                        id="message"
                                        value={message}
                                        onChange={handleMessageChange}
                                        placeholder="Enter your message"
                                    />
                                </div>
                            </div>
                        </div>
                        {errorMessage && (
                            <p className="container mx-auto flex justify-center text-red-500 text-sm mb-4">{errorMessage}</p>
                        )}
                        <button type="submit" className="animated-btn px-[6rem] mx-auto mb-8 py-[0.9rem]">
                            Submit rating
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};

export default Rating;



