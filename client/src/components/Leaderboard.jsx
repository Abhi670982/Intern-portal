import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [internData, setInternData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern')
      .then((res) => res.json())
      .then((data) => setInternData(data));
  }, []);

  const leaderboardData = [
    { name: 'John Doe', donations: 15000 },
    { name: 'Jane Smith', donations: 13500 },
    { name: 'Abhi Chauhan', donations: 12000 },
    { name: 'Emily Jones', donations: 11000 },
    { name: 'Michael Brown', donations: 9500 },
  ];

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index} className={internData && user.name === internData.intern_name ? 'current-user' : ''}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>${user.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
