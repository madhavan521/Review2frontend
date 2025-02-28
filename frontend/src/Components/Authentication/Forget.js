import React, { useState } from 'react';  
import cyclinder from '../../Assest/second.png';  
import { Link } from 'react-router-dom';  
import toast from 'react-hot-toast';  

const Forget = () => {  
    const [password, setPassword] = useState('');  
    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');  

    const handleDealerForget = async (e) => {  
      e.preventDefault();  
      const newdata = { password, username, email };  
      try {  
          const response = await fetch("https://review2backend.onrender.com/api/auth/dealer/forget", {  
              method: "PUT",  
              headers: {  
                  "Content-Type": "application/json"  
              },  
              body: JSON.stringify(newdata),  
              credentials: 'include'  
          });  
  
          const textResponse = await response.text();  
  
          if (!response.ok) {  
              throw new Error(textResponse || "Failed to update password");  
          }  
  
          toast.success(textResponse); 
  
          setPassword('');  
          setUsername('');  
          setEmail('');  
  
      } catch (err) {  
          console.error(err.message);  
          toast.error(err.message);  
      }  
  };  
  
  const handleResellerForget = async (e) => {  
      e.preventDefault();  
      const newdata = { password, username, email };  
      try {  
          const response = await fetch("https://review2backend.onrender.com/api/auth/reseller/forget", {  
              method: "PUT",  
              headers: {  
                  "Content-Type": "application/json"  
              },  
              body: JSON.stringify(newdata),  
              credentials: 'include'  
          });  
  
 
          const textResponse = await response.text();  
  
          if (!response.ok) {  
              throw new Error(textResponse || "Failed to update password");  
          }  
  
        toast.success(textResponse); 
  
          setPassword('');  
          setUsername('');  
          setEmail('');  
  
      } catch (err) {  
          console.error(err.message);  
          toast.error(err.message);  
      }  
  };

   return (  
        <div className="container mt-5">  
            <div className="mt-4">  
                <div className="row">  
                    <div className="col-md-6 col-12 col-lg-6">  
                        <div className="" style={{ margin: "0px 99px" }}>  
                            <img src={cyclinder} alt="Cylinder" height="90%" width="85%" />  
                        </div>  
                    </div>  
                    <div className="col-md-6 col-12 col-lg-6 card my-1" style={{ height: "400px" }}>  
                        <form className='form m-3'>  
                            <h5 className='text-center'> ℝ𝕖𝕤𝕖𝕥 ℙ𝕒𝕤𝕤𝕨𝕠𝕣𝕕</h5>  

                            {/* Username */}  
                            <label>Username</label>  
                            <input type="text"   
                                   value={username}  
                                   placeholder='Enter your username'   
                                   onChange={(e) => setUsername(e.target.value)}   
                                   className='input-form form-control'   
                                   autoComplete='username' />  

                            {/* Email */}  
                            <label>Email</label>  
                            <input type="email"   
                                   value={email}  
                                   placeholder='Enter your Email'   
                                   onChange={(e) => setEmail(e.target.value)}   
                                   className='input-form form-control'   
                                   autoComplete='email' />  

                            {/* Password */}  
                            <label>Password</label>  
                            <input type="password"   
                                   value={password}  
                                   onChange={(e) => setPassword(e.target.value)}   
                                   placeholder='Enter your New Password'   
                                   className='input-form form-control'   
                                   autoComplete='new-password' />  

                            <div className="row mt-3">  
                                <div className="col-6 text-center">  
                                    <button type="submit"   
                                            className="btn btn-warning loginButton"   
                                            onClick={handleDealerForget}>Update Dealer</button>  
                                </div>  
                                <div className="col-6 text-center">  
                                    <button type="submit"   
                                            className="btn btn-warning loginButton"   
                                            onClick={handleResellerForget}>Update Reseller</button>  
                                </div>  
                            </div>  

                            <Link to='/login' className='text-decoration-none'>  
                                <p className="text-center my-3"> ----𝕭𝖆𝖈𝖐 𝖙𝖔 𝖑𝖔𝖌𝖎𝖓----</p>  
                            </Link>  
                        </form>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Forget;