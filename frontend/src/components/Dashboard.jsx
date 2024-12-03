import Button from "./Button";
import LeftPanel from "./LeftPanel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logoutButton() {
    dispatch(logout());
    navigate("/login");
    dispatch(reset());
    // <Navigate to="/login" />;

    // Navigate to login page or reset the state if needed.
  }
  return (
    <>
      <div>Dashboard</div>
      <LeftPanel />
      <Button onClick={logoutButton} desc={"Logout"} />
    </>
  );
};

export default Dashboard;
