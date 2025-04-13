import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating, onRate }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const filled = i < rating;
        return (
          <FaStar
            key={i}
            size={20}
            color={filled ? "#ffc107" : "#e4e5e9"}
            style={{ cursor: onRate ? "pointer" : "default" }}
            onClick={() => onRate && onRate(i + 1)}
          />
        );
      })}
    </div>
  );
}
