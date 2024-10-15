import Lottie from "lottie-react";
import team from "../../../assets/team.json";
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
const AdhaMore = () => {
  const [fitr, setFitr] = useState({});
  // Eid al fitr
  useEffect(() => {
    fetch(`/public/data/EidAdha.json`)
      .then((res) => res.json())
      .then((data) => setFitr(data[0]));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-96 mt-20 md:my-40 max-h-screen">
      {/* Lottie and Button Section */}
      <div className="flex flex-col items-center space-y-6 md:space-y-10">
        <div className="w-3/4 md:w-1/2 lg:w-1/3">
          <Lottie animationData={team}></Lottie>
        </div>
        <div>
          <Link to={"/"}>
            <Button style={{ background: fitr.button }}>Go Back</Button>
          </Link>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full px-6 md:px-0">
        <Timeline>
          {/* Timeline Item 1 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Data Structures Mastery
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.DataStructuresMastery}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          {/* Timeline Item 2 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Algorithm Optimization
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.AlgorithmOptimization}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          {/* Timeline Item 3 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Problem Solving Under Pressure
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.ProblemSolvingUnderPressure}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          {/* Timeline Item 4 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Mathematics For Coders
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.MathematicsForCoders}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          {/* Timeline Item 5 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Efficient Coding Practices
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.EfficientCodingPractices}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          {/* Timeline Item 6 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Debugging Like A Pro
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.DebuggingLikeAPro}
              </Typography>
            </TimelineBody>
          </TimelineItem>

          {/* Timeline Item 7 */}
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography variant="h5" color="white" className="leading-none">
                Competition Readiness
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="lg"
                color="white"
                className="font-normal text-gray-600"
              >
                {fitr.CompetitionReadiness}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default AdhaMore;
