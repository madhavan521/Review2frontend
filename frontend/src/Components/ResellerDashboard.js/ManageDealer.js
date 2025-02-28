import React, { useContext } from 'react';  
import SelectDealer from './SelectDealer';  
import YourDealer from './YourDealer';  
import { ResellerContext } from '../../Context/ResellerContext';  

const ManageDealer = () => {  
  const { reseller } = useContext(ResellerContext);  

  const myDealerExists = Array.isArray(reseller.MyDealer) && reseller.MyDealer.length > 0;  

  return (  
    <div>  
      {myDealerExists ? (  
         <YourDealer /> 
      ) : (  
        <SelectDealer />  
      )}  
    </div>  
  );  
}  

export default ManageDealer;