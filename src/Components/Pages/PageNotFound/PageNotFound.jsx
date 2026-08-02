import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logo from '../../../assets/lashma-logo.png';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-[#f8f9fc]">
      <Helmet>
        <title>Page Not Found | LASHMA</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <img src={logo} alt="LASHMA" className="h-14 w-auto mb-8" />

      <p
        className="text-7xl sm:text-8xl font-extrabold font-heading leading-none"
        style={{ color: '#f28201', letterSpacing: '-0.04em' }}
      >
        404
      </p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-[#1a1a2e] font-heading text-center">
        Page not found
      </h1>
      <p className="mt-3 text-[#4a4a68] text-center max-w-md">
        The page you are looking for does not exist or has been moved. Head back home or explore our health plans.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full text-white font-semibold text-sm no-underline transition-all hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(to right, #f28201, #f59e0b)' }}
        >
          Go Home
        </Link>
        <Link
          to="/plan"
          className="inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-sm no-underline transition-all hover:-translate-y-0.5"
          style={{ color: '#d97306', background: '#fef3e2', border: '1px solid rgba(242,130,1,0.2)' }}
        >
          View Health Plans
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
