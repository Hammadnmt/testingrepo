// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateProduct from "./components/Products/CreateProduct";
import DeleteProduct from "./components/Products/DeleteProduct";
import UpdateProduct from "./components/Products/UpdateProduct";
import App from "./App";
import Products from "./pages/products";
import ProtectedRoute from "./components/ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}9 9{/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/delete" element={<DeleteProduct />} />
      </Route>
      <Route path="/product/update/:id" element={<UpdateProduct />} />
    </Routes>
  );
};

export default AppRoutes;
