import React from 'react';
import { FaFacebook ,FaTwitter,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
        <p>Contact Us: info@cylinderdealer.com</p>
        <div>
          <a href="#" className="text-white mx-2"><FaFacebook size={30} /></a>
          <a href="#" className="text-white mx-2"><FaTwitter size={30} /></a>
          <a href="#" className="text-white mx-2"><FaLinkedin size={30} /></a>
        </div>
        <p className='my-3'>&copy; 2025 Cylinder Dealer. All rights reserved.</p>
      </footer>

  );
}

export default Footer;
