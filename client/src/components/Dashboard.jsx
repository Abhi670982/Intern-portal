import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setInternData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <p>Please make sure the backend server is running.</p>
      </div>
    );
  }

  const donationGoal = 20000;
  const progressPercentage = (internData.donations_raised / donationGoal) * 100;

  return (
    <div className="dashboard">
      <div className="card">
        <h2>Welcome, {internData.intern_name}</h2>
        <p>Your referral code is: <strong>{internData.referral_code}</strong></p>
      </div>
      <div className="card">
        <h2>Donation Progress</h2>
        <p>Total donations raised: <strong>${internData.donations_raised}</strong></p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}>
            {Math.round(progressPercentage)}%
          </div>
        </div>
        <p>Goal: ${donationGoal}</p>
      </div>
      <div className="card rewards">
        <h2>Rewards/Unlockables</h2>
        <ul>
          <li>$5000 - Company T-shirt</li>
          <li>$10000 - Company Hoodie</li>
          <li>$20000 - Wireless Headphones</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
