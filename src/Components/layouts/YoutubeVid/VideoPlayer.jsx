import React from 'react';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoData }) => {
  const { type, url, title } = videoData;

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300">
      <div className="w-full aspect-video bg-gray-100">
        {type === 'youtube' && (
          <YouTube
            videoId={extractYoutubeId(url)}
            opts={{ width: '100%', height: '100%' }}
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        )}
        {type === 'other' && <ReactPlayer url={url} width="100%" height="100%" />}
      </div>
      <div className="p-5">
        <p className="text-sm font-medium text-gray-700 leading-relaxed m-0">{title}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;

// Helper function to extract YouTube video ID
function extractYoutubeId(url) {
  const regExp =
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|v\/|.+\/v\/))([^&\n?#]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}
