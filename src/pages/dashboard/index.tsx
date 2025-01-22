import { Route, Routes } from "react-router-dom";
import ChildRoute from "@/pages/dashboard/child/child-route";
import DashboardQuery from "@/pages/dashboard/dashboard-query";

function Dashboard() {
  return (
    <Routes>
      <Route index element={<DashboardQuery />} />
      <Route path="child-route" element={<ChildRoute />} />
    </Routes>
  );
}

export default Dashboard;
