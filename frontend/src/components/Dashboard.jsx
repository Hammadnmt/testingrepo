import Button from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutButton() {
    dispatch(logout());
    // Navigate to login page or reset the state if needed.
    navigate("/login");
  }
  return (
    <>
      <div>Dashboard</div>
      <Button onClick={logoutButton} desc={"Logout"} />
    </>
  );
};

export default Dashboard;
