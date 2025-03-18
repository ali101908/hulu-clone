import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Route component
import HomePage from './components/home/home'; // Import HomePage component

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        {/* Define the route for login page */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
