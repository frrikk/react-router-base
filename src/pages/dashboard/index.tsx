import { Route, Routes } from "react-router-dom";
import DashboardAuth from "@/pages/dashboard/auth/dashboard-auth";
import DashboardQuery from "@/pages/dashboard/dashboard-query";

function Dashboard() {
  return (
    <Routes>
      <Route path="dashboard">
        <Route index element={<DashboardQuery />} />
        <Route path="auth" element={<DashboardAuth />} />
      </Route>
    </Routes>
  );
}

export default Dashboard;
