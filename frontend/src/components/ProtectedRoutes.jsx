import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.product);
  console.log(products)
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
