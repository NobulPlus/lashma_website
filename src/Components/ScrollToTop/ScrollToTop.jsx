import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const mainRoutes = [
    '/',
    '/youtube',
    '/card',
    '/break',
    '/stat',
    '/gmaps',
    '/telemedicine',
    '/programs',
    '/gap',
    '/partner',
    '/contact',
    '/about',
    '/plan',
    '/resources',
    '/chatbot',
    '/provider',
    '/maintenance',
    '/marketing-agents'
  ];

  useEffect(() => {
    if (mainRoutes.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;