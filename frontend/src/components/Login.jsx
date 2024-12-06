/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../features/auth/authSlice";
import Button from "./Button";
import Loader from "./Loading";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { isLoading, isSuccess, data, error }] =
    useLoginUserMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
  });

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
      try {
        const response = await loginUser(data).unwrap();
        navigate("/admin/dashboard");
      } catch (err) {
        console.log(err);
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
        <Button onClick={onButtonClick} desc="Log in" />
        <label className="errorLabel"></label>
      </div>
    </div>
  );
};

export default Login;
