import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import NavBar from "./NavBar";
import Button from "./Button";
import { useState } from "react";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div className="w-full overflow-visible md:w-64 bg-fuchsia-950 text-white p-6 flex md:flex-col gap-6">
      <h2 className="text-3xl font-bold mb-8">Shop</h2>
      {display ? (
        <NavBar />
      ) : (
        <svg
          onClick={() => setDisplay(true)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="sm:hidden cursor-pointer"
          width="30px"
          height="30px"
          fill="#FFF"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </svg>
      )}

      {/* Sidebar Links */}
      <ul className="hidden sm:flex md:flex-col gap-4 sm:gap-6 text-white items-center md:items-start">
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
            className="text-lg hover:text-indigo-300 transition duration-200"
          >
            Create Product
          </Link>
        </li>
        <li>
          <Button onClick={handleLogout} desc="Logout" />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
