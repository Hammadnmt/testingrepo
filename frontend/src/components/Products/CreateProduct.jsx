/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createProduct, reset } from "../../features/product/productSlice";
import Button from "../Button";
import Loader from "../Loading";
import "../../App.css";
const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    quantityError: "",
  });

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isSuccess) {
    navigate("/admin/product");
  }
  console.log(isSuccess);

  // Simplified and reusable validation function
  const validateForm = () => {
    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (!formData.name) {
      newFormErrors.nameError = "Enter name";
      isValid = false;
    } else {
      newFormErrors.nameError = "";
    }

    if (!formData.quantity) {
      newFormErrors.quantityError = "Quantity is required.";
      isValid = false;
    } else if (isNaN(formData.quantity) || formData.quantity <= 0) {
      newFormErrors.quantityError =
        "Enter a valid positive number for quantity.";
      isValid = false;
    } else {
      newFormErrors.quantityError = ""; // Clear previous error
    }
    setFormErrors(newFormErrors);
    return isValid;
  };

  const onButtonClick = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Dispatch signup action
      dispatch(createProduct(formData));
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
    <div
      className={
        "flex flex-col items-center justify-center h-screen content-center"
      }
    >
      <div
        className={
          "flex flex-col items-center content-center text-2xl font-bold "
        }
      >
        <div>Create New product</div>
      </div>
      <br />
      <div className={"align-start justify-center"}>
        <input
          name="name"
          value={formData.name}
          placeholder="Enter product name here"
          onChange={handleChange}
          className={"w-96	 text-lg	rounded-s-lg	border-solid 	border-8"}
        />
        <br />
        <label className="flex flex-col items-center text-red-700">
          {formErrors.nameError}
        </label>
      </div>
      <br />
      <div className={"align-start justify-center"}>
        <input
          name="quantity"
          value={formData.quantity}
          placeholder="Enter quantity here"
          onChange={handleChange}
          className={"w-96	 text-lg	rounded-s-lg	border-solid 	border-8"}
        />
        <br />
        <label className="flex flex-col items-center text-red-700">
          {formErrors.quantityError}
        </label>
      </div>
      <br />
      <div className={"align-start justify-center"}>
        <Button onClick={onButtonClick} desc={"Create"} />
        <label className="errorLabel">{message}</label>{" "}
      </div>
      <br />
    </div>
  );
};

export default CreateProduct;
