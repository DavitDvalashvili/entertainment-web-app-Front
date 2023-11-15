import LoginStyled from "../styledComponents/pages/LoginStyles";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { LoginInputs } from "../../Types";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm<LoginInputs>();

  const navigate = useNavigate();

  const submitFunction: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    console.log(error);
    navigate("/AllContent");
  };

  return (
    <LoginStyled>
      <img src={logo} alt="logo" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div className="email">
          <input type="text" placeholder="Email address"/>
        </div>
        <div className="password">
          <input type="text" placeholder="Password"  />
        </div>
      </form>
      <input type="submit" />
    </LoginStyled>
  );
};

export default Login;
