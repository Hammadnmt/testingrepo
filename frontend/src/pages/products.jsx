/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import TableData from "../components/Table";

import { useState, useEffect } from "react";
<<<<<<< HEAD
// import {
//   getAllproducts,
//   getProduct,
//   reset,
// } from "../features/product/productSlice";
=======
import {
  useGetAllProductsQuery,
  setProducts,
  reset,
} from "../features/product/productSlice";
>>>>>>> 9b66398ff747e4e7865249bfd246343b4c174f0f
import Button from "../components/Button";
import Loader from "../components/Loading";
import "../App.css";

function Products() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  // const onButtonClick = async (e) => {
  //   e.preventDefault();
  //   dispatch(getAllproducts());
  // };
=======
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
>>>>>>> 9b66398ff747e4e7865249bfd246343b4c174f0f

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return isLoading ? (
    <Loader />
  ) : (
    <div className="products">
      <h1>Products</h1>
      {/* {console.log(pro';ducts)} */}
      {/* <Button onClick={onButtonClick} desc={"Fetch Button"} /> */}
      <TableData products={products} />
    </div>
  );
}

export default Products;
