import React from 'react';
import {Link} from 'react-router-dom'
 const Header = () => {
  return (
    <section className="my-4  d-flex align-items-center justify-content-center" >
      <div className="hero-overlay"></div>
      <div className="container text-center">
   <h1 className="display-4 font-weight-bold animated fadeIn">𝕄𝕒𝕟𝕒𝕘𝕖 ℂ𝕪𝕝𝕚𝕟𝕕𝕖𝕣𝕤 𝕨𝕚𝕥𝕙 𝔼𝕒𝕤𝕖</h1>

       <p className="lead animated fadeIn">Monitor inventory, track expenses, and generate sales reports effortlessly.</p>
        
       <Link  to='/login' className="text-decoration-none align-item-center d-flex justify-content-center"><button
          className="mt-3 loginButton" >
          Get Started
        </button></Link>
      </div>
  
    </section>
  );
};

export default Header;
