
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Venue from './pages/Venue/Venue';
import HowToGet from './pages/Venue/HowToGet';
import TouristInfo from './pages/Venue/TouristInfo';
import InternationalCommittee from './pages/Committees/InternationalCommittee';
import ScientificCommittee from './pages/Committees/ScientificCommittee';
import LocalCommittee from './pages/Committees/LocalCommittee';
import PlenarySpeakers from './pages/Speakers/PlenarySpeakers';
import InvitedSpeakers from './pages/Speakers/InvitedSpeakers';
import PhDPrize from './pages/Speakers/PhDPrize';
import ProgramOverview from './pages/Program/Overview';
import FullProgram from './pages/Program/FullProgram';
import AbstractBook from './pages/Abstracts/AbstractBook';
import AbstractSubmission from './pages/Abstracts/AbstractSubmission';
import Presentations from './pages/Abstracts/Presentations';
import RegistrationFees from './pages/Registration/RegistrationFees';
import Accommodation from './pages/Registration/Accommodation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Venue */}
            <Route path="/venue/location" element={<Venue />} />
            <Route path="/venue/how-to-get" element={<HowToGet />} />
            <Route path="/venue/tourist-info" element={<TouristInfo />} />
            
            {/* Committees */}
            <Route path="/committees/international" element={<InternationalCommittee />} />
            <Route path="/committees/scientific" element={<ScientificCommittee />} />
            <Route path="/committees/local" element={<LocalCommittee />} />
            
            {/* Speakers */}
            <Route path="/speakers/plenary" element={<PlenarySpeakers />} />
            <Route path="/speakers/invited" element={<InvitedSpeakers />} />
            <Route path="/speakers/phd-prize" element={<PhDPrize />} />
            
            {/* Program */}
            <Route path="/program/overview" element={<ProgramOverview />} />
            <Route path="/program/full" element={<FullProgram />} />
            
            {/* Abstracts */}
            <Route path="/abstracts/book" element={<AbstractBook />} />
            <Route path="/abstracts/submission" element={<AbstractSubmission />} />
            <Route path="/abstracts/presentations" element={<Presentations />} />
            
            {/* Registration */}
            <Route path="/registration/fees" element={<RegistrationFees />} />
            <Route path="/registration/accommodation" element={<Accommodation />} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
