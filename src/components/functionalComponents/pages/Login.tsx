import FormPageStyle from "../../styledComponents/pages/FormPageStyle";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { LoginInputs } from "../../../Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { userContext } from "../../../App";
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

    console.log(`validate 2: ${validate}`);
    console.log(`wait: ${wait}`);
    if (!wait && validate) {
      navigate("/allContent");
    }
  };

  console.log(`validate 1: ${validate}`);

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
              type="text"
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
          <button type="submit">Login to your account</button>
        </form>
        <p>
          Don’t have an account? <Link to={"/signUp"}>Sign Up</Link>
        </p>
      </div>
      {wait && (
        <span className={validate ? "note note-success" : "note note-fail"}>
          {validate
            ? "Login successfully"
            : "User not found, check email or password"}
        </span>
      )}
    </FormPageStyle>
  );
};

export default Login;
