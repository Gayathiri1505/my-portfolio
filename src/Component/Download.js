import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Download = ({ resumeUrl }) => {
  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'src/images/Resume.pdf';
    anchor.click(); 
  };

  return (
    <div className="resume-btn">
      <button onClick={handleDownload}>
        Download Resume <FaFileDownload />
      </button>
    </div>
  );
};

export default Download;
