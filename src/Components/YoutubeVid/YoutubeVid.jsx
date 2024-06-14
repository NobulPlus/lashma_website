import React from 'react';
import VideoPlayer from './VideoPlayer';
// import './VideoPlayer.css';

const videoData1 = {
  type: 'youtube',
  url: 'https://youtu.be/DAYL2Jn-0rE',
  title: 'Mrs. Florence Oluwabusayo shares her experience with ILERA EKO',
};

const videoData2 = {
  type: 'other',
  url: 'https://youtu.be/2Syl8MtuKmo', // Replace with your non-YouTube video URL
  title: 'Testimony from ita elewa primary health center igbogbo bayeku LCDA',
};

const videoData3 = {
  type: 'other',
  url: 'https://youtu.be/QsTMZ2dRV9o', // Replace with another non-YouTube video URL
  title: 'Mr  Solomon John shares enconter with ILERA EKO',
};

function App() {
  return (
    <>
    <div className="video-container">
    <div className="title"> 
      <h3>Our Testimonial</h3>
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
