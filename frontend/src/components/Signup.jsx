/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup, reset } from "../features/auth/authSlice";
import Button from "./Button";
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
  const [errorMessage, setErrorMessage] = useState("");

  const { user, isLoading, isError, isSuccess } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log("error");
    }
    if (isSuccess) {
      navigate("/login");
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "",
      });
      setFormErrors({
        nameError: "",
        emailError: "",
        passwordError: "",
        roleError: "",
      });
      setErrorMessage("");
      dispatch(reset());
    }
  }, [user, isError, isSuccess, navigate, dispatch]);

  const onButtonClick = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validate form fields
    if (!formData.name) {
      newFormErrors.nameError = "Enter name";
      isValid = false;
    } else {
      newFormErrors.nameError = "";
    }

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

    if (!formData.role) {
      newFormErrors.roleError = "Enter Role";
      isValid = false;
    } else {
      newFormErrors.roleError = "";
    }

    setFormErrors(newFormErrors);

    // If form is valid, dispatch signup
    if (isValid) {
      try {
        dispatch(signup(formData));
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
        <Button
          className={"inputButton"}
          onClick={onButtonClick}
          desc={"Sign up"}
        />
        <label className="errorLabel">{errorMessage}</label>
      </div>
      <br />
    </div>
  );
};

export default Signup;
