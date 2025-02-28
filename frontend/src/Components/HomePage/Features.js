import React from 'react';
import { FaTachometerAlt, FaUsers, FaBox, FaChartLine } from 'react-icons/fa'; // Importing React Icons

const Features = () => {
  const features = [
    {
      title: "Dealer Dashboard",
      description: "Manage resellers and track cylinder stock and sales.",
      icon: <FaTachometerAlt size={40} className="text-primary" /> // Icon for Dealer Dashboard
    },
    {
      title: "Reseller Dashboard",
      description: "Track your customers, sales, and expenses.",
      icon: <FaUsers size={40} className="text-success" /> // Icon for Reseller Dashboard
    },
    {
      title: "Inventory Management",
      description: "Real-time tracking of cylinder stock levels.",
      icon: <FaBox size={40} className="text-warning" /> // Icon for Inventory Management
    },
    {
      title: "Sales Reporting",
      description: "Generate detailed reports on sales performance.",
      icon: <FaChartLine size={40} className="text-info" /> // Icon for Sales Reporting
    }
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Key Features</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card shadow-lg border-0 scard-hover">
                <div className="card-body">
                  <div className="icon-container mb-3">
                    {feature.icon}
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
