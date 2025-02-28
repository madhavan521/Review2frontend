import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DealerContext } from '../../Context/DealerContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Cyclindervisual = () => {
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
    <div className="container-fluid">
      <div className="row">
        <h2 className="text-center my-3">ℂ𝕪𝕝𝕚𝕟𝕕𝕖𝕣 𝕊𝕥𝕒𝕥𝕦𝕤 𝕆𝕧𝕖𝕣𝕧𝕚𝕖𝕨</h2>
        {cylinderData.map(item => {
          const data = {
            labels: ['Full Cylinders', 'Empty Cylinders'],
            datasets: [{
              label: item.cylinder_type,
              data: [item.full_cylinder, item.empty_cylinder],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
              ],
              borderWidth: 1,
            }],
          };

          const options = {
            responsive: true,
            maintainAspectRatio: false, // Allows flexible height on small screens
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          };

          return (
            <div key={item.s_no} className="col-sm-12 col-lg-6 col-md-6">
              <div className="card p-3 mb-3 shadow-sm">
                <h5 className="text-center">{item.cylinder_type}</h5>
                <div style={{ height: '300px' }}>
                  <Bar data={data} options={options} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cyclindervisual;
