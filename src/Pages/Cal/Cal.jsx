import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";

const Cal = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-6xl font-bold text-white text-center mt-32">
        Meet the Error Makers_
        <div className="border-8 w-24 my-7 mx-auto custom-border"></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 my-10">
        {/* heading */}

        {/* card-1 start */}
        <CardContainer className="inter-var">
          <CardBody
            className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border hover:shadow-[0_0_20px_5px_rgba(0,0,139,0.8)] transition duration-300 ease-in-out
"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Md. Khairul Islam Sagor
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Khairul the Code Whisperer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://i.imgur.com/57XtzVR.png"
                height="1000"
                width="1000"
                className="h-68 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${name}'s photo`}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* card-1 end */}

        {/* card-2 start */}
        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border hover:shadow-[0_0_20px_5px_rgba(0,0,139,0.8)] transition duration-300 ease-in-out
"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              MD Badruddoza Rakib
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Rakib the Runtime Rebel
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://i.imgur.com/A0xVO2a.png"
                height="1000"
                width="1000"
                className="h-68 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${name}'s photo`}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* card-2 end */}

        {/* card-3 start */}
        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border hover:shadow-[0_0_20px_5px_rgba(0,0,139,0.8)] transition duration-300 ease-in-out
"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Marzia Katha
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Katha the Algorithm Artist
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://i.imgur.com/EXxPgpA.png"
                height="1000"
                width="1000"
                className="h-68 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${name}'s photo`}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* card-3 end */}

        {/* card-4 start */}
        <CardContainer className="inter-var">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border hover:shadow-[0_0_20px_5px_rgba(0,0,139,0.8)] transition duration-300 ease-in-out
"
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Shafin
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              The Silent Fixer
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://i.imgur.com/m0flw8S.jpg"
                height="1000"
                width="1000"
                className="h-68 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={`${name}'s photo`}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
        {/* card-4 end */}
      </div>
    </div>
  );
};

export default Cal;
