import { Route, Routes } from "react-router";
import DashboardQuery from "@/pages/dashboard/dashboard-query";

function Dashboard() {
  return (
    <Routes>
      <Route index element={<DashboardQuery />} />
    </Routes>
  );
}

export default Dashboard;
