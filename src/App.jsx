import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import Plan from './Components/Pages/Plan/Plan';
import ResourcePage from './Components/Pages/Resources/ResoucesPage';
import Provider from './Components/Pages/Resources/Provider';
import Maintenance from './Components/Pages/Maintenance/Maintenance';
import Layout from './Components/Layout/Layout';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import MarketingAgent from './Components/Pages/Resources/Marketing-Agent';
import BlogPage from './Components/Pages/Blog/BlogPage';
import SingleBlogPost from './Components/Pages/Blog/SingleBlogPost';
import Cookies from './Components/Pages/Resources/Cookies';
import Privacy from './Components/Pages/Resources/Privacy';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="plan" element={<Plan />} />
          <Route path="resources" element={<ResourcePage />} />
          <Route path="provider" element={<Provider />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="marketing-agents" element={<MarketingAgent />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<SingleBlogPost />} />
          <Route path="cookies-policy" element={<Cookies />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
