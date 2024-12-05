/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../features/auth/authSlice";
import Button from "./Button";
import Loader from "./Loading";
import "../App.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    roleError: "",
  });

  const navigate = useNavigate();
  const [registerUser, { isLoading, isSuccess, error }] =
    useRegisterUserMutation();

  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (!formData.name) {
      newFormErrors.nameError = "Enter name";
      isValid = false;
    } else {
      newFormErrors.nameError = "";
    }

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
    } else if (formData.password.length < 6) {
      newFormErrors.passwordError = "Password should be at least 6 characters";
      isValid = false;
    } else {
      newFormErrors.passwordError = "";
    }

    if (!formData.role) {
      newFormErrors.roleError = "Enter Role";
      isValid = false;
    } else {
      newFormErrors.roleError = "";
    }
    setFormErrors(newFormErrors);
    return isValid;
  };

  const onButtonClick = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await registerUser(formData).unwrap();
        if (isSuccess) {
          navigate("/login");
        }
      } catch (err) {
        console.log(error);
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
        <div>Signup</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="name"
          value={formData.name}
          placeholder="Enter your name here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{formErrors.nameError}</label>
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
        <input
          name="role"
          value={formData.role}
          placeholder="Enter your role here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{formErrors.roleError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <Button onClick={onButtonClick} desc={"Sign up"} />
      </div>
      <br />
    </div>
  );
};

export default Signup;
