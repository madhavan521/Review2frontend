import React, { useContext,useState } from 'react';  
import cyclinder from '../../Assest/second.png';
import {Link, useNavigate} from 'react-router-dom' 
import toast from 'react-hot-toast';
// import { LoginAuthenticationContext } from '../../UserContext/LoginAuthenticationContext';


const Signup = () => {  
  // const {username,password,setPassword,setUsername,handleDealerlogin}=useContext(LoginAuthenticationContext)
       const [username,setUsername]=useState('')
       const [password,setPassword]=useState('')
       const [fullname ,setFullname]=useState('')
       const [email,setEmail]=useState('')
       const [login,setLogin]=useState()
       const navigate = useNavigate()

 
const handleDealersignup= async (e) => {  
  e.preventDefault()
  const newdata = {  
      username,  
      password,
      fullname,
      email,
  };  
  try {  
      await fetch("https://review2backend.onrender.com/api/auth/dealer/signup", {  
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
          console.log("signupSuccessfully"); 
          toast.success("Account Created Successfully")
      });  
     
      setTimeout(() => {  
          setUsername('');  
          setPassword(''); 
          setFullname('');
          setEmail('');
          navigate('/login')
      }, 2000);  
      
  } catch (err) {  
      console.error(err.message); 
      console.log(err) 
      toast.error(err.message)
  }  
}
const handleResellersignup= async (e) => {  
  e.preventDefault()
  const newdata = {  
      username,  
      password,
      fullname,
      email,
  };  
  try {  
      await fetch("https://review2backend.onrender.com/api/auth/reseller/signup", {  
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
          console.log("signupSuccessfully");  
          toast.success("Account Created Successfully")

      });  
     
      setTimeout(() => {  
          setUsername('');  
          setPassword(''); 
          setFullname('');
          setEmail('');
          navigate('/login')
           
      }, 2000);  
      
  } catch (err) {  
      console.error(err.message); 
      console.log(err) 
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
        <div className="col-md-6 col-12 col-lg-6 card my-1 ">  
          <form className='form m-3'> 
                      <h5 className='text-center'> 𝔻𝕖𝕒𝕝𝕖𝕣 / ℝ𝕖𝕤𝕖𝕝𝕝𝕖𝕣 𝕊𝕚𝕘𝕟𝕦𝕡</h5> 
        {/* username */}
              <label  >Username</label>  
              <input type="text" value={username}
              onChange={(e)=>setUsername(e.target.value)} 
              placeholder='Enter your Username'className='input-form form-control' />  
        {/* fullname */}
              <label >Fullname</label>  
              <input type="text" value={fullname} 
              placeholder='Enter your Fullname' 
              onChange={(e)=>setFullname(e.target.value)} className='input-form form-control' />  
        {/* email */}
               <label  >Email</label>  
              <input type="text" value={email}
              placeholder='Enter your Email'
              onChange={(e)=>setEmail(e.target.value)} className='input-form form-control' />
        {/* mobile number
               <label  >Mobile Number</label> 
                
              <input type="text" value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
              placeholder='Enter your Mobile Number' className='input-form form-control' />
           */}
        {/* Password*/}
              <label >Password</label>  
              <input type="password"  value={password}  
              onChange={(e)=>setPassword(e.target.value)}
              placeholder='Enter your Password' className='input-form form-control' />  
            <div className="row mt-3">
                <div className="col-6 text-center">
                <button type="submit" className="btn btn-warning text-light loginButton" onClick={handleDealersignup}>Dealers Signup</button>  
            </div>
                <div className="col-6 text-center">
                <button type="submit" className="btn btn-warning text-light loginButton" onClick={handleResellersignup}> Resellers Signup</button>  
                </div>
            </div> 

             <Link to='/login' className='text-decoration-none'><p className="text-center my-3">....𝕬𝖑𝖗𝖊𝖆𝖉𝖞 𝕳𝖆𝖛𝖊 𝖆𝖓 𝕬𝖈𝖈𝖔𝖚𝖓𝖙....</p></Link>
          </form>  
        </div>  
      </div>  </div> 
    </div>  
  );  
}  

export default Signup;
