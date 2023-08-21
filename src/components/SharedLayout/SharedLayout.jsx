import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Suspense } from 'react';

export const SharedLayout = ({ count }) => {
  return (
    <>
      <Header count={count} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
