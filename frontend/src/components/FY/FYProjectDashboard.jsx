import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectDirectory from './FYProjectDirectory';
import Navbar from './FYNavbar';
import '../styles/Dashboard.css';

const API = process.env.REACT_APP_API_BASE_URL;

const FYProjectDashboard = () => {
  const navigate = useNavigate();

  return (
<div className="admin-dashboard">
  <div className="dashboard-container">
    <div className="dashboard-header">
      <Navbar />
    </div>

    <div className="dashboard-directory">
      <ProjectDirectory />
    </div>
  </div>
</div>

  );
};

export default FYProjectDashboard;
