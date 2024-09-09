import React from 'react';
import VideoPlayer from './VideoPlayer';

const videoData1 = {
  type: 'youtube',
  url: 'https://youtu.be/DAYL2Jn-0rE',
  title: 'Mrs. Florence Oluwabusayo shares her experience with ILERA EKO',
};

const videoData2 = {
  type: 'youtube',
  url: 'https://youtu.be/2Syl8MtuKmo',
  title: 'Testimony from ita elewa primary health center igbogbo bayeku LCDA',
};

const videoData3 = {
  type: 'youtube',
  url: 'https://youtu.be/QsTMZ2dRV9o',
  title: 'Mr. Solomon John shares encounter with ILERA EKO',
};

function App() {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoPlayer videoData={videoData1} />
          <VideoPlayer videoData={videoData2} />
          <VideoPlayer videoData={videoData3} />
        </div>
      </div>
    </>
  );
}

export default App;
