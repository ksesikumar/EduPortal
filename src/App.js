import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './components/Home';
import AssignmentSubmissionForm from './components/AssignmentSubmissionForm';
import AssignmentList from './components/AssignmentList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submit-assignment" element={<AssignmentSubmissionForm/>} />
          <Route path="/my-assignments" element={<AssignmentList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
