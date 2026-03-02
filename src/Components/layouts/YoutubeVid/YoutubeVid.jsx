import React from 'react';
import VideoPlayer from './VideoPlayer';

const videoData1 = {
  type: 'youtube',
  url: 'https://www.youtube.com/shorts/Y0ZaILQDlcU',
  title: 'Moses Chidinma shares her awesome experience since joining LASHMA.',
};

const videoData2 = {
  type: 'youtube',
  url: 'https://www.youtube.com/shorts/PUnMTesyGO0',
  title: 'An excited family applauds LASHMA for free delivery and excellent medical care.',
};

const videoData3 = {
  type: 'youtube',
  url: 'https://www.youtube.com/shorts/d8PCHIRuJME',
  title: 'A wowed beneficiary was amazed by the health services received from LASHMA.',
};

function YoutubeVid() {
  return (
    <section className="bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">What People Are Saying</h2>
          <p className="section-subheading">
            Real stories from real beneficiaries of the ILERA EKO health scheme.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <VideoPlayer videoData={videoData1} />
          <VideoPlayer videoData={videoData2} />
          <VideoPlayer videoData={videoData3} />
        </div>
      </div>
    </section>
  );
}

export default YoutubeVid;
