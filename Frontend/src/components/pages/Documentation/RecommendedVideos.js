import React from 'react';
import './RecommendedVideos.css';
import RecomVideo1 from '../../../assets/Screenshot 2024-04-29 142230 1.png';

function RecommendedVideos() {
  const videos = [
    {
      title: 'HTML Boilerplate',
      views: '1.1k Views',
      duration: '3:15 minutes',
      thumbnail: RecomVideo1,
    },
    {
      title: 'HTML Introduction',
      views: '88k Views',
      duration: '3:14 minutes',
      thumbnail: 'html-introduction-thumbnail.jpg',
    },
  ];

  return (
    <div className="recommended-videos">
      <h2>Recommended Videos</h2>
      <div className="video-list">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.views}</p>
              <p>{video.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
