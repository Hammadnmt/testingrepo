/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
// import { createProduct, reset } from "../../features/product/productSlice";
=======
import { useCreateProductMutation, setProducts, reset } from "../../features/product/productSlice";
>>>>>>> 9b66398ff747e4e7865249bfd246343b4c174f0f
import Button from "../Button";
import Loader from "../Loading";
import "../../App.css";
const CreateProduct = () => {
  const [createProduct, { isLoading, isSuccess, data, error }] = useCreateProductMutation();

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    quantityError: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      navigate("/product");
      // dispatch(reset());
    }
  }, [products, isError, isLoading, isSuccess, navigate, dispatch]);

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
<<<<<<< HEAD
      // dispatch(createProduct(formData));
=======
      try {
        await CreateProduct(FormData);
      } catch (error) {
        console.error(error);
      }
>>>>>>> 9b66398ff747e4e7865249bfd246343b4c174f0f
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
        <div>Create New product</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="name"
          value={formData.name}
          placeholder="Enter product name here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{formErrors.nameError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="quantity"
          value={formData.quantity}
          placeholder="Enter quantity here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{formErrors.quantityError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <Button onClick={onButtonClick} desc={"Create"} />
        <label className="errorLabel">{message}</label>{" "}
      </div>
      <br />
    </div>
  );
};

export default CreateProduct;
