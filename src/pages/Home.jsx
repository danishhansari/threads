import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen">
        <div className="max-w-[600px] text-white mx-auto">
          <Input />
          {/* <Popup /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
