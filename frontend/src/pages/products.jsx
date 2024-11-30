/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import TableData from "../components/Table";

import { useState, useEffect } from "react";
import {
  getAllproducts,
  getProduct,
  reset,
} from "../features/product/productSlice";
import Button from "../components/Button";
import Loader from "../components/Loading";
import "../App.css";

function Products() {
  const dispatch = useDispatch();
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  const onButtonClick = async (e) => {
    e.preventDefault();
    dispatch(getAllproducts());
  };

  if (isError) {
    return <div>Error: {message}</div>;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <div className="products">
      <h1>Products</h1>
      {/* {console.log(pro';ducts)} */}
      <Button onClick={onButtonClick} desc={"Fetch Button"} />
      <TableData products={products} />
    </div>
  );
}

export default Products;
