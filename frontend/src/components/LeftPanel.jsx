/* eslint-disable no-unused-vars */
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../features/auth/authSlice";
function Sidebar() {
  const navigate = useNavigate();
  const [logoutUser, { isError, isLoading, isSuccess }] =
    useLogoutUserMutation();
  async function logoutButton() {
    await logoutUser();
    if (isSuccess) {
      navigate("/login");
    }
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
        <Button onClick={logoutButton} desc={"Logout"} />
      </ul>
    </aside>
  );
}
export default Sidebar;
