import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Suspense } from 'react';

export const SharedLayout = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
