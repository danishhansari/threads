import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Input = () => {
  const [input, setInput] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleInput = (e) => {
    if (e.target.value === "") {
      setButtonDisabled(true);
    } else {
      setInput(e.target.value);
      setButtonDisabled(false);
    }
  };

  const postTweet = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (input === "") {
      alert("field was missing");
      return;
    } else {
      await addDoc(collection(db, "post"), {
        user: user.displayName,
        post: input,
      });
    }
  };
  return (
    <>
      <div className="flex min-h-1 w-full gap-4 py-4 border-b border-gray-500 justify-between items-center">
        <RxAvatar size={40} className="text-gray-300" />
        <textarea
          style={{ resize: "none" }}
          placeholder="Start a thread"
          className="bg-transparent text-gray-100 text-lg focus:outline-none w-full"
          onChange={handleInput}
          rows={1}
        />
        <button
          className="bg-white text-black rounded-md px-4 py-1 disabled:opacity-[.75]"
          disabled={isButtonDisabled}
          onClick={postTweet}
        >
          Post
        </button>
      </div>
    </>
  );
};

export default Input;
