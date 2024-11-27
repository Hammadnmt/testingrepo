/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const onButtonClick = async () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validate form fields
    if (!formData.email) {
      newFormErrors.emailError = "Enter Email";
      isValid = false;
    } else {
      newFormErrors.emailError = "";
    }

    if (!formData.password) {
      newFormErrors.passwordError = "Enter Password";
      isValid = false;
    } else {
      newFormErrors.passwordError = "";
    }

    setFormErrors(newFormErrors);

    // If form is valid, proceed with login
    if (isValid) {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      try {
        dispatch(login(data));
        if (isSuccess) {
          navigate("/dashboard");
          setFormData({
            email: "",
            password: "",
          });
        } else {
          throw new Error("...");
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="email"
          value={formData.email}
          placeholder="Enter your email here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{formErrors.emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter your password here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{formErrors.passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <Button
          className={"inputButton"}
          onClick={onButtonClick}
          desc={"Log in"}
        />
        <label className="errorLabel">{errorMessage}</label>
      </div>
    </div>
  );
};

export default Login;
