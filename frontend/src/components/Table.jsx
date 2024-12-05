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
  }, []);

  return (
    <>
      <Button
        onClick={() => navigate("/admin/product/create")}
        desc={"Add Product"}
      />
      {products.length > 0 ? (
        <table className="table-auto w-full border-separate border-spacing-4">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Quantity</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-100">
                <td className="px-6 py-4">{product._id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() =>
                        navigate(
                          `/admin/product/update/${product._id}/${product.name}/${product.quantity}`
                        )
                      }
                    >
                      <EditIcon style={{ fontSize: 20 }} />
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteProduct(product._id)).then(() =>
                          dispatch(getAllproducts())
                        );
                      }}
                    >
                      <DeleteIcon style={{ fontSize: 20 }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600 mt-4">No products available.</p>
      )}
    </>
  );
}
