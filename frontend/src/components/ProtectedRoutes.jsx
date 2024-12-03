import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // const user = useSelector((state) => state.auth);
  // console.log(user);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return user ? (
    user.role == "Admin" ? (
      // <Navigate to={"/dashboard"} />
      <Outlet />
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
