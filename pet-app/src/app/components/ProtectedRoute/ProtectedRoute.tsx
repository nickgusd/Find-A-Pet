/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const ProtectedRoute = ({ children }: any) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading,
    user = {},
  } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, user]);
  return children;
};
