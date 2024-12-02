/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct, reset } from "../../features/product/productSlice";
import Button from "../Button";
import Loader from "../Loading";
import "../../App.css";
const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    quantity: -1,
  });

  const [idErrors, setIDError] = useState("");

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Simplified and reusable validation function
  const validateForm = () => {
    let isValid = true;
    if (!formData.id) {
      setIDError("Enter id");
      isValid = false;
    }
    return isValid;
  };
  useEffect(() => {
    if (isLoading) {
      <Loader />;
    }
    if (isSuccess) {
      navigate("/product");
      dispatch(reset());
    }
  }, [isSuccess, isLoading, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onButtonClick = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateProduct(formData));
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Update product</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="id"
          value={formData.id}
          placeholder="Enter product id here"
          onChange={handleChange}
          className={"inputBox"}
        />
        <label className="errorLabel">{idErrors}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="name"
          value={formData.name}
          placeholder="Enter name here"
          onChange={handleChange}
          className={"inputBox"}
        />
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          name="quantity"
          value={formData.quantity}
          placeholder="Enter quantity here"
          type="number"
          onChange={handleChange}
          className={"inputBox"}
        />
      </div>
      <div className={"inputContainer"}>
        <Button onClick={onButtonClick} desc={"Create"} />
        {isError && <div className="errorLabel">{message}</div>}
      </div>
      <br />
    </div>
  );
};

export default UpdateProduct;
