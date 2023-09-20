// // Button.js
// import React from 'react';

// const Footer = ({ label }) => {
//   return <footer>{label}</footer>;
// };

// export default Footer;

import React from 'react';
import './Footer.css'

const Footer = ({ label,color }) => {

  const footerStyle = {
    backgroundColor: color,
  };

  return (
    <footer className= "footer-container" style={footerStyle}>
      <p className="footer-texts">{label}</p>
    </footer>
  );
};

export default Footer;
