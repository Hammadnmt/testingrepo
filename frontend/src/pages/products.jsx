/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import TableData from "../components/Table";
import { useGetAllProductsQuery } from "../features/product/productSlice";
import Loader from "../components/Loading";
import "../App.css";

function Products() {
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
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
