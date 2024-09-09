import React from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoData }) => {
  const { type, url, title } = videoData;

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
      <div className="w-full">
        {type === 'youtube' && (
          <YouTube videoId={extractYoutubeId(url)} opts={{ width: '100%', height: '200px' }} />
        )}
        {type === 'other' && <ReactPlayer url={url} width="100%" height="200px" />}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-medium">{title}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;

// Helper function to extract YouTube video ID
function extractYoutubeId(url) {
  const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\/v\/))([^&\n?#]+)/;
  const match = url.match(regExp);
  return match && match[1];
}
