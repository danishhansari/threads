import { NavLink, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const provider = new TwitterAuthProvider();
  const navigate = useNavigate();
  const signInWithEmail = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log(userData);
      const userJsonData = JSON.stringify(userData);
      localStorage.setItem("user", userJsonData);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithTwitter = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const userJsonData = JSON.stringify(data);
      localStorage.setItem("user", userJsonData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen py-3 px-2">
        <div className="max-w-[360px]">
          <p className="text-xl md:text-2xl text-center my-4 mb-2">Log In</p>
          <input
            type="email"
            value={username}
            className="w-full py-2 px-3 my-2 border border-gray-400 focus:outline-none
            focus:border-gray-700 transition-all duration-75 rounded"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username, phone and email"
          />
          <input
            type="password"
            value={password}
            className="w-full py-2 px-3 my-2 border border-gray-400 focus:outline-none
            focus:border-gray-700 transition-all duration-75 rounded"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="w-full py-2 rounded my-2 hover:bg-teal-600 transition-colors duration-75 font-medium bg-teal-500 text-white"
            onClick={signInWithEmail}
          >
            Log in
          </button>
          <NavLink to={"/signup"} className="mb-4">
            <p className="text-center my-1">Don't have a account Signup</p>
          </NavLink>
          <button
            className="w-full py-2 rounded my-2 hover:bg-blue-600 transition-colors duration-75 font-medium bg-blue-500 text-white"
            onClick={signInWithTwitter}
          >
            Continue with Twitter
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
