import React, { useContext,useEffect ,useState } from 'react';
import {ResellerContext } from '../../Context/ResellerContext'
import profile from '../../Assest/dealerprofile.png'

const YourDealer = () => {
  const {reseller} =useContext(ResellerContext)
  console.log(reseller.MyDealer[0])
  const [dealerdata,setDealerdata]=useState([''])

    useEffect(()=>{
       fetch(`https://review2backend.onrender.com/api/reseller/push/get/${reseller.MyDealer[0]}` ,
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
  return (
<div className="container-fluid d-flex justify-content-center align-items-center my-4">
  <div
    className="card shadow-lg p-5 w-100"
    style={{
      maxWidth: "1200px",
      borderRadius: "12px",
      background: "#ffffff",
    }}
  >
    <h4 className="text-center mb-4  ">𝕄𝕪 𝔻𝕖𝕒𝕝𝕖𝕣</h4>

    <div className="row align-items-center">
      {/* Image Section - Left on Large Screens */}
      <div className="col-lg-6 col-12 text-center text-lg-center mb-3 mb-lg-0">
        <img
          src={profile}
          width="220"
          height="220"
          className="rounded-circle border shadow-sm"
          alt="Profile"
          style={{ objectFit: "cover", border: "5px solid #ddd" }}
        />
      </div>

      <div className="col-lg-6 col-12">
        <div className="p-3 text-lg-start text-center">
          <h5 className="text-dark fw-bold mb-3">
            Username:{" "}
            <span className="text-primary">{dealerdata.username || "N/A"}</span>
          </h5>
          <h5 className="text-dark fw-bold mb-3">
            Full Name:{" "}
            <span className="text-primary">{dealerdata.fullname || "N/A"}</span>
          </h5>
          <h5 className="text-dark fw-bold mb-3">
            Phone Number:{" "}
            <span className="text-primary">
              {dealerdata?.Profile?.[0]?.phoneNo || "N/A"}
            </span>
          </h5>
          <h5 className="text-dark fw-bold mb-3">
            Email:{" "}
            <span className="text-primary">{dealerdata.email || "N/A"}</span>
          </h5>
          <h5 className="text-dark fw-bold mb-3">
            Shop Name:{" "}
            <span className="text-primary">
              {dealerdata?.Profile?.[0]?.shopname || "N/A"}
            </span>
          </h5>
          <h5 className="text-dark fw-bold">
            Location:{" "}
            <span className="text-primary">
              {dealerdata?.Profile?.[0]?.location || "N/A"}
            </span>
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>




  );
}

export default YourDealer;
