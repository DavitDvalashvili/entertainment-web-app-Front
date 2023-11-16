import LoginStyled from "../styledComponents/pages/LoginStyles";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { LoginInputs } from "../../Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { userContext } from "../../App";
import { useContext, useState } from "react";

const Login = () => {
  const [validate, setValidate] = useState<boolean>(false);
  const [wait, setWait] = useState<boolean>(false);

  //create context
  const context = useContext(userContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginInputs>();

  const validationFun = () => {
    const timer = setTimeout(() => {
      setWait(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const submitFunction: SubmitHandler<LoginInputs> = () => {
    getValues("email") === context?.email &&
    getValues("password") === context?.password
      ? setValidate(true)
      : setValidate(false);
    setWait(true);
    validationFun();
  };

  return (
    <LoginStyled>
      <img src={logo} alt="logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div className="email">
          <input
            type="text"
            placeholder="Email address"
            {...register("email", {
              required: "Can’t be empty",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter valid email",
              },
            })}
          />
          {errors.email && <span>{errors.email?.message}</span>}
        </div>
        <div className="password">
          <input
            type="text"
            placeholder="Password"
            {...register("password", {
              required: "Can’t be empty",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.,!@#$%^&*()_+{}[\]:;<>,.?/~\\-]{5,}$/,
                message: "Enter stronger password",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <Link to={!wait && validate ? "/AllContent" : ""}>
          <button type="submit">Login to your account</button>
        </Link>
      </form>
      <p>
        Don’t have an account? <Link to={"/signUp"}>Sign Up</Link>
      </p>
      {wait && (
        <span className="note">
          {validate ? "Login successfully" : "User not found"}
        </span>
      )}
    </LoginStyled>
  );
};

export default Login;
