import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Forget from './Components/Authentication/Forget';
import Navbar from './Components/Navbar';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import { ResellerContext } from './Context/ResellerContext';
import ResellerProfile from './Components/Profile/Profile';
import { DealerContext } from './Context/DealerContext';
import Reseller from './Components/Reseller';
import Dealer from './Components/Dealer';
import AddUser from './Components/ResellerDashboard.js/AddUser';
import ManageUser from './Components/ResellerDashboard.js/ManageUser';
import ManageDealer from './Components/ResellerDashboard.js/ManageDealer';
import TotalDealers from './Components/ResellerDashboard.js/TotalDealers';
import CyclinderAvaliability from './Components/Cylinder/CyclinderAvaliability';
import CyclinderVisual from './Components/ResellerDashboard.js/CyclinderVisual';
import ManageReseller from './Components/DealerDashboard.js/ManageReseller';
import Testing from './Testing';
import DealerCylinderPurchase from './Components/Cylinder/DealerCylinderPurchase';
import DealerPurchaseHistory from './Components/Cylinder/DealerPurchaseHistory';
import UnderConstruction from './Components/UnderConstruction';
import CompleteProfile from './Components/Profile/CompleteProfile';

const App = () => {
  const { reseller } = useContext(ResellerContext);
  const { dealer } = useContext(DealerContext);
  const [page, setPage] = useState('/');

    useEffect(() => {
      if (dealer?.fullname == null && reseller?.fullname == null) {
        setPage('/');
      } else if (dealer?.fullname == null) {
        setPage('/reseller'); 
      } else if (reseller?.fullname == null) {
        setPage('/dealer'); 
      } else {
        setPage('/'); 
      }
    }, [reseller, dealer]);
    

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path={page}  element={page === '/' ? <Home /> : (page === '/dealer' ? <Dealer /> : <Reseller />)}/>
          <Route path="/reseller" element={<Reseller />} />
          <Route path="/dealer" element={<Dealer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/profile" element={<ResellerProfile />} />
          <Route path="*" element={<Navigate to={page} />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/manageuser' element={<ManageUser />} />
          <Route path='/managedealer' element={<ManageDealer />} />
          <Route path='/totaldealer' element={<TotalDealers />} />
          <Route path='/resellercyclinder' element={<CyclinderAvaliability />} />
          <Route path='/cyclindervisual' element={<CyclinderVisual />} />
          <Route path='/managereseller' element={<ManageReseller />} />
          <Route path='/dealer/cylinder/purchase' element={<DealerCylinderPurchase />} />
          <Route path='/dealer/purchase/history' element={<DealerPurchaseHistory />}/>
          <Route path='/under' element={<UnderConstruction /> }/>
          <Route path='/complete/profile' element={<CompleteProfile />} />
          <Route path='/testing' element={<Testing />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
