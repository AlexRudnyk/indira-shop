import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { SharedLayout } from './SharedLayout';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { AdminPage } from 'pages/AdminPage';
import { AdminRoute } from './Routes/AdminRoute';
// import { PrivateRoute } from './Routes/PrivateRoute';
import { CartPage } from 'pages/CartPage';
import { GoodDetailsPage } from 'pages/GoodDetailsPage';

export const App = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const getCart = value => {
    setCart(value);
  };

  const handleDeleteFromCart = id => {
    const cartAfterDelete = cart.filter(item => item !== id);
    setCart(cartAfterDelete);
    localStorage.setItem('cart', JSON.stringify(cartAfterDelete));
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, user._id]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout cart={cart} />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/" />
            }
          />
          <Route
            path="/admin"
            element={<AdminRoute component={<AdminPage />} redirectTo="/" />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                deleteFromCart={handleDeleteFromCart}
                getCart={getCart}
              />
            }
          />
          <Route
            path="/details/:id"
            element={<GoodDetailsPage cart={cart} getCart={getCart} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
