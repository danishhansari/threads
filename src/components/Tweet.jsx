import { FaComment, FaRetweet } from "react-icons/fa6";
import { HiHeart } from "react-icons/hi";
import { RiSendBackward } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const Tweet = ({ id, date, user, time, post }) => {
  return (
    <>
      <div key={id}>
        <div className="flex gap-4">
          <RxAvatar size={40} />
          <p className="font-semibold">{user}</p>
        </div>
        <p className="ml-8 my-2">{post}</p>

        <div className="flex gap-8 mt-2">
          <HiHeart />
          <FaComment />
          <FaRetweet />
          <RiSendBackward />
        </div>
      </div>
    </>
  );
};

export default Tweet;
