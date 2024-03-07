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
  const {
    name,
    title,
    date,
    img,
    textColor,
    boxColor,
    sideTitle,
    button,
    description,
    traditions,
    celebrations,
    intention,
    takbirat_al_ihram,
    seven_takbirs_first_rak,
    five_takbirs_second_rak,
    tashahhud_and_tasleem,
  } = data;

  return (
    <div className="flex items-center justify-center gap-20 ">
      <div>
        <Typography variant="h3" color="white" className="mb-4 uppercase">
          Joyful Endings
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
      <Card className="w-4/5 h-full" style={{ background: boxColor }}>
        <CardHeader shadow={false} floated={false} className="">
          <img
            src={img}
            alt="card-image"
            className=" w-full h-96  object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="small"
            color="white"
            className="font-bold opacity-75 text-3xl "
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
