import React, {  createContext, useEffect, useState } from 'react';

const DealerContext=createContext()

const DealerContextProvider = ({children}) => {
  const [dealer ,setDealer] = useState(null)

  const dealerapi=()=>{
    try{
  fetch("https://review2backend.onrender.com/api/auth/dealer/me",
  {
    method:"GET",
   headers: {"Content-Type": "application/json"},
   credentials:"include"
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result);
    setDealer(result)
  })

}
catch(err){
  console.error(err)
}
  }
useEffect(()=>{
  dealerapi()
  },[])

  return (
    <div>
    <DealerContext.Provider value={{dealer,dealerapi}} >
        {children}
    </DealerContext.Provider>
      
    </div>
  );
}

export  {DealerContextProvider,DealerContext};
