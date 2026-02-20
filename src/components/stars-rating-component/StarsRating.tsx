import './StarsRating.css';
import type {FC} from "react";

type RatingProps = {
    rating: number; // Отримуємо vote_average (0-10)
};

const StarsRating: FC<RatingProps> = ({rating}) => {
    return (
        <div className="star-rating-wrapper">
            {[...Array(5)].map((_, i) => {
                const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
                return (
                    <div key={i} className="star-container">
                        <span className="star-background">★</span>
                        <span
                            className="star-foreground"
                            style={{width: `${fillPercentage}%`}}
                        >
                            ★
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default StarsRating;