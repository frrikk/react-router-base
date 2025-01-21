import React from "react";
import { Route, Routes } from "react-router";

const DashboardRoute = React.lazy(
  () => import("@/pages/dashboard/dashboard-query"),
);

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardRoute />} />
    </Routes>
  );
}

export default AppRoutes;
