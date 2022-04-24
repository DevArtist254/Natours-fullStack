import React from 'react';
import Stars from './star.comp';

export const Reviews = ({ review }) => {
  return (
    <div key={review._id} className="tour__reviews--main">
      <div className="tour__reviews--content">
        <img
          src="./images/user-91.jpg"
          alt="user"
          className="tour__reviews--image"
        />
        <div className="tour__reviews--text">
          <h2 className="tour__reviews--subHeader">
            {review.createdBy.fullName}
          </h2>
          <p className="tour__reviews--message">{review.reviews}</p>

          <div className="tour__reviews--stars">
            <Stars rateAv={review.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};
