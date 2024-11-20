import React, { useState } from 'react';
import api from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentForm = ({ onStudentAdded }) => {
  const [formData, setFormData] = useState({ name: '', email: '', age: '', enrolledCourses: [] });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('No authentication token found.');
      return;
    }
    
    setLoading(true);

    try {
      await api.post('/admin/students', formData, {
        headers: { 'x-auth-token': token },
      });
      onStudentAdded();  // Notify parent component that a student was added
      setFormData({ name: '', email: '', age: '', enrolledCourses: [] });  // Clear form after submission
      toast.success('Student added successfully!');
    } catch (err) {
      const errorMessage = err?.response?.data?.message || 'Failed to add student. Please try again.';
      const errorToast = err?.response?.data?.message === 'Student with this email already exists.' 
        ? 'Student with this email already exists.'
        : errorMessage;
      toast.error(errorToast);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={{ textAlign: 'center' }}>Add New Student</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter student's name"
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            placeholder="Enter student's email"
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            placeholder="Enter student's age"
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <button type="submit" style={submitButtonStyle} disabled={loading}>
          {loading ? 'Adding...' : 'Add Student'}
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

// Styles for the form and its elements
const formContainerStyle = {
  maxWidth: '400px',
  margin: '20px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  outline: 'none',
};

const submitButtonStyle = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default StudentForm;
