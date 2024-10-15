import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./Button.css";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

const Register = () => {
  const { Register, Update, GoogleLogin } = useAuth();
  const [regError, setRegError] = useState("");
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const name = form.get("name");
    const password = form.get("password");
    const photo = form.get("photo");

    console.log(email, password, photo, name);

    // erase
    setRegError("");

    // validation
    if (password.length < 7) {
      setRegError(toast.error("Password must be more than 6 character!"));
      return;
    }

    // register with email
    Register(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Update profile
        Update(name, photo)
          .then(() => {})
          .catch(() => {});
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Registration Failed!");
      });
  };

  // Google Login
  const handleGoogle = () => {
    GoogleLogin()
      .then((res) => {
        console.log(res.user);

        toast.success("Successfully Login!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Login Failed!");
      });
  };

  return (
    <div>
      <div className="h-[70vh] flex justify-center items-center -mb-2 mt-20  ">
        <Card
          color="transparent"
          shadow={false}
          className="border border-gray-800 px-28 py-5 border-y-[#F9A51A]"
        >
          <Typography className="" variant="h4" color="gray">
            Create an account
          </Typography>
          <form
            onSubmit={handleRegister}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="gray" className="-mb-3">
                Username
              </Typography>
              <Input
                size="lg"
                placeholder="name"
                name="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="gray" className="-mb-3">
                PhotoURL
              </Typography>
              <Input
                size="lg"
                placeholder="URL"
                name="photo"
                className=" !border-t-gray-200 focus:!border-t-gray-900  text-gray-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="gray" className="-mb-3">
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                name="email"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="gray" className="-mb-3">
                Password
              </Typography>
              <div className="relative">
                <Input
                  type={show ? "text" : "password"}
                  name="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-400"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password.length >= 1 && (
                  <span
                    className="absolute top-4 right-4"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="mt-6 bg-[#F9A51A] text-black new text-lg px-1 py-1 font-semibold "
              fullWidth
            >
              Registration
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link className="text-[#F9A51A] font-medium" to={"/login"}>
                Login
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      <div className="flex text-center justify-center items-center gap-4 ">
        <hr className=" border border-gray-400 w-1/12" />
        <span className="font-semibold text-gray-100">Or</span>
        <hr className=" border border-gray-400  w-1/12" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-2">
        <Button
          onClick={handleGoogle}
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 mb-7"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
      </div>
      {regError && <p>{regError}</p>}
    </div>
  );
};

export default Register;
