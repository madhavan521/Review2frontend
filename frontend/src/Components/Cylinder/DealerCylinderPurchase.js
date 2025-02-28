import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import toast from "react-hot-toast";
import { DealerContext } from "../../Context/DealerContext";

const DealerCylinderPurchase= () => {
   const {dealerapi}=useContext(DealerContext)
    const [cylinderType, setCylinderType] = useState("");
    const [fullCylinder, setFullCylinder] = useState("");
    const [emptyCylinder, setEmptyCylinder] = useState("");

    const cylinderTypes = ["5kg", "14kg", "17kg", "19kg", "21kg", "45kg"];

    const handleSubmit = (e) => {
        e.preventDefault();
      const cylinderData = { cylinderType, fullCylinder, emptyCylinder}
      try{
         fetch("https://review2backend.onrender.com/api/cylinder/entry/create",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            credentials:"include",
            body:JSON.stringify(cylinderData)
         })
         .then(res=>res.json())
         .then(result=>{
            console.log("Cylinder purchased Succesfully")
            toast.success("Cylinder purchased Successfully")
            setTimeout(() => {
                dealerapi()
            }, 500);
         })
      }
      catch(err){
        console.log(err)
        toast.error(err)
      }
      
    };

    return (
        <div className="container-fluid vh-100  ">
           <h3 className="text-center my-3">ℙ𝕦𝕣𝕔𝕙𝕒𝕤𝕖 ℂ𝕪𝕝𝕚𝕟𝕕𝕖𝕣</h3>
            <div className="card p-4 shadow-lg ">
                <h4 className="text-center loginButton text-white py-1 rounded">Cylinder Data Entry</h4>
                <form onSubmit={handleSubmit} className="w-100">
                    <div className="mb-4 d-flex justify-content-between">
                        <div className="flex-fill me-3">
                            <label className="form-label"><strong>Cylinder Type</strong></label>
                            <select className="form-control" value={cylinderType} onChange={(e) => setCylinderType(e.target.value)} required>
                                <option value="">Select  Cylinder Type</option>
                                {cylinderTypes.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-fill mx-3">
                            <label className="form-label"><strong>Full Cylinder</strong></label>
                            <input type="number" className="form-control" value={fullCylinder} onChange={(e) => setFullCylinder(e.target.value)} required />
                        </div>
                        <div className="flex-fill ms-3">
                            <label className="form-label"><strong>Empty Cylinder</strong></label>
                            <input type="number" className="form-control" value={emptyCylinder} onChange={(e) => setEmptyCylinder(e.target.value)} required />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn loginButton  text-light w-25">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DealerCylinderPurchase;
