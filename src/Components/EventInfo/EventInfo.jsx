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
    fetch(`/public/data/EidAdha.json`)
      .then((res) => res.json())
      .then((data) => setAdha(data));
  }, []);
  console.log(adha);

  // Eid al fitr
  useEffect(() => {
    fetch(`/public/data/EidFitr.json`)
      .then((res) => res.json())
      .then((data) => setFitr(data));
  }, []);
  console.log(fitr);

  return (
    <div className="max-w-7xl mx-auto my-14 ">
      <div>
        <div className="relative mt-32">
          <h1
            data-aos="fade-up"
            className="text-6xl font-bold text-[#fdd6ff] text-center  "
          >
            Eid Festival_
            <div className="border-8 w-24 my-7 mx-auto custom-border "></div>
          </h1>
          <img
            data-aos="fade-right"
            className="w-48 absolute -bottom-1/2 -right-16"
            src="/src/assets/triangle.svg"
            alt=""
          />
        </div>

        <div className="space-y-28 my-28">
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
              className="w-48 absolute bottom-0 -left-1/4"
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
