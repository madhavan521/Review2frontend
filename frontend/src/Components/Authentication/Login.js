import React, { useContext,useState } from 'react';  
import cyclinder from '../../Assest/second.png';
import {Link, useNavigate} from 'react-router-dom' 
import toast from 'react-hot-toast';


const Login = () => {  
       const [username,setUsername]=useState('')
       const [password,setPassword]=useState('')
       const navigate =useNavigate()

 
const handleDealerlogin = async (e) => {  
  e.preventDefault()
  const newdata = {  
      username,  
      password  
  };  
  try {  
      await fetch("https://review2backend.onrender.com/api/auth/dealer/login", {  
          method: "POST",  
          headers: {  
              "Content-Type": "application/json"  
          },  
          body: JSON.stringify(newdata),  
          credentials: 'include' 
      })  
      .then(res => res.json())  
      .then(result => {  
         console.log(result)
          console.log("Login Successfully"); 
          toast.success("Login Successfully") 
      });  
     
      setTimeout(() => {  
          setUsername('');  
          setPassword(''); 
          navigate('/dealer')
          window.location.reload()
           
      }, 2000);  
      
  } catch (err) {  
      console.error(err.message); 
      toast.error(err.message) 
  }  
}
const handleResellerlogin = async (e) => {  
  e.preventDefault()
  const newdata = {  
      username,  
      password  
  };  
  try {  
      await fetch("https://review2backend.onrender.com/api/auth/reseller/login", {  
          method: "POST",  
          headers: {  
              "Content-Type": "application/json"  
          },  
          body: JSON.stringify(newdata),  
          credentials: 'include' 
      })  
      .then(res => res.json())  
      .then(result => {  
         console.log(result)
          console.log("Login Successfully");  
          toast.success("Login Successfully") 
      });  
     
      setTimeout(() => {  
          setUsername('');  
          setPassword(''); 
          navigate('/reseller')
          window.location.reload()
           
      }, 2000);  
      
  } catch (err) {  
      console.error(err.message);  
      toast.error(err.message)
  }  
}


  return (  
    <div className="container   mt-5  ">  
    <div className=" mt-4">
     <div className="row ">
        <div className="col-md-6 col-12 col-lg-6 ">
        <div className="" style={{margin:"0px 99px"}}>  
          <img src={cyclinder} alt="" height="90%" width="90%" />  
        </div>  </div>
        <div className="col-md-6 col-12 col-lg-6 card " style={{height:"360px"}}>  
          <form className='form m-3'> 
                      <h5 className='text-center'> 𝔻𝕖𝕒𝕝𝕖𝕣 / ℝ𝕖𝕤𝕖𝕝𝕝𝕖𝕣 𝕃𝕠𝕘𝕚𝕟</h5> 
              <label htmlFor="username" >Username</label>  
              <input type="text" id="username" 
               value={username}
               onChange={(e)=>setUsername(e.target.value)}
               placeholder='Enter your Username' className='input-form form-control' />  
  
            
              <label htmlFor="password" >Password</label>  
              <input type="password" id="password"
              value={password}  
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='Enter your Password' className='input-form form-control' />  
       
            <div className="row mt-3">
                <div className="col-6 text-center">
                <button type="submit" className="btn text-light loginButton" onClick={handleDealerlogin}>Dealer Login</button>  
            </div>
                <div className="col-6 text-center">
                <button type="submit" className="btn text-light loginButton"  onClick={handleResellerlogin}> Reseller Login</button>  
                </div>
            </div> 
            <p className='text-center my-3'><Link to="/forget" className='text-decoration-none'>....𝕱𝖔𝖗𝖌𝖊𝖙 𝕻𝖆𝖘𝖘𝖜𝖔𝖗𝖉 ....</Link></p>

             <Link to="/signup" className='text-decoration-none'><p className="text-center my-3">𝕮𝖗𝖊𝖆𝖙𝖊 𝖆 𝕬𝖈𝖈𝖔𝖚𝖓𝖙</p></Link>
          </form>  
        </div>  
      </div>  </div> 
    </div>  
  );  
}  

export default Login;