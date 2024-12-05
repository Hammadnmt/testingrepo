import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoutes";
import AdminLayout from "./components/AdminLayout";
import CreateProduct from "./components/Products/CreateProduct";
import UpdateProduct from "./components/Products/UpdateProduct";
import Products from "./pages/products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<ProtectedRoute />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Products />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route
            path="/admin/product/update/:id/:name/:quantity"
            element={<UpdateProduct />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
