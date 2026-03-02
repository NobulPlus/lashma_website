import React from 'react';

const Gmaps = () => {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">Find Us</span>
          <h2 className="section-heading">Our Healthcare Network</h2>
          <p className="section-subheading">
            Locate ILERA EKO care providers across Lagos State
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-card border border-gray-100 bg-white">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1pUzoXzW-59hgwo7UUjUaT8_5tp-_Zlk&hl=en&ehbc=2E312F&z=10&ll=6.5244,3.3792"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            title="ILERA EKO Care Providers Map"
          />
        </div>
      </div>
    </section>
  );
};

export default Gmaps;
