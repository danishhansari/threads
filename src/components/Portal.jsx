// PortalComponent.jsx
import ReactDOM from "react-dom";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";

const Portal = ({ state, toggleState }) => {
  const handleClick = (e) => {
    const check = e.target.className;
    if (!check.includes("modal")) {
      console.log(state);
      toggleState(!state);
    } else {
      return;
    }
  };
  return ReactDOM.createPortal(
    <>
      <div
        onClick={handleClick}
        className="back-portal absolute top-0 left-0 z-10 bg-black/10 h-full w-full flex items-center justify-center backdrop-blur-[1px] px-2"
      >
        <div className="relative z-20 max-w-[500px] w-full">
          <div className="flex items-center justify-between">
            <p> </p>
            <p className="text-white font-bold text-center">New threads</p>
            <HiOutlineDotsCircleHorizontal className="text-white" size={30} />
          </div>
          <div className="w-full border-1 p-6 bg-zinc-900 border border-zinc-500 h-full rounded-2xl my-2 text-white modal">
            <div className="flex items-start gap-2 modal">
              <RxAvatar size={40} className="modal" />
              <div className="flex-1 modal">
                <p className="font-bold modal">Ansari Danish</p>
                <textarea
                  rows={3}
                  style={{ resize: "none" }}
                  type="text"
                  placeholder="Start threads"
                  className="bg-transparent text-white focus:outline-none focus:border-0 w-full modal placeholder:text-white/80 flex-1"
                />
              </div>
            </div>

            <div className="flex w-full justify-between items-center modal">
              <p className="text-gray-400 modal">Anyone can reply</p>
              <button className="text-black bg-white py-1 px-4 rounded-3xl text-xl modal">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Portal;
