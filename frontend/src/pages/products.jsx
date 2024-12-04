/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import TableData from "../components/Table";

import { useState, useEffect } from "react";
import {
  useGetAllProductsQuery,
  setProducts,
  reset,
} from "../features/product/productSlice";
import Button from "../components/Button";
import Loader from "../components/Loading";
import "../App.css";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [getAllProducts, { isLoading, isSuccess, error }] = useGetAllProductsQuery();

  const onButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await getAllProducts();
      dispatch(setProducts(response.data));
      return response.data;
    } catch (error) {
      console.log(error)
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
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
