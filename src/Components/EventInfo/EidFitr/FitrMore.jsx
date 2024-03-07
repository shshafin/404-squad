import Lottie from "lottie-react";
import EidFitr from "../../../assets/EidFitr.json";
import { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FitrMore = () => {
  const [fitr, setFitr] = useState({});
  // Eid al fitr
  useEffect(() => {
    fetch(`/public/data/EidFitr.json`)
      .then((res) => res.json())
      .then((data) => setFitr(data[0]));
  }, []);
  console.log(fitr);
  return (
    <div className="flex justify-center items-center  my-3">
      <div>
        <div className="w-3/4  mx-10 my-10 shadow-2xl shadow-purple-900 ">
          <Lottie animationData={EidFitr}></Lottie>
        </div>
        <div className="ml-52">
          <Link to={"/"}>
            <Button style={{ background: fitr.button }}>Go Back</Button>
          </Link>
        </div>
      </div>

      <div className="w-[32rem]">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Traditions
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.traditions}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Celebrations
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.celebrations}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Intention
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.intention}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                takbirat_al_ihram
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.takbirat_al_ihram}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                seven_takbirs_first_rak
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.seven_takbirs_first_rak}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                five_takbirs_second_rak
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.five_takbirs_second_rak}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                tashahhud_and_tasleem
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.tashahhud_and_tasleem}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default FitrMore;
