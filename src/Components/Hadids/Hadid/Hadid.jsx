import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const Hadid = ({ had }) => {
  const { description, name, image, book_name, btn_name, box, bg } = had || "";
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <div
        style={{ background: box }}
        className="max-w-md  p-5 md:mr-3 mx-auto rounded-xl" // Use w-full to make it take full width of its container
      >
        <article className="flex flex-col items-start justify-between">
          <div className="flex items-center mb-3 gap-x-32 text-xs">
            <time dateTime="2020-03-16" className="text-white text-lg">
              Mar 03, 2024
            </time>
            <a
              style={{ background: bg }}
              className="relative z-10 rounded-lg px-3 py-1.5 font-bold text-white"
            >
              {btn_name}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-300">
              <a>
                <span className="absolute inset-0"></span>
                {name}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-28">
            <div className="relative mt-8 flex items-center gap-x-4">
              <img
                src={image}
                alt=""
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <div>
                  <p className="font-semibold text-gray-400">
                    <a>
                      <span className="absolute inset-0"></span>
                      {book_name}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="mt-5 bg-inherit text-sm lowercase text-teal-400"
              onClick={handleOpen}
            >
              ...read more
            </Button>

            <Dialog
              className="bg-transparent shadow-gray-800 border-gray-800"
              open={open}
              handler={handleOpen}
            >
              <DialogHeader>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={image}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div>
                      <p className="font-semibold text-gray-400">
                        <a>
                          <span className="absolute inset-0"></span>
                          {book_name}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogHeader>
              <DialogBody className="grid place-items-center gap-4 relative">
                <Typography
                  className="font-bold text-justify text-gray-200"
                  style={{ zIndex: 2 }}
                >
                  {description}
                </Typography>
              </DialogBody>
              <DialogFooter>
                <Button
                  style={{ background: bg }}
                  variant="gradient"
                  onClick={handleOpen}
                >
                  Close
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hadid;
