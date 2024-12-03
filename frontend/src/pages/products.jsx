/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import TableData from "../components/Table";
import { useState, useEffect } from "react";
import { getAllproducts, reset } from "../features/product/productSlice";
import Button from "../components/Button";
import Loader from "../components/Loading";

import "../App.css";

function Products() {
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(getAllproducts());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);
  // const onButtonClick = async (e) => {
  //   e.preventDefault();
  //   dispatch(getAllproducts());
  // };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="products">
      <h1>Products</h1>

      <TableData />
    </div>
  );
}

export default Products;
