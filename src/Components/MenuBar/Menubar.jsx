import "./Menu.css";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Menubar = () => {
  const { Logout, user } = useAuth();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 text-pink-400"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Art"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 text-pink-400"
            : ""
        }
      >
        Art and Calligraphy
      </NavLink>
      <NavLink
        to="/Cal"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "underline underline-offset-8 text-pink-400"
            : ""
        }
      >
        Fasting Schedule
      </NavLink>
    </ul>
  );

  return (
    <div className="banner-body">
      <div className="   ">
        <Navbar className="sticky  top-0 z-10 h-max w-full bg-[#0e0619] border-none shadow-none   max-w-full rounded-none px-4 py-2 lg:px-20 lg:py-4">
          <div className="flex items-center justify-between text-[#feefff]">
            <Typography
              as="a"
              className="mr-4 cursor-pointer py-1.5 font-medium flex justify-center items-center gap-2"
            >
              <img
                className="w-14"
                src="https://i.imgur.com/DhqTFQw.png"
                alt=""
              />
              <h1 className="text-xl font-bold ">Islamic Fest Vista</h1>
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                {user ? (
                  <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1  new text-lg text-white font-extrabold"
                  >
                    <span className="flex items-center gap-3">
                      {user.displayName}

                      <Menu>
                        <MenuHandler>
                          <Button className="bg-inherit shadow-none p-0">
                            {" "}
                            <img
                              className="w-10 h-10 rounded-full"
                              src={user.photoURL}
                              alt=""
                            />
                          </Button>
                        </MenuHandler>
                        <MenuList className="bg-inherit border-none">
                          <Button onClick={Logout} className="w-full">
                            Log Out
                          </Button>
                        </MenuList>
                      </Menu>
                    </span>
                  </Typography>
                ) : (
                  <Link to={"/login"}>
                    <Button className=" new bg-[#F9A51A] text-black py-2 px-6 text-base  font-bold">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
};

export default Menubar;
