import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message != null) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              onAuthStateChanged(auth, (user) => {
                if (user) {
                  const { uid, email, displayName, photoURL } =
                    auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                      photoURL: photoURL,
                    })
                  );
                } else {
                  dispatch(removeUser());
                }
              });
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-75 rounded-lg w-3/12 p-10"
        >
          <h1 className="text-white font-bold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-inherit border rounded-md text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-inherit border rounded-md text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-inherit border rounded-md text-white"
          />
          <p className="my-2 text-red-600 font-semibold text-lg">
            {errorMessage}
          </p>
          <button
            onClick={handleButtonClick}
            className="p-4 my-4 bg-red-950 rounded-md text-white w-full"
          >
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
