import Input from "../components/Input";
import Navbar from "../components/Navbar";
import TweetList from "../components/TweetList";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen">
        <div className="max-w-[600px] text-white mx-auto">
          <Input />
          <TweetList />
        </div>
      </div>
    </>
  );
};

export default Home;
