import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);
  for (const key in user) {
    console.log(user[key]);
  }
  return user ? (
    user.role == "Admin" ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
