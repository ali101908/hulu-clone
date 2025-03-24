import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route component
import HomePage from './components/home/home'; // Import HomePage component
import LoginPage from './components/home/login-page/login';
import Bundle from './components/bundle-pages/bundle';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Bundles" element={<Bundle />} />
        {/* Define the route for login page */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
