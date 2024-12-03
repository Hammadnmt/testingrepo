/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteProduct,
  getAllproducts,
} from "../features/product/productSlice";
import Button from "../components/Button";
import Loader from "../components/Loading";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    
    if (isLoading) {
      return <Loader />;
    }
  });
  return products.length == 0 ? (
    <Button
      onClick={() => {
        navigate("/product/create");
      }}
      desc={"Add Product"}
    />
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="centre">Quantity</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="center">{product.quantity}</TableCell>
              <TableCell align="center">
                <button
                  onClick={() => {
                    dispatch(deleteProduct(product._id));
                    dispatch(getAllproducts());
                  }}
                >
                  <DeleteIcon style={{ fontSize: 20 }} />
                </button>

                <button
                  onClick={() => {
                    navigate(`/product/update/${product._id}`);
                  }}
                >
                  <EditIcon style={{ fontSize: 20 }} />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
