import React from 'react';
import { FaCogs, FaListAlt, FaChartBar } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Log In",
      description: "Create an account or log in to start managing your cylinders.",
      icon: <FaCogs size={50} className="text-primary mb-3" />
    },
    {
      title: "Step 2: Manage Inventory",
      description: "Track cylinder availability and manage your stock efficiently.",
      icon: <FaListAlt size={50} className="text-success mb-3" />
    },
    {
      title: "Step 3: Generate Reports",
      description: "Generate real-time sales reports and expense tracking.",
      icon: <FaChartBar size={50} className="text-warning mb-3" />
    }
  ];

  return (
    <section className="py-5" >
      <div className="container text-center">
        <h2 className="mb-4 font-weight-bold ">How It Works</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-lg border-0 card-hover">
                <div className="card-body">
                  {step.icon}
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
