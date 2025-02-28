import React, { useContext, useState } from 'react';  
import { ResellerContext } from '../../Context/ResellerContext';  
import { Link } from 'react-router-dom';  
import { FaUserCircle } from 'react-icons/fa'; 

const ManageUser = () => {  
  const { reseller } = useContext(ResellerContext);  
  const [search, setSearch] = useState('');

  const filteredUsers = search.trim()
    ? reseller.Userdata?.filter((user) =>
        user.customerName.toLowerCase().includes(search.toLowerCase())
      )
    : reseller.Userdata;

  return (  
    <div className="container">
      {/* Search Input */}
      <div className="row my-3">
        <input  
          type="text" 
          className="form-control input-control" 
          placeholder="Search by customer name..." 
          style={{ border: "2px solid rgb(173, 170, 169)", borderRadius: "30px" }} 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
      <div className="row my-3">
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user._id} className="col-md-4 mb-4">
              <Link to="/reseller" className="text-decoration-none">
                <div className="card shadow-lg border-0 card-hover">
                  <div className="card-body text-center">
                    <FaUserCircle 
                      size={50}  
                      style={{
                        WebkitBackgroundClip: 'text',
                      }} 
                      className="mb-3" 
                    />
                    <h5 className="card-title mb-2">{user.customerName}</h5>
                    <p className="card-text mb-0">{user.customerPhoneNo}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-4">
            <h4>==== No User Found ====</h4>
          </div>
        )}
      </div>
    </div>
  );  
};  

export default ManageUser;
