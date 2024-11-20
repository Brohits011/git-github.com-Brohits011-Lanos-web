import React, { useEffect, useState } from 'react';
import api from '../../api';
import StudentForm from './StudentForm'; // Import the StudentForm component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students when the component is mounted
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/admin/students', {
        headers: { 'x-auth-token': token },
      });

      // Verify that the response data is an array
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        throw new Error('Unexpected response format.');
      }
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : 'Failed to fetch students. Please try again later.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const deleteStudent = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/admin/students/${id}`, {
        headers: { 'x-auth-token': token },
      });
      setStudents((prevStudents) => prevStudents.filter((student) => student._id !== id));
      toast.success('Student deleted successfully!');
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : 'Failed to delete student. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  // Refresh the student list after adding a student
  const handleStudentAdded = () => {
    fetchStudents();
  };

  if (loading) return <p>Loading students...</p>;
  if (error) return <p style={errorStyle}>{error}</p>;

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Student List</h2>
      {error && <p style={errorStyle}>{error}</p>}

      {/* Student Form */}
      <StudentForm onStudentAdded={handleStudentAdded} />

      <ul style={listStyle}>
        {students.length === 0 && !loading && <p>No students found.</p>}
        {students.map((student) => (
          <li key={student._id} style={listItemStyle}>
            <span>
              <strong>{student.name}</strong> - {student.email}
            </span>
            <button onClick={() => deleteStudent(student._id)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

// Styles for the component
const containerStyle = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: '1.5rem',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  marginTop: '20px',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #ddd',
  marginBottom: '5px',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
};

const deleteButtonStyle = {
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
  fontSize: '14px',
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
};

export default StudentList;
