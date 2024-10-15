import { useState } from "react";
import "./Banner.css";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import menError from "../../assets/menError.json";

const Banner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="banner-body">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto pt-7 h-[70vh]">
        <div className="space-y-10 -mb-8 md:-mb-0 text-center px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <h1 className="gradient-text xl:mt-10 2xl:mt-40 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center pb-2 leading-tight">
              Build Your Foundation As A{" "}
              <span className="semi-gradient">Programmer</span>
            </h1>
            <img
              className="w-full md:w-2/3 absolute top-0"
              src="https://i.imgur.com/GiRUiVy.png"
              alt=""
            />
          </div>
          <p className="text-white text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database, and solve 500+ coding problems to become an exceptionally
            well-rounded, world-class Programmer.
          </p>
        </div>

        <button
          onClick={handleOpen}
          className="relative my-14 hover:contrast-200"
        >
          <img
            src="/src/assets/button.svg"
            alt=""
            className="w-36 md:w-full h-auto mx-auto"
          />
          <span className="absolute top-1 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-xl font-bold sm:top-2 md:top-3 sm:text-lg whitespace-nowrap">
            Surprise Awaits!
          </span>
        </button>

        <Dialog
          className="bg-[linear-gradient(90deg, rgba(40,7,66,1) 0%, rgba(13,5,24,1) 15%, rgba(22,6,38,1) 85%, rgba(40,7,66,1) 100%)]"
          open={open}
          handler={handleOpen}
        >
          <DialogHeader>
            <Typography
              variant="h5"
              className="text-gray-300 bg-pink-800 rounded-lg p-2"
            >
              Assalamu Alaikum!
            </Typography>
          </DialogHeader>
          <DialogBody divider className="grid place-items-center gap-4">
            <Lottie
              animationData={menError}
              className="w-1/2 max-w-xs sm:max-w-md"
            />
            <Typography color="pink" variant="h4" className="text-center">
              Welcome to the Error Zone: Where Bugs Meet Their Maker!
            </Typography>
            <Typography color="gray" className="text-center font-normal">
              &ldquo;Welcome to the wild world of 404 Squad, where we embrace
              chaos and laugh in the face of errors. Armed with caffeine and
              determination, we tackle every bug like warriors on a mission.
              Join us as we break barriers and rewrite the rules of
              programming!&rdquo;
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="gradient" onClick={handleOpen}>
              Build Together
            </Button>
          </DialogFooter>
        </Dialog>
      </div>

      <img
        className="w-full h-auto md:-mb-16 -mt-40"
        src="https://i.imgur.com/fBFhO0A.png"
        alt=""
      />
      <div className="shadow-2xl shadow-purple-900">
        <img
          className="w-full h-auto"
          src="https://i.imgur.com/R7uwHj2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
