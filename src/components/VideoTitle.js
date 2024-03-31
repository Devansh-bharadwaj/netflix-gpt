import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 text-white absolute w-full aspect-video bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black hover:opacity-70 p-4 px-12 text-xl rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 ml-4 text-white hover:opacity-70 p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
