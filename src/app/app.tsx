import * as React from "react";
import { NavLink, Outlet } from "react-router";
import AppRoutes from "@/pages/routes";
import { cn } from "@/utils/cn";

export default function App() {
  return (
    <>
      <header>
        <nav className={cn("flex gap-4")}>
          <NavLink to="dashboard">Dashboard</NavLink>
          <NavLink to="auth">Auth</NavLink>
        </nav>
      </header>
      <main>
        <AppRoutes />
        <Outlet />
      </main>
    </>
  );
}
