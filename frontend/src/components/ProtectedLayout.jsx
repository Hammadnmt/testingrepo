// ProtectedLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes"; // Import ProtectedRoute

const ProtectedLayout = () => {
  return (
    <ProtectedRoute>
      <div>
        <h2>Protected Content</h2>
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedLayout;
