import React, { useContext } from 'react';
import { DealerContext } from '../../Context/DealerContext';


const CylinderAvaliability = () => {  
    const { dealer } = useContext(DealerContext);   
    console.log(dealer.TotalCylinder);  
  
    const cylinderData = dealer.TotalCylinder.length > 0 ? [  
      {  
          s_no: 1,  
          cylinder_type: '5 kg Cylinder',  
          full_cylinder: dealer.TotalCylinder[0].DealerCylinder5kg[0]?.fullCylinder || 0,  
          empty_cylinder: dealer.TotalCylinder[0].DealerCylinder5kg[0]?.emptyCylinder || 0,  
      },  
      {  
          s_no: 2,  
          cylinder_type: '14 kg Cylinder',  
          full_cylinder: dealer.TotalCylinder[0].DealerCylinder14kg[0]?.fullCylinder || 0,  
          empty_cylinder: dealer.TotalCylinder[0].DealerCylinder14kg[0]?.emptyCylinder || 0,  
      },  
      {  
          s_no: 3,  
          cylinder_type: '17 kg Cylinder',  
          full_cylinder: dealer.TotalCylinder[0].DealerCylinder17kg[0]?.fullCylinder || 0,  
          empty_cylinder: dealer.TotalCylinder[0].DealerCylinder17kg[0]?.emptyCylinder || 0,  
      },  
      {  
          s_no: 4,  
          cylinder_type: '19 kg Cylinder',  
          full_cylinder: dealer.TotalCylinder[0].DealerCylinder19kg[0]?.fullCylinder || 0,  
          empty_cylinder: dealer.TotalCylinder[0].DealerCylinder19kg[0]?.emptyCylinder || 0,  
      },
      {  
          s_no: 5,  
          cylinder_type: '21 kg Cylinder',  
          full_cylinder: dealer.TotalCylinder[0].DealerCylinder21kg[0]?.fullCylinder || 0,  
          empty_cylinder: dealer.TotalCylinder[0].DealerCylinder21kg[0]?.emptyCylinder || 0,  
      },  
      {  
          s_no: 6,  
          cylinder_type: '45 kg Cylinder',  
          full_cylinder: dealer.TotalCylinder[0].DealerCylinder45kg[0]?.fullCylinder || 0,  
          empty_cylinder: dealer.TotalCylinder[0].DealerCylinder45kg[0]?.emptyCylinder || 0,  
      }  
  ] : []; 

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
                                    </tr>  
                                </thead>  
                                <tbody>  
                                    {cylinderData.map(item =>  
                                        <tr className='table-hover' key={item.s_no}>  
                                            <td className='fw-bold'>{item.s_no}</td>  
                                            <td className="fw-bold">{item.cylinder_type}</td>  
                                            <td className="fw-bold text-success">{item.full_cylinder}</td>  
                                            <td className="fw-bold text-danger">{item.empty_cylinder}</td>  
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

export default CylinderAvaliability;