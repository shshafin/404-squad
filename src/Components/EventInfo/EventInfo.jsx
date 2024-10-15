import { useEffect, useState } from "react";
import "./EventInfo.css";
import Aos from "aos";
import "aos/dist/aos.css";
import EidAdha from "./EidAdha/EidAdha";
import EidFitr from "./EidFitr/EidFitr";

const EventInfo = () => {
  const [adha, setAdha] = useState([]);
  const [fitr, setFitr] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Eid al adha
  useEffect(() => {
    fetch(`/data/EidAdha.json`)
      .then((res) => res.json())
      .then((data) => setAdha(data));
  }, []);
  console.log(adha);

  // Eid al fitr
  useEffect(() => {
    fetch(`/data/EidFitr.json`)
      .then((res) => res.json())
      .then((data) => setFitr(data));
  }, []);
  console.log(fitr);

  return (
    <div className="max-w-7xl mx-auto my-14 px-4 sm:px-6 lg:px-8">
      <div>
        <div className="relative mt-14 md:mt-32">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#fdd6ff] text-center"
          >
            Knowledge Journey_
            <div className="border-4 sm:border-8 w-20 sm:w-24 my-4 mx-auto custom-border"></div>
          </h1>
          <img
            data-aos="fade-right"
            className="w-20 md:w-48 absolute -bottom-1/2 -right-9 md:-right-16"
            src="/src/assets/triangle.svg"
            alt=""
          />
        </div>

        <div className="space-y-20 sm:space-y-28 my-20 sm:my-28">
          {/* Eid al Adha */}
          <div data-aos="fade-up">
            {adha.map((data) => (
              <EidAdha key={data.id} data={data}></EidAdha>
            ))}
          </div>
          {/* Eid al Fitr */}
          <div data-aos="fade-up" className="relative">
            {fitr.map((data) => (
              <EidFitr key={data.id} data={data}></EidFitr>
            ))}
            <img
              data-aos="fade-right"
              className="w-24 sm:w-48 absolute md:bottom-0 -bottom-24 md:-left-1/4   "
              src="/src/assets/box.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
