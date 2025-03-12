import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLayout() {
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //   // If the user is already logged in, redirect to home
  //   if (isAuthenticated) {
  //     return <Navigate to="/home" />;
  //   }

  return (
    <div className="auth-container">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
