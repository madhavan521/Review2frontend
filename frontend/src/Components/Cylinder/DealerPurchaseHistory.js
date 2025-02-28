import React, { useContext } from 'react';
import { DealerContext } from '../../Context/DealerContext';

const DealerPurchaseHistory = () => {

 const {dealer}=useContext(DealerContext)

 const cylinderData = dealer?.PurchaseCylinder
 console.log(cylinderData)


  return (
    <div className='mt-2'>  
    <h3 className='text-center my-3'>ℂ𝕪𝕔𝕝𝕚𝕟𝕕𝕖𝕣 𝔸𝕧𝕒𝕝𝕒𝕓𝕚𝕝𝕚𝕥𝕪</h3>  
    <div className="container card">  
        <div className="row">  
            {cylinderData.length > 0 ? (  
                <div className='table-responsive '>  
                    <table className='table mt-2  table-striped table-bordered'>  
                        <thead className='table-head'>  
                            <tr className=' bg-dark text-light'>  
                                <th className='bg-dark text-light'>S.No</th>  
                                <th  className='bg-dark text-light'>Cylinder Type</th>  
                                <th  className='bg-dark text-light'>Full Cylinder</th>  
                                <th  className='bg-dark text-light'>Empty Cylinder</th>  
                                <th  className='bg-dark text-light'>Date</th>  
                                <th  className='bg-dark text-light'>Time</th> 
                            </tr>  
                        </thead>  
                        <tbody>  
                            {cylinderData.map((item,index)=>  
                                <tr className='table-hover' key={item._id}>  
                                    <td className='fw-bold'>{index+1}</td>  
                                    <td className="fw-bold">{item.purchasecylinderType}</td>  
                                    <td className="fw-bold text-success">{item.purchaseemptyCylinder}</td>  
                                    <td className="fw-bold text-danger">{item.purchasefullCylinder}</td> 
                                    <td className="fw-bold ">{item.purchaseDate}</td> 
                                    <td className="fw-bold">{item.purchaseTime}</td>  
                                </tr>  
                            )}  
                        </tbody>  
                    </table>  
                </div>  
            ) : (<h3>No Cylinder Available</h3>) }  
        </div>  
    </div>  
</div>  
  );
}

export default DealerPurchaseHistory;
