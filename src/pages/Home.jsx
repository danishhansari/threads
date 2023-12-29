import { RxAvatar } from "react-icons/rx";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Portal from "../components/Portal";
import TweetList from "../components/TweetList";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen">
        <div className="max-w-[600px] text-white mx-auto">
          <Input />

          <Portal>
            <div className="back-portal absolute top-0 left-0 z-10 bg-black/10 h-full w-full flex items-center justify-center backdrop-blur-[1px]">
              <div className="relative z-20 w-[600px]">
                <div className="flex items-center justify-between">
                  <p> </p>
                  <p className="text-white font-bold">Hello World</p>
                  <HiOutlineDotsCircleHorizontal
                    className="text-white"
                    size={30}
                  />
                </div>
                <div className="w-full border-1 p-4 bg-gray-800 border border-gray-500 h-full rounded-lg my-2 text-white">
                  <div className="flex items-center gap-2 ">
                    <RxAvatar size={40} />
                    <div className="flex-1">
                      <p className="font-bold">Ansari Danish</p>
                      <textarea
                        rows={3}
                        style={{ resize: "none" }}
                        type="text"
                        placeholder="Start threads"
                        className="bg-transparent text-white focus:outline-none focus:border-0 w-full placeholder:text-white/80 flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
          <TweetList />
        </div>
      </div>
    </>
  );
};

export default Home;
