import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// ── Homepage is eagerly loaded: highest priority, zero delay ──
import Home from './Components/Home/Home';

// ── All other pages are lazy: downloaded only when first visited ──
const Contact      = lazy(() => import('./Components/Pages/Contact/Contact'));
const About        = lazy(() => import('./Components/Pages/About/About'));
const Plan         = lazy(() => import('./Components/Pages/Plan/Plan'));
const ResourcePage = lazy(() => import('./Components/Pages/Resources/ResoucesPage'));
const Provider     = lazy(() => import('./Components/Pages/Resources/Provider'));
const Maintenance  = lazy(() => import('./Components/Pages/Maintenance/Maintenance'));
const MarketingAgent = lazy(() => import('./Components/Pages/Resources/Marketing-Agent'));
const BlogPage     = lazy(() => import('./Components/Pages/Blog/BlogPage'));
const SingleBlogPost = lazy(() => import('./Components/Pages/Blog/SingleBlogPost'));
const Cookies      = lazy(() => import('./Components/Pages/Resources/Cookies'));
const Privacy      = lazy(() => import('./Components/Pages/Resources/Privacy'));
const PageNotFound = lazy(() => import('./Components/Pages/PageNotFound/PageNotFound'));

import Layout       from './Components/Layout/Layout';
import ScrollToTop  from './Components/ScrollToTop/ScrollToTop';
import PageLoader   from './Components/Preloader/PageLoader';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/*
        Suspense fallback fires only when a lazy chunk is still downloading.
        Home never triggers it — it's always in the main bundle.
      */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact"          element={<Contact />} />
            <Route path="about"            element={<About />} />
            <Route path="plan"             element={<Plan />} />
            <Route path="resources"        element={<ResourcePage />} />
            <Route path="provider"         element={<Provider />} />
            <Route path="maintenance"      element={<Maintenance />} />
            <Route path="marketing-agents" element={<MarketingAgent />} />
            <Route path="blog"             element={<BlogPage />} />
            <Route path="blog/:id"         element={<SingleBlogPost />} />
            <Route path="cookies-policy"   element={<Cookies />} />
            <Route path="privacy"          element={<Privacy />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
