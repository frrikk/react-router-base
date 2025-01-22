import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";

const DashboardRoute = lazy(() => import("@/pages/dashboard"));
const AuthRoute = lazy(() => import("@/pages/auth"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="dashboard/*" element={<DashboardRoute />} />
      <Route path="auth/*" element={<AuthRoute />} />
    </Routes>
  );
}

export default AppRoutes;
