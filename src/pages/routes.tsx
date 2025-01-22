/**
 * @Component AppRoutes initialises the routes for the application, while each page is
 * responsible for its own internal routing.
 * */

//TODO: Implement static rendering of routes to avoid loding states in between switching URLS

import { Route, Routes } from "react-router";
import { routes } from "@/pages/route-config";

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
