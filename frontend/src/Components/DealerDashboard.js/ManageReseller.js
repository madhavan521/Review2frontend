import React, { useContext, useState } from 'react';  
import { DealerContext } from '../../Context/DealerContext';  
import { Link } from 'react-router-dom';  
import { FaUserCircle } from 'react-icons/fa';   

const Managedealer = () => {  
  const { dealer } = useContext(DealerContext);  
  const [search, setSearch] = useState('');  
 
  const filteredUsers = search.trim()  
    ? dealer.Reseller?.filter((user) =>  
        user.username.toLowerCase().includes(search.toLowerCase())  
      )  
    : dealer.Reseller || [];  
 
     

  return (  
    <div className="container">  
      <h4 className='my-2 text-center'>𝕄𝕐 ℝ𝔼𝕊𝔼𝕃𝕃𝔼ℝ𝕊</h4>
      <div className="row my-3">  
        <input  
          type="text"   
          className="form-control input-control my-2"   
          placeholder="Search by customer name..."   
          style={{ border: "2px solid rgb(173, 170, 169)", borderRadius: "30px" }}   
          value={search} 
          width="200px"  
          onChange={(e) => setSearch(e.target.value)}   
        />  
      </div>  
      <div className="row my-3">  
        {filteredUsers && filteredUsers.length > 0 ? (  
          filteredUsers.map((user) => (  
            <div key={user._id} className="col-md-4 mb-4">  
              <Link to={`/dealer/${user._id}`} className="text-decoration-none">  
                <div className="card shadow-lg border-0 card-hover">  
                  <div className="card-body text-center">  
                    <FaUserCircle   
                      size={50}  
                      color='rgb(129, 129, 129)'
                      style={{  
                        WebkitBackgroundClip: 'text',  
                      }}   
                      className="mb-3"   
                    /> 
                    <h5 className="card-title mb-2">Username : <span className='text-primary'>{user.fullname}</span></h5>  
                    <h6 className="card-title mb-2">Fullname :  <span className='text-primary'>{user.fullname}</span></h6>  
                    <p className="card-text mb-0"> Phone Number :<span className='text-primary'>{user.phoneNo|| "N/A" } </span> </p>  
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

export default Managedealer;