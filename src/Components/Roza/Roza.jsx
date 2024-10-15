import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Roza = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="my-32">
      <h1
        data-aos="fade-up"
        className="text-4xl md:text-6xl font-bold text-[#fdd6ff] text-center mb-20" // Adjust font size for smaller screens
      >
        404 Squad_Journey
        <div className="border-8 w-24 my-7 mx-auto custom-border"></div>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-7xl mx-auto">
        {" "}
        {/* Change to column on small screens */}
        <img
          className="w-full md:w-1/2 h-[300px] md:h-[500px] rounded-3xl object-cover" // Adjust width and height for small screens
          src="https://i.imgur.com/7gVBLnn.jpg"
          alt=""
        />
        <div className="space-y-4 font-bold px-2">
          <h1 className="text-gray-200 text-base md:text-base">
            {" "}
            {/* Adjust font size for small screens */}
            <span className="text-pink-400">What:</span> 404 Squad is a
            dedicated team of Sonargaon University students committed to
            mastering competitive programming and software development. We
            engage in rigorous practice sessions, problem-solving challenges,
            and collaborative learning to sharpen our coding skills. Our mission
            is to transform our passion for programming into practical
            solutions, paving the way for successful careers in tech. Together,
            we strive to become proficient developers ready to tackle real-world
            challenges.
          </h1>
          <h1 className="text-gray-200 text-base md:text-base">
            <span className="text-pink-400">Why:</span> We chose the name
            &quot;404 Squad&quot; to embody our quest for knowledge and mastery
            in coding, reflecting the common HTTP error that symbolizes the
            challenges and obstacles we face along the way. Just as a 404 error
            indicates a page not found, we are here to find solutions to every
            problem we encounter in competitive programming and software
            development. Our squad at Sonargaon University is dedicated to
            overcoming difficulties and discovering new paths in our coding
            journey.
          </h1>
          <h1 className="text-gray-200  text-base md:text-base">
            <span className="text-pink-400">How:</span> As the 404 Squad, we
            focus on a collaborative approach to learning. We share resources,
            tackle problems together, and engage in regular coding sessions to
            enhance our skills. By practicing competitive programming and
            transitioning into software development, we aim to build a strong
            foundation that will support our future careers. Our unity and
            determination will propel us forward, transforming challenges into
            triumphs.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Roza;
