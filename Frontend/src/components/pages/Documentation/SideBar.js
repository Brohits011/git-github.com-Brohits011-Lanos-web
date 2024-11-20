import React from 'react';
import './SideBar.css';

function Sidebar() {
  const topics = [
    'HTML Home', 'HTML Introduction', 'HTML Editors', 'HTML Basic',
    'HTML Elements', 'HTML Heading', 'HTML Paragraph', 'HTML Styles',
    'HTML Formatting', 'HTML Quotations', 'HTML Comments', 'HTML Colors',
    'HTML CSS', 'HTML Links', 'HTML Image', 'HTML Favicon', 'HTML Page Title',
  ];

  return (
    <div className="sidebar">
      <h3>HTML tutorial</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
