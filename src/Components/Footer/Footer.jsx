import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Mastery Resources",
    items: [{ name: "Mastery Map", route: "/Art" }],
  },
  {
    title: "Community",
    items: [
      { name: "Our Squad", route: "/Cal" },
      { name: "Home Page", route: "/" },
    ],
  },
  {
    title: "Auth",
    items: [
      { name: "Login", route: "/login" },
      { name: "Registration", route: "/Register" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(16,13,29,1) 0%, rgba(31,66,70,1) 20%, rgba(28,60,106,1) 80%, rgba(16,15,40,1) 100%)",
        minHeight: "50vh", // Adjust as needed
      }}
      className="py-16 pb-16 h-full" // Use h-full if you want it to cover full height
    >
      <footer className="relative w-full">
        <img
          className="absolute w-full h-full object-cover" // Ensure the image covers the footer
          src="https://i.imgur.com/ZFlqB8v.png"
          alt=""
        />
        <div className="mx-auto w-full max-w-7xl px-8 relative z-10">
          {" "}
          {/* Add z-10 to place content above the background */}
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h3" className="mb-6 font-bold text-gray-100">
              404 Squad
            </Typography>
            <div className="grid grid-cols-3 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="white"
                    className="mb-3 font-medium opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map(({ name, route }) => (
                    <li key={name}>
                      <Typography
                        as="a"
                        href={route} // Use route for the link
                        color="white"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-gray-100 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="https://material-tailwind.com/"> 404 Squad</a>. All
              Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              {/* Social media icons */}
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity text-white hover:opacity-100"
              >
                {/* Facebook icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity text-white hover:opacity-100"
              >
                {/* Instagram icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zM15.346 6.654a.756.756 0 11-1.514.001.756.756 0 011.514-.001z" />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity text-white hover:opacity-100"
              >
                {/* Twitter icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.644 4.83c-.885.392-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.165-2.724-.951.563-2.006.973-3.127 1.19-.896-.956-2.174-1.554-3.594-1.554-2.717 0-4.917 2.206-4.917 4.917 0 .385.043.761.127 1.124-4.083-.205-7.7-2.163-10.14-5.144-.426.731-.669 1.578-.669 2.485 0 1.717.873 3.22 2.196 4.099-.81-.026-1.569-.248-2.237-.617v.062c0 2.396 1.703 4.394 3.96 4.842-.415.112-.852.171-1.296.171-.315 0-.622-.031-.925-.088.622 1.942 2.426 3.354 4.56 3.393-1.67 1.314-3.78 2.094-6.075 2.094-.394 0-.782-.023-1.17-.067 2.168 1.392 4.749 2.207 7.51 2.207 9.005 0 13.906-7.463 13.906-13.905 0-.21 0-.42-.015-.628.954-.688 1.782-1.55 2.438-2.53z" />
                </svg>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
