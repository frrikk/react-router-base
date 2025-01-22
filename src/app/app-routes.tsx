import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";

const DashboardRoute = lazy(() => import("@/pages/dashboard"));
const AuthRoute = lazy(() => import("@/pages/auth"));

/**
 * @Component AppRoutes initialises the routes for the application, while each page is
 * responsible for its own internal routing.
 * */

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route
        path="dashboard/*"
        element={
          <Suspense fallback={<Loading />}>
            <DashboardRoute />
          </Suspense>
        }
      />
      <Route
        path="auth/*"
        element={
          <Suspense fallback={<Loading />}>
            <AuthRoute />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;

const Loading = () => <div>Loading..</div>;
