import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Dialog,
  DialogHeader,
  Typography,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import cat from "../../assets/cat.json";
import love from "../../assets/love.json";
import { useState } from "react";

const Art = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const data = [
    {
      label: "CALLIGRAPHY",
      value: "CALLIGRAPHY",
      images: [
        {
          imageLink: "https://i.imgur.com/2xm2557.png",
        },
        {
          imageLink: "https://i.imgur.com/kzXxQxL.png",
        },
        {
          imageLink: "https://i.imgur.com/XviAiWF.png",
        },
        {
          imageLink: "https://i.imgur.com/BxGWxFL.png",
        },
        {
          imageLink: "https://i.imgur.com/SOqDkpd.png",
        },
        {
          imageLink: "https://i.imgur.com/VIgID3h.png",
        },
      ],
    },
    {
      label: "ART",
      value: "ART",
      images: [
        {
          imageLink: "https://i.imgur.com/QcEHZQY.png",
        },
        {
          imageLink: "https://i.imgur.com/1zwtls2.png",
        },
        {
          imageLink: "https://i.imgur.com/64lYhc0.png",
        },
        {
          imageLink: "https://i.imgur.com/ZIkN4Yk.png",
        },
        {
          imageLink: "https://i.imgur.com/USE8UGK.png",
        },
        {
          imageLink: "https://i.imgur.com/n1yfjDF.png",
        },
      ],
    },
    {
      label: "FLOWERS",
      value: "FLOWERS",
      images: [
        {
          imageLink: " https://i.imgur.com/NnlSn9U.png",
        },
        {
          imageLink: "https://i.imgur.com/fujlCQY.png",
        },
        {
          imageLink: "https://i.imgur.com/26rjSoN.png",
        },

        {
          imageLink: "https://i.imgur.com/y7oUF4e.png",
        },
        {
          imageLink: "https://i.imgur.com/pBY9cgb.png",
        },
        {
          imageLink: "https://i.imgur.com/76XW9ax.png",
        },
      ],
    },
    {
      label: "OTHERS",
      value: "OTHERS",
      images: [
        {
          imageLink: "https://i.imgur.com/ElV3BLE.png",
        },
        {
          imageLink: "https://i.imgur.com/hl1GJex.png",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
    {
      label: "Svelte",
      value: "svelte",
      images: [
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="relative">
        <img
          className=""
          src="https://i.ibb.co/b5ztvk3/banner-background.png"
          alt=""
        />
        <div className="absolute space-y-5 top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h1
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(198,197,199,1) 0%, rgba(62,59,67,1) 85%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-8xl font-bold "
          >
            CALLIGRAPHY
          </h1>
          <h1
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(218,68,222,1) 0%, rgba(102,38,144,1) 85%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-8xl font-bold text-center  "
          >
            AND ART <span className="border-l-8 mx-5  border-orange-400"></span>
          </h1>
        </div>
        <div className="absolute space-y-5 top-1/4 pt-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="text-white text-4xl font-bold uppercase text-center pt-16">
            The Artistry and{" "}
            <span className="text-orange-400">Grace of Calligraphy</span>
          </h1>
          <p className="text-gray-300  text-lg text-center">
            Dive into the captivating world of art and calligraphy—a fusion of
            creativity and precision. Brushstrokes of Elegance unveils the
            beauty of language through intricate strokes, inviting you to
            witness the seamless blend of artistic expression and cultural
            richness in every carefully crafted piece
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-20 ">
        <Tabs value="CALLIGRAPHY">
          <TabsHeader className=" ">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="grid grid-cols-1 gap-4 ">
            {data.map(({ value, images }) => (
              <TabPanel
                className="grid grid-cols-2 gap-4 md:grid-cols-3"
                key={value}
                value={value}
              >
                {images?.map(({ imageLink }, index) => (
                  <div key={index}>
                    <img
                      className="h-[500px] w-full border-4 border-gray-300 max-w-full rounded-lg object-cover object-center"
                      src={imageLink}
                      alt="image-photo"
                    />
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(33,135,105,1) 0%, rgba(6,48,69,1) 100%)",
        }}
        className="rounded-xl my-32 px-32 py-20 max-w-7xl mx-auto flex justify-between items-center relative"
      >
        <img
          src="https://i.imgur.com/COZltXP.png"
          alt=""
          className="absolute -top-16 -right-20  w-44 cursor-pointer animate-bounce  "
        />
        <img
          src="https://i.imgur.com/wYM9Y8n.png"
          alt=""
          className="absolute top-12 -left-24  w-44 cursor-pointer animate-spin  "
        />
        <div className="space-y-3">
          <h1
            className="text-4xl font-bold"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(164,193,191,1) 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Expressions of Appreciation
          </h1>
          <p className=" font-bold text-gray-300">
            In heartfelt appreciation, I extend special thanks for your <br />
            exceptional support.
          </p>
        </div>
        <div>
          <button onClick={handleOpen} className="relative">
            <img
              className="w-80"
              src="https://i.imgur.com/f3z35qo.png"
              alt=""
            />
            <h1 className="absolute text-lg font-bold text-gray-300 top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-40">
              Thankful Revel
            </h1>
          </button>
          <Dialog
            className=" bg-[linear-gradient(90deg, rgba(40,7,66,1) 0%, rgba(13,5,24,1) 15%, rgba(22,6,38,1) 85%, rgba(40,7,66,1) 100%);]"
            open={open}
            handler={handleOpen}
          >
            <DialogHeader
              style={{
                background:
                  "linear-gradient(90deg, rgba(33,135,105,1) 0%, rgba(6,48,69,1) 100%)",
              }}
            >
              <Typography
                variant="h5"
                className="text-gray-300 font-extrabold uppercase   ml-52 rounded-lg p-2"
              >
                A Heartfelt Thank You
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <Lottie animationData={cat}></Lottie>
              <Typography
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(33,135,105,1) 0%, rgba(6,48,69,1) 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                variant="h4"
              >
                Crafting Beauty, Inspiring Thanks!
              </Typography>
              <Typography className="text-center font-normal text-gray-400">
                " Expressing heartfelt gratitude to{" "}
                <span className="text-orange-400 text-xl">Swarna</span>, a
                beacon of creativity in calligraphy and art. Your talent
                illuminates every stroke, transforming text into captivating
                visual stories. Your dedication to craft and ability to create
                immersive experiences are truly inspiring. Thank you,{" "}
                <span className="text-orange-400 text-xl">Swarna</span>, for
                sharing your extraordinary gifts and leaving an indelible mark
                on the canvas of creativity."
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button className="bg-transparent" onClick={handleOpen}>
                <Lottie className="w-28" animationData={love}></Lottie>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Art;
