import Lottie from "lottie-react";
import pc from "../../../assets/pc.json";
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
    fetch("/data/EidFitr.json")
      .then((res) => res.json())
      .then((data) => setFitr(data[0]));
  }, []);
  console.log(fitr);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-40">
      {/* Lottie and Button Section */}
      <div className="w-full md:w-auto flex flex-col items-center space-y-6">
        <div className="w-3/4 mx-10 my-10 shadow-2xl shadow-purple-900">
          <Lottie animationData={pc}></Lottie>
        </div>
        <div className="ml-0 md:ml-52">
          <Link to={"/"}>
            <Button style={{ background: fitr.button }}>Go Back</Button>
          </Link>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full md:w-[32rem] mt-10 md:mt-0">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Programming Fundamentals
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.ProgrammingFundamentals}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Front-End Mastery
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.FrontEndMastery}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Back-End Skills
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.BackEndSkills}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                API Development
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.APIDevelopment}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Version Control With Git
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.VersionControlWithGit}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Testing And Debugging
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.TestingAndDebugging}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Deployment & Maintenance
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.DeploymentMaintenance}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default FitrMore;
