import React, { useState, useEffect } from 'react';
import './Table.css'; // Import the CSS file

const Table = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        if (data && data.users) {
          setUsers(data.users);
        } else {
          console.error('Data is not in the expected format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-table-container">
      <h2>Dummy Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Picture</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img src={user.image} alt="Profile" className="profile-img" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;