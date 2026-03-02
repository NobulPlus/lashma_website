import React from 'react';
import Forum from '../../../assets/images/Forum.jpg';

const ForumT = () => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a
        href="https://shorturl.at/Ilc1m"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        }}
      >
        <img
          src={Forum}
          alt="Forum"
          style={{
            width: '500px',
            height: '500px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </a>
    </div>
  );
};

export default ForumT;