import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-6">
      <h1 className="text-2xl mt-6 mb-2 font-semibold text-white">{title}</h1>
      <div className="overflow-x-auto w-full">
        <div className="flex justify-between overflow-x-scroll hide_scrollbar">
          {movies?.results?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
