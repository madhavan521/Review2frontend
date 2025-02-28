import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { ResellerContext } from '../Context/ResellerContext';
import { DealerContext } from '../Context/DealerContext';

const Navbar = () => {
  const [data ,setData]=useState("Profile")
  const [page,setPage]=useState('/')
  const [navigate ,setNavigate] =useState("/profile")
   const {reseller} =useContext(ResellerContext)
   const {dealer} =useContext(DealerContext)
  useEffect(() => {
        if (dealer?.fullname == null && reseller?.fullname == null) {
          setData('Login');
          setNavigate('/login')
          setPage('/')
        } 
         else if (dealer?.fullname == null)
           {
        setPage('/reseller'); 
        setData('Profile');
        setNavigate('/profile')
      } 
      else if (reseller?.fullname == null) {
        setPage('/dealer'); 
        setData('Profile');
        setNavigate('/profile')
        
      }else {  
          setData('Profile'); 
          setNavigate('/profile')
        }
      }, [reseller, dealer]);


      
      
   
  

  return (
   <div className="container-fluid">
   <div className="row">
    <div className="col-9">
    <div className='m-4'>
<Link to={page} className='text-decoration-none'><h2 className='text-dark title glowing'>𝔾ℍ𝔸ℕ𝕋 𝔹𝕆𝕆𝕂</h2>
    </Link></div></div>
    <div className="col-3">
    <div className='d-flex justify-content-end align-item-end m-2 '>
      <Link  to={navigate} className='text-decoration-none'> <button className="loginButton">
       {data}
      </button></Link>
    </div>
     
    </div>
  </div>


   
    </div>
  );
}

export default Navbar;
