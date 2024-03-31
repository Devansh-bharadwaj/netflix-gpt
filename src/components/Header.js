import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unscribe();
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10">
      <img src={LOGO} alt="logo" className="w-48" />
      {user && (
        <div className="absolute right-2 top-3">
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
