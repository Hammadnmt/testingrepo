/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct, reset } from "../../features/product/productSlice";
import Button from "../Button";
import Loader from "../Loading";
import "../../App.css";
const UpdateProduct = () => {
  const { id,name,quantity } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    name,
    quantity,
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
    navigate(`/admin/product`);
  }

  return (
    // <div className="flex flex-row justify-center">
    <div className="flex flex-col items-center justify-center h-screen content-center	">
      <div className={"titleContainer"}>
        <div>Update product</div>
      </div>
      <br />
      <div className="align-start justify-center">
        <input
          name="name"
          value={formData.name}
          placeholder="Enter name here"
          onChange={handleChange}
          className={"w-96	 text-lg	rounded-s-lg	border-solid 	border-8"}
        />
      </div>
      <br />
      <div className={"align-start justify-center "}>
        <input
          name="quantity"
          value={formData.quantity}
          placeholder="Enter quantity here"
          type="number"
          onChange={handleChange}
          className={"w-96 text-lg rounded-s-lg	border-solid	border-8	"}
        />
      </div>
      <div className={""}>
        <Button onClick={onButtonClick} desc={"Update"} />
        {isError && <div className="errorLabel">{message}</div>}
      </div>
      <br />
    </div>
  );
};

export default UpdateProduct;
