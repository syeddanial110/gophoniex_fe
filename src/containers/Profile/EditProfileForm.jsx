"use client";

import React, { useState } from 'react';

const EditProfileForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    // Add other user fields as necessary
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., API call to update user data
    console.log('User data submitted:', userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other input fields as necessary */}
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfileForm;