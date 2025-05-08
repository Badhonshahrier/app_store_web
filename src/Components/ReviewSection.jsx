import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoStarFill } from "react-icons/go";

const ReviewSection = ({ initialReviews = [] }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState(initialReviews);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  

  const handleSubmit = () => {
    if (!reviewText || reviewRating === 0 || !user) return;

    setReviews([
      {
        user: user.displayName || "Anonymous",
        photoURL: user.photoURL || "https://i.ibb.co/2nL6FfS/default-user.png",
        comment: reviewText,
        rating: reviewRating,
        time: new Date().toLocaleString(),
      },
      ...reviews,
    ]);

    setReviewText("");
    setReviewRating(0);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-6 text-amber-600 mb-2">Submit a Review</h2>

      {user ? (
        <div className="space-y-2">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-3xl cursor-pointer ${
                  star <= reviewRating ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => setReviewRating(star)}
              >
                <GoStarFill />
              </span>
            ))}
          </div>
          <textarea
            className="w-full h-40 border p-2 rounded"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Submit Review
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Please log in to submit a review.</p>
      )}
      <div className="flex flex-col items-center mt-6">
        <h2 className="text-2xl text-center font-semibold mb-2">User Reviews</h2>
        <div className="space-y-4 w-full">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm bg-gray-50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={review.photoURL}
                    alt={review.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{review.user}</p>
                    <p className="text-sm text-gray-500">{review.time}</p>
                  </div>
                  <span className="ml-auto flex items-center text-lg gap-2"> <GoStarFill color="gold"  size={20}/> {review.rating}
                  </span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;