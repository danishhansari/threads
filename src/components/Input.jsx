import { useState, useRef, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import Portal from "./Portal";

const Input = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current.focus()) {
      setShowModal((prev) => setShowModal(!prev));
    }
  }, [inputRef]);
  const renderPortal = () => {
    setShowModal((prev) => setShowModal(!prev));
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex min-h-1 w-full gap-4 py-4 border-b border-gray-500 justify-between items-center">
        <RxAvatar size={40} className="text-gray-300" />
        <textarea
          style={{ resize: "none" }}
          placeholder="Start a thread"
          className="bg-transparent text-gray-100 text-lg focus:outline-none w-full"
          onFocus={renderPortal}
          ref={inputRef}
          rows={1}
        />
        <button
          className="bg-white text-black rounded-md px-4 py-1 disabled:opacity-[.75]"
          onClick={renderPortal}
        >
          Post
        </button>
      </div>
      {showModal && <Portal state={showModal} toggleState={renderPortal} />}
    </>
  );
};

export default Input;
