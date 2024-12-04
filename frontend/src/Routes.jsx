// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoutes";
import AdminLayout from "./components/AdminLayout";
import CreateProduct from "./components/Products/CreateProduct";
import DeleteProduct from "./components/Products/DeleteProduct";
import UpdateProduct from "./components/Products/UpdateProduct";
import Products from "./pages/products";
// import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}9 9{/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Products />} />
          <Route path="/admin/product/update/:id" element={<UpdateProduct />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
