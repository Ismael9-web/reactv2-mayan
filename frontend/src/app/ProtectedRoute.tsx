import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import type { ReactElement } from "react";

export default function ProtectedRoute({ children }: { children: ReactElement }) {
  const token = Cookies.get("authToken") || Cookies.get("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
