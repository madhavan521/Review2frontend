import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const SelectDealer = () => {
    const [dealerdata, setDealerdata] = useState([]); 
    const [selectdata, setSelectdata] = useState(''); 

    useEffect(() => {
        fetch('https://review2backend.onrender.com/api/reseller/push/get', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', 
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setDealerdata(result);
        })
        .catch((error) => {
            console.error("Error fetching dealer data:", error);
            toast.error('Error fetching dealer data');
        });
    }, []);

    const handleDealer = (e) => {
        e.preventDefault();

        console.log("Selected Dealer ID:", selectdata);

        if (!selectdata) {
            toast.error('Please select a dealer');
            return;
        }

        const data = { username: selectdata }; 

        fetch('https://review2backend.onrender.com/api/reseller/push/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            toast.success('Dealer added successfully');
        })
        .catch((err) => {
            console.error("Error adding dealer:", err.message);
            toast.error('Error adding dealer');
        });
    };

    return (
        <div className="container">
            <div className="row my-4 card">
                <h3 className="my-3 text-center">𝕊𝔼𝕃𝔼ℂ𝕋 𝕐𝕆𝕌ℝ 𝔻𝔼𝔸𝕃𝔼ℝ</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <select
                        style={{
                            width: "560px",
                            height: "39px",
                            border: "2px solid black",
                            borderRadius: "6px",
                        }}
                        value={selectdata}
                        onChange={(e) => {
                            setSelectdata(e.target.value);
                        }}
                    >
                        <option value="" disabled>
                            Select Dealer by Fullname - Username
                        </option>
                        {dealerdata.map((item) => (
                            <option key={item._id} value={item.username}>
                                {item.username}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="loginButton" onClick={handleDealer}>
                        Select Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectDealer;
