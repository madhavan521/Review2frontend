import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DealerContextProvider } from './Context/DealerContext';
import { ResellerContextProvider } from './Context/ResellerContext';
import Testing from './Testing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DealerContextProvider>
    <ResellerContextProvider>
     
      <App />
    
    </ResellerContextProvider>
  </DealerContextProvider>
  {/* <Testing /> */}
  
  </>
);

