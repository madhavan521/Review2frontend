import React, { useContext, useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';   
import toast from 'react-hot-toast';  
import { ResellerContext } from '../../Context/ResellerContext';

const AddUser = () => {  
    const [customerName, setCustomerName] = useState('');  
    const [customerPhoneNo, setCustomerPhoneNo] = useState('');  
    const [customerLocation, setCustomerLocation] = useState('');  
    const [customerAddress, setCustomerAddress] = useState('');  
    const [shopName, setShopName] = useState('');  
    const navigate = useNavigate();  
    const [user,setUser]=useState([null])

 const {resellerapi}=useContext(ResellerContext)
 
    const handleAddUser=(e)=>{
        e.preventDefault()
        const user ={
            customerName,
            customerLocation,
            customerAddress,
            customerPhoneNo,
            shopName
        }

        try{
        fetch('https://review2backend.onrender.com/api/customer/add/create' ,{
            method:"POST",
            headers:{
                 "Content-Type": "application/json"
            },
          body:JSON.stringify(user) ,
            credentials:"include",
    }
       
    )
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
        setUser(result)
        toast.success("Customer Added Sucessfully")
        resellerapi()

        setTimeout(() => {
            setCustomerAddress('')
            setCustomerLocation('')
            setCustomerName('')
            setCustomerPhoneNo('')
            setShopName('')
        
        }, 2000);
    })

        }
        catch(err){
            console.error(err)
            toast.error(err.message)
        }
    }
 





    return (  
        <div className="container mt-5">  
            <div className="mt-4">  
                <div className="row">    
                    <div className="col-12  card my-1">  
                        <form className='form m-3'>   
                            <h4 className='text-center text-primary'>𝔸𝔻𝔻 ℂ𝕌𝕊𝕋𝕆𝕄𝔼ℝ𝕊</h4>   
                            <label><strong className='text-primary'>Customer Name</strong></label>  
                            <input type="text" value={customerName}  
                                onChange={(e) => setCustomerName(e.target.value)}   
                                placeholder='Enter Customer Name'   
                                className='input-form form-control  my-2 ' />  
                            
                            <label><strong className='text-primary'>Customer Phone Number</strong></label>  
                            <input type="text" value={customerPhoneNo}  
                                onChange={(e) => setCustomerPhoneNo(e.target.value)}   
                                placeholder='Enter Phone Number'   
                                className='input-form form-control  my-2' />  
                            
                            <label><strong className='text-primary'>Customer Location</strong></label>  
                            <input type="text" value={customerLocation}  
                                onChange={(e) => setCustomerLocation(e.target.value)}   
                                placeholder='Enter Location'   
                                className='input-form form-control  my-2' />  
                            
                            <label><strong className='text-primary'>Customer Address</strong></label>  
                            <textarea type="text" value={customerAddress}  
                                onChange={(e) => setCustomerAddress(e.target.value)}   
                                placeholder='Enter Address' 
                                height='300px'  
                                className='input-form form-control  my-2' />  
                            
                            <label><strong className='text-primary'>Shop Name</strong></label>  
                            <input type="text" value={shopName}  
                                onChange={(e) => setShopName(e.target.value)}   
                                placeholder='Enter Shop Name'   
                                className='input-form form-control  my-2' />  

                            <div className="row mt-3">  
                                <div className="col-6 text-center align-item-start d-flex justify-content-start">  
                                   <Link to='/reseller' className='text-decoration-none text-light'>  <button type="submit" className="btn btn-warning text-light loginButton" >Back To DashBoard</button>  
                               </Link>  </div> 
                                <div className="col-6 text-center align-item-end d-flex justify-content-end">  
                                   <button type="submit" className="btn btn-warning text-light loginButton" onClick={handleAddUser} >Add Customer</button>  
                               </div>  
                            </div>   

                          
                        </form>  
                    </div>  
                </div>  
            </div>   
        </div>  
    );  
}  

export default AddUser;