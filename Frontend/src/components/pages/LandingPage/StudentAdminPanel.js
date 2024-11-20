import React, { useState } from 'react';
import './StudentAdminPanel.css'; // Import the CSS file for styling

function StudentAdminPanel() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', course: 'Computer Science', date: 'March 1, 2023' },
    { id: 2, name: 'Brian Smith', course: 'Biology', date: 'April 15, 2023' },
    { id: 3, name: 'Catherine Lee', course: 'Mathematics', date: 'January 20, 2023' },
  ]);

  const handleEdit = (id) => {
    // Handle edit logic here
    console.log('Edit student with ID:', id);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>StudentAdminPanel</h1>
        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#students">Students</a>
          <a href="#settings">Settings</a>
        </nav>
      </header>
      
      <main>
        <h2>Student List</h2>
        <div className="search-add-container">
          <input type="text" placeholder="Search..." />
          <button className="add-student-btn">Add Student</button>
        </div>
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course Enrolled</th>
              <th>Date of Enrollment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.date}</td>
                <td>
                  <button onClick={() => handleEdit(student.id)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(student.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="admin-footer">
        <p>&copy; 2023 StudentAdminPanel. All rights reserved.</p>
        <nav>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
}

export default StudentAdminPanel;
