import React, { lazy } from "react";
import { Route, Routes } from "react-router";

const DashboardRoute = lazy(() => import("@/pages/dashboard"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<DashboardRoute />} />
    </Routes>
  );
}

export default AppRoutes;
