import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EidFitr = ({ data }) => {
  const { name, title, img, textColor, boxColor, button, description } = data;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-10 px-4">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <Typography variant="h3" color="white" className="mb-4 uppercase">
          Software Track
        </Typography>
        <Typography
          style={{
            backgroundImage: textColor,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          variant="h3"
          className="mb-2"
        >
          {title}
        </Typography>
        <Typography className="mb-8 font-normal text-purple-50">
          {description}
        </Typography>

        {/* Centering the button for small devices */}
        <div className="flex justify-center md:justify-start">
          <Link to={"/fitrMore"}>
            <Button
              style={{ background: button }}
              className="flex items-center gap-2 font-bold"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>

      {/* Card Section */}
      <Card className="w-full md:w-1/2 h-full" style={{ background: boxColor }}>
        <CardHeader shadow={false} floated={false}>
          <img
            src={img}
            alt="card-image"
            className="w-full h-96 object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="small"
            color="white"
            className="font-bold opacity-75 text-3xl"
          >
            {name}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};
EidFitr.propTypes = {
  data: PropTypes.node,
};

export default EidFitr;
