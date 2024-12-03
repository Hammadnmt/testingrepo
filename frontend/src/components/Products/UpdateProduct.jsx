/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct, reset } from "../../features/product/productSlice";
import Button from "../Button";
import Loader from "../Loading";
import "../../App.css";
const UpdateProduct = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    name: "",
    quantity: -1,
  });

  // const [idErrors, setIDError] = useState("");

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onButtonClick = async (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData));
  };
  if (isSuccess) {
    navigate(`/product`);
  }

  return (
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
        {/* <label className="errorLabel">{idErrors}</label> */}
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
        <Button onClick={onButtonClick} desc={"Update"} />
        {isError && <div className="errorLabel">{message}</div>}
      </div>
      <br />
    </div>
  );
};

export default UpdateProduct;
