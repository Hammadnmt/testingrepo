import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth/authService.js";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onButtonClick = async () => {
    if (!email) setEmailError("Enter Email");
    if (!password) setPasswordError("Enter Password");
    const data = {
      email,
      password,
    };
    console.log("Hello");
    try {
      const response = await login(data);
      console.log(response);
      if (response.status) {
        navigate("/dashboard");
        setEmail("");
        setPassword("");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
        <label className="errorLabel">{errorMessage}</label>
      </div>
    </div>
  );
};

export default Login;
