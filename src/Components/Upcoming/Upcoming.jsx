import "./Upcoming.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import upcoming from "../../assets/upcoming.json";
const Upcoming = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="mt-32 relative">
        <h1
          data-aos="fade-up"
          className="text-6xl font-bold text-[#fdd6ff] text-center  "
        >
          Upcoming Event_
          <div className="border-8 w-24 my-7 mx-auto custom-border "></div>
        </h1>
        <img
          data-aos="fade-right"
          className="w-48 absolute -bottom-1/2 right-40"
          src="/src/assets/UFO.svg"
          alt=""
        />
      </div>
      <div className="relative my-7">
        <img
          className="w-full h-[1100px]"
          src="https://i.imgur.com/GstUDGM.png"
          alt=""
        />

        <div className="absolute top-0 left-60 flex justify-center items-center gap-7">
          <Lottie
            data-aos="fade-up"
            className="w-[600px]"
            animationData={upcoming}
          ></Lottie>
          <div>
            <h1
              data-aos="fade-up"
              className="text-6xl font-bold text-[#fdd6ff]"
            >
              Upcoming Eid ul Fitr
            </h1>
            <div
              data-aos="fade-up"
              style={{
                background:
                  "linear-gradient(90deg, rgba(41,20,99,1) 23%, rgba(201,27,231,1) 100%)",
              }}
              className=" max-w-xl my-12 p-10 rounded-xl"
            >
              <span className="flex gap-14 ">
                <h1 className="text-6xl font-bold text-gray-200">10</h1>
                <div className="border"></div>
                <h1 className="text-6xl font-bold text-gray-200">04</h1>
                <div className="border"></div>
                <h1 className="text-6xl font-bold text-gray-200">2024</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
