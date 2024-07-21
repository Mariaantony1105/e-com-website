import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import SignupPage from './components/SignUp';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Mainhome/Home';
import Admin from './admin/Admin';
import User from './user/User';
import ErrorPage from './ErrorPage ';

const App = () => {
  const location = useLocation();
  
  // Determine if the current route is admin route
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isUserRoute = location.pathname.startsWith('/user');

  return (
    <>
      {!isAdminRoute && !isUserRoute && <AppBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} /> {/* Wildcard route for error page */}
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
