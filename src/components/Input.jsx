import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { format } from "date-fns";

const Input = () => {
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
        setInput("");
        console.log(post);
      } catch (error) {
        console.error(error.message);
      }
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
          value={input}
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
