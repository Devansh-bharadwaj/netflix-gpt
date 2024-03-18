import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-48"
      />
      {user && (
        <div className="absolute right-0 top-3">
          <button
            onClick={handleSignOut}
            className="rounded-lg bg-red-700 p-2 m-2 text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
