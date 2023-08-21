import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const AdminRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing, user } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && user.role !== 'admin';
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
