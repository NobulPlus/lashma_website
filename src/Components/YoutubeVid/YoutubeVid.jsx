import React from 'react';
import VideoPlayer from './VideoPlayer';
// import './VideoPlayer.css';

const videoData1 = {
  type: 'youtube',
  url: 'https://youtu.be/cLRztK1zE6s?si=S29-7t-x_wU8YFu3',
  title: 'Video Title 1',
};

const videoData2 = {
  type: 'other',
  url: 'https://www.youtube.com/watch?v=mIZDZIqdR7Y&t=129s', // Replace with your non-YouTube video URL
  title: 'Video Title 2',
};

const videoData3 = {
  type: 'other',
  url: 'https://www.youtube.com/watch?v=mIZDZIqdR7Y&t=129s', // Replace with another non-YouTube video URL
  title: 'Video Title 3',
};

function App() {
  return (
    <>
    <div className="video-container">
    <div className="title"> 
      <h2>Our Testimonial</h2>
    </div>
    <div className="video-content">
      <VideoPlayer videoData={videoData1} />
      <VideoPlayer videoData={videoData2} />
      <VideoPlayer videoData={videoData3} />
    </div>
    </div>
    {/* <div className="margin"></div> */}
    </>
  );
}

export default App;
