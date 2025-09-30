import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
