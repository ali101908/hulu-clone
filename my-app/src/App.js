import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route component
import HomePage from './components/home/home'; // Import HomePage component
import LoginPage from './components/home/login-page/login';
import Bundle from './components/bundle-pages/bundle';

import PlanAndPricing from './components/plans-and-pricing/plan-and-pricing';
import Premium from './components/premium-bundle/premium';
import Hulu from './components/hulu-bundle/hulu';
import Max from './components/max-bundle/max';
import StudentBundle from './components/student-bundle/student-bundle';
import TvShows from './components/tv-shows/tv-shows'
import './assets/component.module.css/component.module.css'


const App = () => {
  return (

    
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/basic-bundles" element={<Bundle />} />
      <Route path="/premium-bundle" element={<Premium />} />
      <Route path="/hulu-bundle" element={<Hulu />} />
      <Route path="/max-bundle" element={<Max />} />
      <Route path="/discount-bundle" element={<StudentBundle />} />
      <Route path="/plan-and-pricing" element={<PlanAndPricing />} />
      <Route path="/tv-shows" element={<TvShows />} />
        {/* Define the route for login page */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
