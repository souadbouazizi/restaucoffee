import React from 'react';
// Importation des icônes spécifiques depuis react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <h3 className='w-100'>Follow us<br /></h3> 
      <div className='d-flex gap-2 justify-content-center '>
      <br />
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      </div>
    </div>
  );
};

export default SocialLinks;
