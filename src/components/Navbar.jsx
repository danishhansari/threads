import { useState } from "react";
import { FaThreads } from "react-icons/fa6";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { PiSignOutBold } from "react-icons/pi";
import Portal from "./Portal";

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const tweetPop = () => {
    setShowModal((prev) => !prev);
  };

  const signOutUser = async () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.removeItem("user");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="sticky top-0 z-10 bg-black text-white py-4 w-full">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <Link to="/" className={"nav-link logo"}>
            <FaThreads size={40} />
          </Link>
          <ul className="flex gap-x-[5em]">
            <NavLink to="/" exact>
              <li className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
                <RiHome4Line size={25} />
              </li>
            </NavLink>
            <NavLink to="/search">
              <li className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
                <CiSearch size={25} className="stroke-1" />
              </li>
            </NavLink>
            <li
              onClick={tweetPop}
              className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400"
            >
              <FaRegPenToSquare size={20} />
            </li>
            <NavLink to={"/activity"}>
              <li className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
                <FaRegHeart size={20} />
              </li>
            </NavLink>
            <NavLink to={"/user"}>
              <li className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
                <FaRegUser size={20} />
              </li>
            </NavLink>
          </ul>
          <PiSignOutBold
            onClick={signOutUser}
            size={50}
            className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400"
          />
        </div>
      </div>

      {showModal && <Portal state={showModal} toggleState={tweetPop} />}
    </>
  );
};

export default Navbar;
