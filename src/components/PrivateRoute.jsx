import { Navigate, useLocation, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = false; // Replace this with your own authentication logic
  const location = useLocation();

  return (
    <Route
      {...rest}
      element={
        isAuth ? (
          <Component />
        ) : (
          <Navigate to="/auth/login" state={{ from: location }} replace />
        )
      }
    />
  );
};

export default PrivateRoute;
