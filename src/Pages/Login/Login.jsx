import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import "./LoginButton.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";

const Login = () => {
  const { Login, GoogleLogin } = useAuth();
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const accept = form.get("accept");

    setErr("");
    if (!accept) {
      setErr(toast.error("Please accept Terms & Conditions!"));
      return;
    }

    console.log(email, password, accept);

    // Login with email
    Login(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Login!");

        // Navigate to the home page after successful login
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Login Failed!");
      });
  };

  // Google Login
  const handleGoogle = () => {
    GoogleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Login!");

        // Navigate to the home page after Google login
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Login Failed!");
      });
  };

  return (
    <div>
      <div className="h-[70vh] flex justify-center items-center -mb-20  ">
        <Card
          color="transparent"
          shadow={false}
          className="border border-gray-800 px-28 py-5 border-y-[#F9A51A]"
        >
          <Typography variant="h4" color="gray">
            Login
          </Typography>
          <form
            onSubmit={handleLogin}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="gray" className="-mb-3">
                Username or Email
              </Typography>
              <Input
                size="lg"
                name="email"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-gray-400"
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
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </span>
                )}
              </div>
            </div>
            <Checkbox
              name="accept"
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-semibold transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              type="submit"
              className="mt-6 bg-[#F9A51A] text-black new text-lg px-1 py-1 font-semibold"
              fullWidth
            >
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Do not have an account?{" "}
              <Link className="text-[#F9A51A] font-medium" to={"/Register"}>
                Register
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      <div className="flex text-center justify-center items-center gap-4">
        <hr className=" border border-gray-400 w-1/12" />
        <span className="font-semibold text-gray-100">Or</span>
        <hr className=" border border-gray-400 w-1/12" />
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
            alt="google"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
      </div>
      {err && <p>{err}</p>}
    </div>
  );
};

export default Login;
