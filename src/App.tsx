import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import AgencyHome from './components/AgencyHome';
import ServicesPage from './components/ServisePage'; // NOTE: This should be ServicesPage.tsx
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import './index.css'; 

// --- NEW IMPORTS REQUIRED FOR HEADER LINKS ---
import TeamPage from './components/TeamPage';        
import AboutPage from './components/AboutPage';      
import CareersPage from './components/CareersPage';  
import CursorFollower from './components/CursorFollower'; // <-- NEW: Cursor Follower Import
// ---------------------------------------------


// Simple 404 Page Component
const PageNotFound: React.FC = () => (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold text-accent-purple mb-4">404</h1>
        <p className="text-xl text-gray-400">Page Not Found. Go back to <Link to="/" className="text-primary-blue hover:underline">Home</Link>.</p>
    </div>
);

function App() {
  return (
    // Fragment का उपयोग करके CursorFollower को Router के बाहर रेंडर किया गया है
    <>
        <CursorFollower /> {/* <-- RENDERED GLOBALLY */}
        <Router>
            <Routes>
                <Route path="/" element={<AgencyHome />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* --- NEW ROUTES FROM HEADER --- */}
                <Route path="/team" element={<TeamPage />} />        
                <Route path="/about" element={<AboutPage />} />      
                <Route path="/careers" element={<CareersPage />} />  
                {/* ------------------------------ */}
                
                {/* The 404 Route uses the PageNotFound component */}
                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </Router>
    </>
  );
}


export default App;