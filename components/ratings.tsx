// components/Ratings.tsx

import React, { useState } from 'react';
import styles from './ratings.module.css';

interface RatingsProps {
  initialValue: number;
  onChange: (newRating: number) => void;
}

const Ratings: React.FC<RatingsProps> = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className={styles.ratings}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`${styles.star} ${value <= rating ? styles.selected : ''}`}
          onClick={() => handleRatingChange(value)}
        >
          &#9733;
        </span>
      ))}
      <span className='ml-1 text-xs bg-orange-400 font-bold rounded-full w-4 h-4 items-center justify-center flex text-white'>{rating}</span>

    </div>
  );
};

export default Ratings;
