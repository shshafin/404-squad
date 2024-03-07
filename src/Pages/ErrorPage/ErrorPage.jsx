import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center ">
      <Lottie animationData={error}></Lottie>

      <h1 className="text-gray-400 max-w-7xl mx-auto text-center text-lg ">
        Uh-oh! Looks like the gremlins took over our code for a joyride. We're
        sending our best tech wizards to wrangle them back into place. In the
        meantime, grab a cup of coffee and enjoy this unexpected detour into the
        quirky side of the internet. We'll have things back on track soon! 🚀😄
      </h1>
      <Link to={"/"}>
        {" "}
        <Button className="my-20 bg-gray-700">Go Back</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
