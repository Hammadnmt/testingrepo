import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout, reset } from "../features/auth/authSlice";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutButton() {
    dispatch(logout());
    navigate("/login");
    dispatch(reset());
  }

  return (
    <ul className="flex sm:hidden flex-col gap-2 fixed z-40 top-0 right-0 p-4 bg-gray-800 text-white shadow-lg">
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
        <Button
          onClick={logoutButton}
          desc={"Logout"}
          className="bg-red-500 hover:bg-red-600 transition text-white rounded-md px-4 py-2"
        />
      </li>
    </ul>
  );
}
