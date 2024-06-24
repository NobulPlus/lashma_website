import React from 'react'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

const VideoPlayer = ({ videoData }) => {
  // Destructure video data (assuming properties like type, url, and title)
  const { type, url, title } = videoData;

  return (
    <div className="video-player">
      <div className="video-container"> {/* Wrap video in container */}
        {type === 'youtube' && (
          <YouTube videoId={extractYoutubeId(url)} opts={{ width: '100%', height:'200px' }} /> // Set width to 33.33% for 3 videos
        )}
        {type === 'other' && <ReactPlayer url={url} width="100%" height="200px" />}   
      </div>    
        <div className="title-container">
            <p>{title}</p>
        </div>
    </div>
  );
};

export default VideoPlayer;

// Helper function to extract YouTube video ID
function extractYoutubeId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/v\/))([^\s\?&]+)/;
  const match = url.match(regExp);
  return match && match[5];
}
