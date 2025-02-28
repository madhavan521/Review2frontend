import { useState } from "react";

const Testing  = () => {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1); 

    const sendOTP = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/profile/getotp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ phone }),
            });

            const result = await response.json();
            console.log(result);

            if (result.success) {
                setStep(2); // Move to OTP entry step
            } else {
                alert(result.message || "Failed to send OTP");
            }
        } catch (error) {
            alert("Error sending OTP");
        }
    };

    const verifyOTP = async () => {
      try {
          const response = await fetch("http://localhost:8000/api/profile/verifyotp", { // Corrected endpoint
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ phone, otp }),
          });
  
          const result = await response.json();
          console.log(result);
  
          if (result.success) {
              setStep(3); 
          } else {
              alert("Invalid OTP");
          }
      } catch (error) {
          alert("Invalid OTP");
      }
  };
  

    return (
        <div>
            {step === 1 && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter WhatsApp number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={sendOTP}>Send OTP</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={verifyOTP}>Verify OTP</button>
                </div>
            )}
            {step === 3 && <h3>OTP Verified Successfully!</h3>}
        </div>
    );
};

export default Testing;
