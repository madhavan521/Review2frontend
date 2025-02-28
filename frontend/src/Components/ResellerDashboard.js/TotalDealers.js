import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import { FaUserCircle } from 'react-icons/fa'; 

const TotalDealers = () => {
    const [dealerdata ,setDealerdata]=useState([])
      useEffect(()=>{
         fetch('https://review2backend.onrender.com/api/reseller/push/get' ,
       {   method:"GET",
        headers:{
          "Content-Type":"application/json"  

        },
        credentials:"include"
       })
       .then(res=>res.json())
       .then(result => {
        console.log(result);
        setDealerdata(result)
       })
      },[])


      console.log(dealerdata)
  return (
    <div className="container py-4">
    <h3 className="text-center fw-bold text-uppercase text-dark mb-4">
      🚀 𝔻𝕖𝕒𝕝𝕖𝕣𝕤 ℍ𝕦𝕓
    </h3>

    <div className="row justify-content-center">
      {Array.isArray(dealerdata) &&
        dealerdata.map((user) => (
          <div key={user._id} className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <Link to="/reseller" className="text-decoration-none">
              <div
                className="card border-0 shadow-lg text-center p-3"
                style={{
                  borderRadius: "12px",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <FaUserCircle
                  size={65}
                  className="text-primary mb-3"
                  style={{ display: "block", margin: "0 auto" }}
                />
                <h5 className="mb-2 text-dark">
                  <strong>Username:</strong> <span className="text-primary">{user.username}</span>
                </h5>
                <p className="mb-1">
                  <strong className="text-dark">Fullname:</strong> <span className="text-primary">{user.fullname}</span>
                </p>
                <p className="mb-0">
                  <strong className="text-dark">Location:</strong> <span className="text-primary">{user.Profile[0]?.location || "N/A"}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  </div>
  );
}

export default TotalDealers;
