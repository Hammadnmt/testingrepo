/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import Loader from "./Loading";
import "../App.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      // Clear form data and navigate to dashboard
      setFormData({
        email: "",
        password: "",
      });
      navigate("/dashboard");
      // dispatch(reset());
    }
    if (isError) {
      // If there's an error, show the error message
      setFormErrors({ ...formErrors, passwordError: message });
      dispatch(reset()); // Reset the state after showing error
    }
  }, [
    user,
    isError,
    isLoading,
    isSuccess,
    dispatch,
    navigate,
    formErrors,
    setFormErrors,
    message,
  ]);

  const onButtonClick = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validate form fields
    const validate = () => {
      if (!formData.email) {
        newFormErrors.emailError = "Enter Email";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newFormErrors.emailError = "Enter a valid email";
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
      return isValid;
    };

    // If form is valid, proceed with login
    if (validate()) {
      const data = {
        email: formData.email,
        password: formData.password,
      };
      dispatch(login(data));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return isLoading ? (
    <Loader />
  ) : (
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
      </div>
      <br />
      <div className={"inputContainer"}>
        {formErrors.passwordError || message}
        <Button onClick={onButtonClick} desc="Log in" />
        <label className="errorLabel"></label>
      </div>
    </div>
  );
};

export default Login;
