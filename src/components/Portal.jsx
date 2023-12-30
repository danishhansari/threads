// PortalComponent.jsx
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { format } from "date-fns";

const Portal = ({ state, toggleState }) => {
  const [input, setInput] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const handleInput = (e) => {
    if (e.target.value === "") {
      setButtonDisabled(true);
    } else {
      setInput(e.target.value);
      setButtonDisabled(false);
    }
  };

  const timeAndUser = () => {
    // Get the current user Who is posting the tweet
    const auth = getAuth();
    const user = auth.currentUser;

    // Get The Current TimeStamp when the post is created
    const jsDate = new Date(
      Timestamp.now().seconds * 1000 + Timestamp.now().nanoseconds / 1e6
    );
    const date = format(jsDate, "dd-MM-yyyy");
    const time = format(jsDate, "hh:mm a");
    return { date, time, user };
  };

  const postTweet = async () => {
    const { user, time, date } = timeAndUser();
    console.log(time, date);

    if (input === "") {
      alert("field was missing");
      return;
    } else {
      try {
        const post = await addDoc(collection(db, "post"), {
          user: user?.displayName || "Unknown user",
          post: input,
          time,
          date,
        });
        toggleState(!state);
        console.log(post);
      } catch (error) {
        console.error(error.message);
      }
      setInput("");
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
                  ref={inputRef}
                  onChange={handleInput}
                  value={input}
                  placeholder="Start threads"
                  className="bg-transparent text-white focus:outline-none focus:border-0 w-full modal placeholder:text-white/80 flex-1"
                />
              </div>
            </div>

            <div className="flex w-full justify-between items-center modal">
              <p className="text-gray-400 modal">Anyone can reply</p>
              <button
                className="text-black bg-white hover:bg-gray-200 py-1 px-4 rounded-3xl text-xl modal"
                disabled={isButtonDisabled}
                onClick={postTweet}
              >
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
