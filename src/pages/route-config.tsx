import * as React from "react";
import { Navigate } from "react-router";
import { Loading } from "@/components";

const DashboardRoute = React.lazy(() => import("@/pages/dashboard"));
const AuthRoute = React.lazy(() => import("@/pages/auth"));

type Route = {
  path: string;
  element: React.ReactNode;
  navLink?: string;
};

const routes: Route[] = [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loading />}>
        <Navigate to="/dashboard" />
      </React.Suspense>
    ),
  },
  {
    path: "dashboard/*",
    navLink: "Dashboard",
    element: (
      <React.Suspense fallback={<Loading />}>
        <DashboardRoute />
      </React.Suspense>
    ),
  },
  {
    path: "auth/*",
    navLink: "Auth",
    element: (
      <React.Suspense fallback={<Loading />}>
        <AuthRoute />
      </React.Suspense>
    ),
  },
];

export { routes };
export type { Route };
