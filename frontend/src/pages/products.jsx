/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getAllproducts, reset } from "../features/auth/authSlice";
import Button from "../components/Button";
import Loader from "../components/Loading";
import "../App.css";

function Products() {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isLoading) {
      <Loader />;
    }
    if (isSuccess || products) {
      setItems(products);
      dispatch(reset());
    }
  }, [products, isLoading, isError, isSuccess, message, dispatch]);

  const onButtonClick = async (e) => {
    e.preventDefault();
    dispatch(getAllproducts());
  };
  return (
    <div className="products">
      <h1>Products</h1>
      <Button onClick={onButtonClick}>Fetch Products</Button>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
