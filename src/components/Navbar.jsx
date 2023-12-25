import { FaThreads } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white py-4">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <NavLink to={"/"}>
            <FaThreads size={40} />
          </NavLink>
          <ul className="flex gap-x-[5em]">
            <li className="p-2 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
              <NavLink to={"/"}>
                <RiHome4Line size={25} />
              </NavLink>
            </li>
            <li className="p-2 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
              <NavLink to={"/search"}>
                <CiSearch size={25} className="stroke-1" />
              </NavLink>
            </li>
            <li className="p-2 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
              <FaRegPenToSquare size={20} />
            </li>
            <li className="p-2 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
              <NavLink to={"/activity"}>
                <FaRegHeart size={20} />
              </NavLink>
            </li>
            <li className="p-2 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400">
              <NavLink to={"/user"}>
                <FaRegUser size={20} />
              </NavLink>
            </li>
          </ul>
          <HiMenuAlt3
            size={40}
            className="p-2 rounded hover:bg-white/10 hover:text-gray-200 text-gray-400"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
