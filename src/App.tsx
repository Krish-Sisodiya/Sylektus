import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import AgencyHome from './components/AgencyHome';
import ServicesPage from './components/ServisePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import './index.css';
import TeamPage from './components/TeamPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';
import CursorFollower from './components/CursorFollower';

const PageNotFound: React.FC = () => (
  <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center">
    <h1 className="text-6xl font-extrabold text-accent-purple mb-4">404</h1>
    <p className="text-xl text-gray-400">
      Page Not Found. Go back to <Link to="/" className="text-primary-blue hover:underline">Home</Link>.
    </p>
  </div>
);

function App() {
  return (
    <>
      <CursorFollower />
      <Router>
        <Routes>
          <Route path="/" element={<AgencyHome />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />        
          <Route path="/about" element={<AboutPage />} />      
          <Route path="/careers" element={<CareersPage />} />  
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
