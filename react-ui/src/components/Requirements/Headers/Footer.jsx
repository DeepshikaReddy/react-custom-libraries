// // Button.js
// import React from 'react';

// const Footer = ({ label }) => {
//   return <footer>{label}</footer>;
// };

// export default Footer;

import React from 'react';
import './Footer.css'

const Footer = ({ label,color,multiText,secondaryText }) => {

  const footerStyle = {
    backgroundColor: color,
  };

  return (
    <div className= "footer-container" style={footerStyle}>
      <p className="footer-texts">{label}</p>
      {multiText && <p className="footer-subtext">{secondaryText}</p>}
    </div>
  );
};

export default Footer;
