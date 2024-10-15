import { useEffect, useState } from "react";
import Hadid from "./Hadid/Hadid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Hadids = () => {
  const [had, setHad] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(4); // Default slides to show

  useEffect(() => {
    fetch(`/data/Hadids.json`)
      .then((res) => res.json())
      .then((data) => setHad(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Function to update slidesToShow based on window width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Small devices
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        // Medium devices
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        // Large devices
        setSlidesToShow(2);
      } else {
        // Default to 4
        setSlidesToShow(4);
      }
    };

    // Set initial slidesToShow value
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use dynamic value
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="relative mt-32">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-6xl font-bold text-[#fdd6ff] text-center"
        >
          Programming Tips_
          <div className="border-8 w-24 my-7 mx-auto custom-border"></div>
        </h1>
        <img
          data-aos="fade-right"
          className="w-20 md:w-48 absolute -bottom-1/2 right-0"
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
