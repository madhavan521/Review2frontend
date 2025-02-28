import React, { useState } from "react";


const CompleteProfile = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyGSTNumber, setCompanyGSTNumber] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [personAddress, setPersonAddress] = useState("");
  const [gmailVerification, setGmailVerification] = useState(false);
  const [profilePhotoCompany, setProfilePhotoCompany] = useState(null);
  const [profilePhotoPerson, setProfilePhotoPerson] = useState(null);
  const [previewCompany, setPreviewCompany] = useState(null);
  const [previewPerson, setPreviewPerson] = useState(null);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleCompanyAddressChange = (e) => setCompanyAddress(e.target.value);
  const handleCompanyGSTNumberChange = (e) => setCompanyGSTNumber(e.target.value);
  const handlePhoneNumber1Change = (e) => setPhoneNumber1(e.target.value);
  const handlePhoneNumber2Change = (e) => setPhoneNumber2(e.target.value);
  const handlePersonAddressChange = (e) => setPersonAddress(e.target.value);
  const handleGmailVerificationChange = (e) => setGmailVerification(e.target.checked);

  const handleImageChange = (event, setImage, setPreview) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

const handleSubmit=()=>{

}

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create Profile</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Company Name */}
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input type="text" className="form-control" value={companyName} onChange={handleCompanyNameChange} required />
        </div>

        {/* Company Address */}
        <div className="mb-3">
          <label className="form-label">Company Address</label>
          <input type="text" className="form-control" value={companyAddress} onChange={handleCompanyAddressChange} required />
        </div>

        {/* Company GST Number */}
        <div className="mb-3">
          <label className="form-label">Company GST Number</label>
          <input type="text" className="form-control" value={companyGSTNumber} onChange={handleCompanyGSTNumberChange} required />
        </div>

        {/* Phone Numbers */}
        <div className="mb-3">
          <label className="form-label">Phone Number 1 (WhatsApp)</label>
          <input type="text" className="form-control" value={phoneNumber1} onChange={handlePhoneNumber1Change} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number 2</label>
          <input type="text" className="form-control" value={phoneNumber2} onChange={handlePhoneNumber2Change} />
        </div>

        {/* Person Address */}
        <div className="mb-3">
          <label className="form-label">Person's Address</label>
          <input type="text" className="form-control" value={personAddress} onChange={handlePersonAddressChange} required />
        </div>

        {/* Gmail Verification */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" checked={gmailVerification} onChange={handleGmailVerificationChange} />
          <label className="form-check-label">Gmail Verified?</label>
        </div>

        {/* Profile Photo - Company */}
        <div className="mb-3">
          <label className="form-label">Company Profile Photo</label>
          <input type="file" className="form-control" accept="image/*" onChange={(e) => handleImageChange(e, setProfilePhotoCompany, setPreviewCompany)} required />
          {previewCompany && <img src={previewCompany} alt="Company Preview" className="img-thumbnail mt-2" style={{ width: "150px" }} />}
        </div>

        {/* Profile Photo - Person */}
        <div className="mb-3">
          <label className="form-label">Person Profile Photo</label>
          <input type="file" className="form-control" accept="image/*" onChange={(e) => handleImageChange(e, setProfilePhotoPerson, setPreviewPerson)} required />
          {previewPerson && <img src={previewPerson} alt="Person Preview" className="img-thumbnail mt-2" style={{ width: "150px" }} />}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Create Profile</button>
      </form>
    </div>
  );
};

export default CompleteProfile;
