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
import Mubarak from "../../assets/Mubarak.json";

const Banner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="banner-body ">
      {/* <div className="flex">
        <img
          className="w-96 h-[800px]"
          src="https://i.imgur.com/Uox35fp.png"
          alt=""
        /> */}

      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto pt-7 h-[70vh]">
        <div className="space-y-10">
          <div className="relative flex items-center justify-center">
            <h1 className="gradient-text text-7xl font-extrabold text-center">
              Festive_Radiance Unveiled
            </h1>
            <img
              className="w-2/3 absolute"
              src="https://i.imgur.com/GiRUiVy.png"
              alt=""
            />
          </div>
          <p className="text-white text-xl text-center ">
            Embark on a luminous journey of joy, heritage, and community. Our
            Islamic festival website invites you to explore vibrant traditions,
            connect with a warm community, and embrace the blessings of each
            celebration. Join us in commemorating faith, unity, and shared
            festivities. Illuminate your path with moments of joy, knowledge,
            and togetherness in every festive experience.
          </p>
        </div>

        <button
          onClick={handleOpen}
          className="relative my-14 hover:contrast-200  "
        >
          <img src="/src/assets/button.svg" alt="" />
          <span className="absolute top-3 left-1/3 text-white text-xl font-bold  ">
            Explore
          </span>
        </button>

        <Dialog
          className="bg-[linear-gradient(90deg, rgba(40,7,66,1) 0%, rgba(13,5,24,1) 15%, rgba(22,6,38,1) 85%, rgba(40,7,66,1) 100%);]"
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
            <Lottie animationData={Mubarak}></Lottie>
            <Typography color="pink" variant="h4">
              Welcome to a Celebration of Joy and Togetherness!
            </Typography>
            <Typography color="gray" className="text-center font-normal">
              " Embrace the spirit of Eid with open hearts and warm smiles. May
              this festive occasion bring you moments of happiness, blessings,
              and the company of loved ones. Eid Mubarak – a time for
              reflection, gratitude, and the joy of sharing. Join us in
              commemorating the essence of Eid, where traditions meet
              celebration, and unity resonates in every heartfelt greeting. Let
              the radiance of this special day illuminate your path with peace
              and prosperity. Eid Mubarak to you and your family!"
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="gradient" onClick={handleOpen}>
              JazakAllah
            </Button>
          </DialogFooter>
        </Dialog>
      </div>

      {/* <img
          className="w-96 h-[800px]"
          src="https://i.imgur.com/iV3ks8g.png"
          alt=""
        />
      </div> */}
      <img
        className="w-full h-full -mb-16 -mt-40"
        src="https://i.imgur.com/fBFhO0A.png"
        alt=""
      />
      <div className="shadow-2xl shadow-purple-900">
        <img
          className="w-full h-full "
          src="https://i.imgur.com/R7uwHj2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
