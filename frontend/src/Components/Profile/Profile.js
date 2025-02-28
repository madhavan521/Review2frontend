import React, { useContext, useState } from 'react';  
import { ResellerContext } from '../../Context/ResellerContext';  
import Profile from '../../Assest/profile.png'; 
import { DealerContext } from '../../Context/DealerContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ResellerProfile = () => {  
  const { reseller } = useContext(ResellerContext);  
  const {dealer } = useContext(DealerContext)
  const navigate = useNavigate()

   const handleLogout=()=>{
    try{
      fetch('https://review2backend.onrender.com/api/auth/reseller/logout' || "https://review2backend.onrender.com/api/auth/dealer/logout",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        credentials:"include"
      })
      .then(res=>{
        console.log("Logout Successfully")
        toast.success("Logout Successfully")
        setTimeout(() => {
          navigate('/')
          window.location.reload()
          
        }, 1500);
      })

    }
    catch(err){
      console.error(err)
      toast.error(err.message)
    }
   }


  return (  
    <div className="container d-flex justify-content-center align-items-center">
  <div className="row my-5 card p-4">
    <div className="d-flex justify-content-center align-items-center">
      <img src={Profile} alt="Profile" height="150px" width="150px" />
    </div>
    <div className="m-2">
      <p className="text-center my-3 text-primary">
        <strong className="text-dark">Username:</strong> {dealer?.username || reseller?.username || "N/A"}
      </p>
      <p className="text-center my-3 text-primary">
        <strong className="text-dark">Email:</strong> {dealer?.email || reseller?.email || "N/A"}
      </p>
      <p className="text-center my-3 text-primary">
        <strong className="text-dark">Mobile Number:</strong> {dealer?.Profile?.[0]?.phone || reseller?.Profile?.[0]?.phone || "N/A"}
      </p>
      <p className="text-center my-3 text-primary">
        <strong className="text-dark">Location:</strong> {dealer?.Profile?.[0]?.location || reseller?.Profile?.[0]?.location || "N/A"}
      </p>
      <p className="text-center my-3 text-primary">
        <strong className="text-dark">Shop Name:</strong> {dealer?.Profile?.[0]?.shopname || reseller?.Profile?.[0]?.shopname || "N/A"}
      </p>

      <div className="d-flex justify-content-center">
        <button className="btn text-light loginButton">Update Profile</button>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button className="btn text-light loginButton" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </div>
</div>
  
  );  
};  

export default ResellerProfile;