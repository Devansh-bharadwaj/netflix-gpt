import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignHandler = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg login"
        />
      </div>
      <div className="absolute flex items-center justify-center w-full h-screen">
        <form className="bg-black bg-opacity-75 rounded-lg w-3/12 p-10">
          <h1 className="text-white font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-inherit border rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-inherit border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-inherit border rounded-md"
          />
          <button className="p-4 my-4 bg-red-950 rounded-md text-white w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-white my-4 cursor-pointer"
            onClick={toggleSignHandler}
          >
            {isSignIn
              ? "Not Registered? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
