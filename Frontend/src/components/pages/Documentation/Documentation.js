import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Sidebar from './SideBar';
import Content from './Content';
import RecommendedVideos from './RecommendedVideos';
import './Documentation.css';

function Documentation() {
  return (
    <div className="documentation">
      <Navbar />
      <div className='body'>
      <Sidebar />
      <Content />
      <RecommendedVideos />

      </div>
    </div>
  );
}

export default Documentation;
