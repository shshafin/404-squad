import "./Upcoming.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import ai from "../../assets/ai.json";
const Upcoming = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="mt-32 relative">
        <h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#fdd6ff] text-center"
        >
          Upcoming Event_
          <div className="border-8 w-24 my-7 mx-auto custom-border"></div>
        </h1>
        <img
          data-aos="fade-right"
          className="w-20  md:w-32 xl:w-48 absolute -bottom-1/2 right-2  sm:right-10"
          src="/src/assets/UFO.svg"
          alt=""
        />
      </div>
      <div className="relative my-7">
        <img
          className="w-full h-[600px] md:h-[1100px] object-cover"
          src="https://i.imgur.com/GstUDGM.png"
          alt=""
        />

        <div className="absolute top-0 left-0 right-0 flex justify-center items-center gap-4 flex-col md:flex-row md:gap-7">
          <Lottie
            data-aos="fade-up"
            className="w-[300px] sm:w-[400px] md:w-[600px]"
            animationData={ai}
          />
          <div
            data-aos="fade-up"
            style={{
              position: "relative",
              overflow: "hidden",
            }}
            className="max-w-sm md:max-w-xl my-12 p-6 mr-4 rounded-xl text-center bg-opacity-20"
          >
            <div className="bg-animation absolute inset-0 z-0"></div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#fdd6ff] mb-4 animate__animated animate__bounceIn animate__delay-1s">
              Join Us for the AI & Cloud Event!
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
              Dive into the future of technology with industry experts and
              explore groundbreaking innovations in AI and Cloud computing.
            </p>
            <p className="text-base sm:text-lg text-gray-200 mb-8 animate__animated animate__fadeInUp animate__delay-3s">
              Discover cutting-edge strategies and network with like-minded
              professionals. Don&apos;t miss out on this opportunity to enhance
              your skills!
            </p>

            {/* Unique Design Element */}
            <div className="absolute inset-0 flex justify-center items-center opacity-20">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="animate-pulse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="5"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  stroke="rgba(255, 255, 255, 0.7)"
                  strokeWidth="5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
