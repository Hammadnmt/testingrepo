import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const state = useSelector((state) => state.auth);
  console.log(state);

  return state ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
