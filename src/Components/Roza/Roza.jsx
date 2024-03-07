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
        className="text-6xl font-bold text-[#fdd6ff] text-center mb-20  "
      >
        Essence of_Roza
        <div className="border-8 w-24 my-7 mx-auto custom-border "></div>
      </h1>

      <div className="flex justify-center items-center gap-10 max-w-7xl mx-auto ">
        <img
          className="w-1/2 h-[500px] rounded-3xl"
          src="https://i.imgur.com/AOwVNq1.png"
          alt=""
        />
        <div className="space-y-4 font-bold">
          <h1 className="text-gray-200">
            <span className="text-pink-400">What:</span> Roza, also known as
            Ramadan, refers to the fasting month observed by Muslims around the
            world. It is the ninth month of the Islamic lunar calendar, during
            which believers abstain from food, drink, smoking, and certain
            behaviors from dawn until sunset. Fasting during Ramadan is one of
            the Five Pillars of Islam and is a time for spiritual reflection,
            self-discipline, and increased devotion.{" "}
          </h1>
          <h1 className="text-gray-200">
            <span className="text-pink-400">Why:</span> Fasting during Roza is
            an opportunity for Muslims to engage in deep spiritual reflection,
            self-discipline, and self-improvement. By experiencing hunger,
            individuals develop empathy for those who are less fortunate and
            learn the importance of helping those in need. Roza fosters a sense
            of community and solidarity among Muslims worldwide. Breaking the
            fast together during Iftar and participating in communal prayers
            strengthen bonds within the community.{" "}
          </h1>
          <h1 className="text-gray-200">
            <span className="text-pink-400">How:</span> Muslims have a pre-dawn
            meal called Suhoor before Fajr (dawn) prayer. This meal includes
            foods that provide sustained energy throughout the day. From dawn
            until sunset, individuals refrain from consuming food, drinks,
            smoking, and engaging in negative behaviors. This period of
            abstinence is a time for spiritual focus and self-control. At
            sunset, the fast is broken with a meal called Iftar. Traditionally,
            this begins with eating dates and drinking water, followed by a
            larger meal that includes a variety of foods. In the evenings,
            additional prayers called Tarawih are performed at the mosque,
            emphasizing communal worship during Ramadan.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Roza;
