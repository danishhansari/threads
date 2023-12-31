import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const signUpWithEmail = async () => {
    if (credentials.password !== credentials.confirmPassword) {
      alert("password doesn't match try again");
      return;
    }
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );

      const user = userData.user;
      await updateProfile(user, {
        displayName: credentials.name,
      });
        setCredentials({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      const userJsonData = JSON.stringify(userData);
      localStorage.setItem("user", userJsonData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen py-3 px-2 overflow-hidden">
        <div className="max-w-[360px]">
          <p className="text-xl md:text-2xl text-center mb-4">Signup User</p>
          <input
            type="text"
            value={credentials.name}
            name="name"
            className="w-full py-2 px-3 my-2 border border-gray-400 focus:outline-none
            focus:border-gray-700 transition-all duration-75 rounded"
            onChange={handleInput}
            placeholder="Name"
          />
          <input
            type="email"
            value={credentials.email}
            name="email"
            className="w-full py-2 px-3 my-2 border border-gray-400 focus:outline-none
            focus:border-gray-700 transition-all duration-75 rounded"
            onChange={handleInput}
            placeholder="Email "
          />
          <input
            type="password"
            value={credentials.password}
            name="password"
            className="w-full py-2 px-3 my-2 border border-gray-400 focus:outline-none
            focus:border-gray-700 transition-all duration-75 rounded"
            onChange={handleInput}
            placeholder="Password "
          />
          <input
            type="password"
            value={credentials.confirmPassword}
            name="confirmPassword"
            className="w-full py-2 px-3 my-2 border border-gray-400 focus:outline-none
            focus:border-gray-700 transition-all duration-75 rounded"
            onChange={handleInput}
            placeholder="Confirm Password"
          />
          <button
            onClick={signUpWithEmail}
            className="w-full py-2 rounded my-2 hover:bg-teal-600 transition-colors duration-75 font-medium bg-teal-500 text-white"
          >
            Log In
          </button>
          <NavLink to={"/login"}>
            <p className="mb-4 text-md text-center">Already have a Login</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Signup;
