
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";
import { checkAuth } from "../../services/api";

export default function ProtectedRoute({ children }: { children: ReactElement }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    checkAuth().then(res => {
      if (mounted) {
        setLoggedIn(res.loggedIn);
        setAuthChecked(true);
      }
    }).catch(() => {
      if (mounted) {
        setLoggedIn(false);
        setAuthChecked(true);
      }
    });
    return () => { mounted = false; };
  }, []);

  if (!authChecked) return null; // or a loading spinner
  if (!loggedIn) return <Navigate to="/login" />;
  return children;
}
