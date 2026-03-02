import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import YoutubeVid from './Components/layouts/YoutubeVid/YoutubeVid';
import Card from './Components/layouts/Card/Card';
import Break from './Components/layouts/Break/Break';
import Stat from './Components/layouts/Stat/Stat';
import Gmaps from './Components/layouts/GMaps/Gmaps';
import Telemedicine from './Components/layouts/Telemedicine/Telemedicine';
import Programs from './Components/layouts/Programs/Programs';
import Gap from './Components/layouts/Gap/Gap';
import Partner from './Components/layouts/Partner/Partner';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import Plan from './Components/Pages/Plan/Plan';
import ResourcePage from './Components/Pages/Resources/ResoucesPage';
import ZohoChat from './Components/Chatbot/ZohoChat';
import Provider from './Components/Pages/Resources/Provider';
import Maintenance from './Components/Pages/Maintenance/Maintenance';
import Layout from './Components/Layout/Layout';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import MarketingAgent from './Components/Pages/Resources/Marketing-Agent';
import ReactGA from 'react-ga4';
import BlogPage from './Components/Pages/Blog/BlogPage';
import SingleBlogPost from './Components/Pages/Blog/SingleBlogPost';
// import Forum from './Components/Pages/Resources/Forum';
import Cookies from './Components/Pages/Resources/Cookies';
import Privacy from './Components/Pages/Resources/Privacy';
// import ScrollToTop from 'react-scroll-to-top';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  ReactGA.initialize('G-16Y7GXWY2D');
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  })

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={ <Layout /> } >
            <Route index element={ <Home /> } />
            <Route path="youtube" element={ <YoutubeVid /> } />
            <Route path="card" element={ <Card /> } />
            <Route path="break" element={ <Break /> } />
            <Route path="stat" element={ <Stat /> } />
            <Route path="gmaps" element={ <Gmaps /> } />
            <Route path="telemedicine" element={ <Telemedicine /> } />
            <Route path="programs" element={ <Programs /> } />
            <Route path="gap" element={ <Gap /> } />
            <Route path="partner" element={ <Partner /> } />
            <Route path="contact" element={ <Contact /> } />
            <Route path="about" element={ <About /> } />
            <Route path="plan" element={ <Plan /> } />
            <Route path="resources" element={ <ResourcePage /> } />
            <Route path="chatbot" element={ <ZohoChat /> } />
            <Route path="provider" element={ <Provider /> } />
            <Route path="maintenance" element={ <Maintenance /> } />
            <Route path="marketing-agents" element={ <MarketingAgent /> } />
            <Route path="blog" element={ <BlogPage/>}/>
            <Route path="/blog/:id" element={ <SingleBlogPost/>} />
            {/* <Route path="Forum" element={<Forum/>} /> */}
            <Route path='cookies-policy' element={<Cookies/>} />
            <Route path='privacy' element={<Privacy/>} />
            
          </Route>
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
