import { FaThreads } from "react-icons/fa6";
import { NavLink, Link } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const tweetPop = () => {
    console.log("I got click");
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
          <HiMenuAlt3
            size={50}
            className="py-2 px-3 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
