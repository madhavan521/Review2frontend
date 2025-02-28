import React from "react";
import { Link } from "react-router-dom";
import {
  FaBoxes,
  FaBuilding,
  FaUserPlus,
  FaUsersCog,
  FaTruck,
  FaUsers,
  FaWallet,
  FaUserCheck,
  FaChartPie,
  FaShippingFast,
} from "react-icons/fa";

const ResellerDashboard = () => {
  const segments = [
    {
      title: "Cylinder Availability",
      description: "Check current cylinder stock in real time.",
      icon: <FaBoxes size={50} className="text-primary mb-3" />,
      link: "/under",
    },
    {
      title: "Dealer",
      description: "View and manage dealer details.",
      icon: <FaBuilding size={50} className="text-success mb-3" />,
      link: "/managedealer",
    },
    {
      title: "Add Users",
      description: "Add new users to your network.",
      icon: <FaUserPlus size={50} className="text-info mb-3" />,
      link: "/adduser",
    },
    {
      title: "Manage Users",
      description: "Manage and edit user details.",
      icon: <FaUsersCog size={50} className="text-warning mb-3" />,
      link: "/manageuser",
    },
    {
      title: "Dealers",
      description: "Monitor your Dealers network.",
      icon: <FaUsers size={50} className="text-danger mb-3" />,
      link: "/totaldealer",
    }, 
    {
      title: "Cylinder Availability Visualization",
      description: "View cylinder stock trends graphically.",
      icon: <FaChartPie size={50} className="text-info mb-3" />,
      link: "/under",
    },
    {
      title: "Delivery",
      description: "Track and schedule deliveries.",
      icon: <FaTruck size={50} className="text-secondary mb-3" />,
      link:"/under"    },
    
    {
      title: "Payments",
      description: "Track and manage payments.",
      icon: <FaWallet size={50} className="text-primary mb-3" />,
      link:"/under"    },
    {
      title: "Profile Completion",
      description: "Update your profile details.",
      icon: <FaUserCheck size={50} className="text-success mb-3" />,
      link:"/complete/profile"    },
   
    {
      title: "Today's Total Delivery",
      description: "View all deliveries for today.",
      icon: <FaShippingFast size={50} className="text-danger mb-3" />,
      link:"/under"    },
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 font-weight-bold">ℝ𝕖𝕤𝕖𝕝𝕝𝕖𝕣 𝔻𝕒𝕤𝕙𝕓𝕠𝕒𝕣𝕕</h2>
        <div className="row">
          {segments.map((segment, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Link to={segment.link} className="text-decoration-none">
                <div className="card shadow-lg border-0 card-hover">
                  <div className="card-body">
                    {segment.icon}
                    <h5 className="card-title">{segment.title}</h5>
                    <p className="card-text">{segment.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResellerDashboard;
