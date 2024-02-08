import FormPageStyle from "../../styledComponents/FormPageStyle";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { LoginInputs } from "../../../Types";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // display error message on the screen
  const handleError = (message: string | undefined) => {
    toast.error(message, {
      position: "bottom-left",
      autoClose: 1000,
    });
  };

  //display success message on the screen
  const handleSuccess = (message: string) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 1000,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const navigate = useNavigate();
  const submitFunction: SubmitHandler<LoginInputs> = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //displays message ;
      if (response.data.success) {
        // login successful
        handleSuccess(response.data.message);
        localStorage.setItem("authToken", response.data.token);
        //after 1 second navigate to login page

        setTimeout(() => {
          navigate("/allContent");
          setLoading(false);
        }, 1000);
      } else {
        // log in failed
        handleError(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      //console.error("Login failed", error);
      handleError("Login failed, server error");
      setLoading(false);
    }
  };

  return (
    <FormPageStyle>
      <img src={logo} alt="logo" />
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submitFunction)}>
          <div className={errors.email ? "email errorEmail" : "email"}>
            <input
              type="text"
              placeholder="Email address"
              {...register("email", {
                required: "Can’t be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <div
            className={errors.password ? "password errorPassword" : "password"}
          >
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Can’t be empty",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.,!@#$%^&*()_+{}[\]:;<>,.?/~\\-]{5,}$/,
                  message: "Invalid Password",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button
            type="submit"
            disabled={loading}
            style={loading ? { cursor: "wait" } : {}}
          >
            {loading ? "Loading" : "Login to your account"}
          </button>
        </form>
        <p>
          Don’t have an account? <Link to={"/signUp"}>Sign Up</Link>
        </p>
      </div>
      <ToastContainer />
    </FormPageStyle>
  );
};

export default Login;
