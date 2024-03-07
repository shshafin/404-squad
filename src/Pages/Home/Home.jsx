import Banner from "../../Components/Banner/Banner";
import EventInfo from "../../Components/EventInfo/EventInfo";
import Hadids from "../../Components/Hadids/Hadids";
import Roza from "../../Components/Roza/Roza";
import Upcoming from "../../Components/Upcoming/Upcoming";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <EventInfo></EventInfo>
      <Upcoming></Upcoming>
      <Hadids></Hadids>
      <Roza></Roza>
    </div>
  );
};

export default Home;
