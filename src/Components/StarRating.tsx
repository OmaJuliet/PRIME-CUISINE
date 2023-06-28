import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
    rating: number | null;
    onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
    const handleStarClick = (selectedRating: number) => {
        onRatingChange(selectedRating);
    };

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            const starValue = i;
            const isFilled = rating !== null && starValue <= rating;

            stars.push(
                <FaStar
                    key={starValue}
                    className={`cursor-pointer w-12 h-12 mr-2 ${isFilled ? "text-yellow-500" : "text-gray-300"
                        }`}
                    onClick={() => handleStarClick(starValue)}
                />
            );
        }

        return stars;
    };

    // return <div>{renderStars()}</div>;
    return <div className="flex flex-row">{renderStars()}</div>;

};

export default StarRating;
