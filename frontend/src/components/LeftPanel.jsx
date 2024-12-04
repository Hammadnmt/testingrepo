import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutButton() {
    dispatch(logout());
    navigate("/login");
    dispatch(reset());
    // <Navigate to="/login" />;

    // Navigate to login page or reset the state if needed.
  }
  return (
    <aside className="w-64 bg-indigo-800 text-white h-screen p-6 flex flex-col">
      <h2 className="text-3xl font-bold mb-8">Shop</h2>
      <ul className="space-y-6">
        <li>
          <Link
            to="/admin/dashboard"
            className="text-lg hover:text-indigo-300 transition duration-200"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/product"
            className="text-lg hover:text-indigo-300 transition duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/admin/product/create"
            Create
            Product="text-lg hover:text-indigo-300 transition duration-200"
          >
            Customer
          </Link>
        </li>
        <Button onClick={logoutButton} desc={"Logout"} />
      </ul>
    </aside>
  );
}
export default Sidebar;
