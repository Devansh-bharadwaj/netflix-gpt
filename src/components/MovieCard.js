import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 m-2 h-56 flex-shrink-0">
      <img
        src={CDN_IMG_URL + posterPath}
        alt="movie poster"
        className="w-full h-full"
      />
    </div>
  );
};

export default MovieCard;
