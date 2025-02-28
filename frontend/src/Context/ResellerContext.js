import React, {  createContext, useEffect, useState } from 'react';

const ResellerContext=createContext()

const ResellerContextProvider = ({children}) => {
  const [reseller ,setReseller] = useState([null])

const resellerapi=()=>{
try{
  fetch("https://review2backend.onrender.com/api/auth/reseller/me",
  {
    method:"GET",
   headers: {"Content-Type": "application/json"},
   credentials:"include"
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result);
    setReseller(result)
  })

}
catch(err){
  console.error(err)
}
}  
useEffect(()=>{
 resellerapi()
  },[])

  return (
    <div>
    <ResellerContext.Provider value={{reseller,resellerapi}} >
        {children}
    </ResellerContext.Provider>
      
    </div>
  );
}

export  {ResellerContextProvider,ResellerContext};
