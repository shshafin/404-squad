import { useEffect, useState } from "react";
import Hadid from "./Hadid/Hadid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Hadids = () => {
  const [had, setHad] = useState([]);

  useEffect(() => {
    fetch(`/public/data/Hadids.json`)
      .then((res) => res.json())
      .then((data) => setHad(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="relative mt-32">
        <h1
          data-aos="fade-up"
          className="text-6xl font-bold text-[#fdd6ff] text-center  "
        >
          Eid Hadids_
          <div className="border-8 w-24 my-7 mx-auto custom-border "></div>
        </h1>
        <img
          data-aos="fade-right"
          className="w-48 absolute -bottom-1/2 right-0"
          src="/src/assets/triangle.svg"
          alt=""
        />
      </div>
      <div className="mx-12 my-20">
        <Slider {...settings}>
          {had.map((had) => (
            <Hadid key={had.id} had={had}></Hadid>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hadids;
