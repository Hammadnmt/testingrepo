/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useGetAllProductsQuery } from "../features/product/productSlice";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Loader from "../components/Loading";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function TableData() {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isFetching, isError, error } =
    useGetAllProductsQuery();
  console.log(data);
  // console.log(data);
  return isLoading && isFetching ? (
    <Loader />
  ) : (
    <>
      <Button
        onClick={() => navigate("/admin/product/create")}
        desc={"Add Product"}
      />
      {data ? (
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
            {data.map((product) => (
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
                      onClick={async () => {
                        //here
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
