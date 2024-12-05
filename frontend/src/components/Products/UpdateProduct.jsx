/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useUpdateProductMutation } from "../../features/product/productSlice.js";
import Button from "../Button";
import Loader from "../Loading";
import "../../App.css";
const UpdateProduct = () => {
  const navigate = useNavigate();
  const [updateProduct, { isError, isLoading, error, message, isSuccess }] =
    useUpdateProductMutation();
  const { name, id, quantity } = useParams();
  const [formData, setFormData] = useState({
    id,
    name,
    quantity,
  });
  const onButtonClick = async () => {
    try {
      await updateProduct(formData);
      if (isSuccess) {
        navigate(`/admin/product`);
      }
    } catch (err) {
      console.log(error);
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
        <div>Update product</div>
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
