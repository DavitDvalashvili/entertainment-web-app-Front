import SignUpStyle from "../styledComponents/pages/SignUpStyle";
import Logo from "../../assets/logo.svg";
import { SignUpInputs } from "../../Types";
import { useNavigate, Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { userContext } from "../../App";
import { useContext } from "react";

const SignUp = () => {
  const context = useContext(userContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const navigate = useNavigate();
  const submitFunction: SubmitHandler<SignUpInputs> = (data) => {
    context?.setPassword(data.password);
    context?.setEmail(data.email)
    navigate("/login");
  };

  const validatePasswordRepeat = () => {
    const password = watch("password");
    const repeatPassword = watch("repeatPassword");
    if (password === repeatPassword) {
      return undefined;
    } else {
      return "Do not match";
    }
  };

  return (
    <SignUpStyle>
      <img src={Logo} alt="logo" />
      <h2>Sign Up</h2>
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
        <div className="repeatPassword">
          <input
            type="text"
            placeholder="Repeat Password"
            {...register("repeatPassword", {
              required: "Can’t be empty",
              validate: validatePasswordRepeat,
            })}
          />
          {errors.repeatPassword && (
            <span>{errors.repeatPassword.message}</span>
          )}
        </div>
        <button type="submit">Create an account</button>
      </form>
      <p>
        Already have an account? <Link to={"/login"}>Login</Link>
      </p>
    </SignUpStyle>
  );
};

export default SignUp;
