import { Route, Routes } from "react-router-dom";
import AuthQuery from "@/pages/auth/auth-query";

function Auth() {
  return (
    <Routes>
      <Route index element={<AuthQuery />} />
    </Routes>
  );
}

export default Auth;
