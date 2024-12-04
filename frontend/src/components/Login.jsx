/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import Loader from "./Loading";
import { store } from "../store/store";
import { loggingAndDispatch } from "../middleware/logging";
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
      // user.role == "Admin" ? navigate("/dashboard") : navigate("/");
      navigate("/admin/dashboard");
      // dispatch(reset());
    }
    if (isError) {
      // If there's an error, show the error message
      setFormErrors({ ...formErrors, passwordError: message });
      loggingAndDispatch(store, reset()); // Reset the state after showing error
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
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div
          id="form-container"
          className="justify-center items-center bg-white p-16 rounded-lg shadow-2xl w-80 z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Login
          </h2>
          <form className="space-y-5 ">
            <input
              name="email"
              value={formData.email}
              placeholder="Enter your email here"
              onChange={handleChange}
              className={"w-full h-12 border border-gray-800 px-3 rounded-lg"}
            />
            <input
              name="password"
              type="password"
              value={formData.password}
              placeholder="Enter your password here"
              onChange={handleChange}
              className={"w-full h-12 border border-gray-800 px-3 rounded-lg"}
            />
            <div className={"inputContainer"}>
              {formErrors.passwordError || message}
              <Button onClick={onButtonClick} desc="Log in" />
              <label className="errorLabel"></label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
