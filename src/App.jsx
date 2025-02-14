import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AboutPage, HomePage, ServicePage, ContactPage, UploadCategory, UploadFilePage, UploadService, PricingPage } from "./pages/page";
import "./App.css";
import ComingSoon from './components/ComingSoon';
import PreLoader from './components/PreLoader';
import { AnalyticsPage } from './admin/page/page';

function App() {
  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false); // State to track API calls
  const location = useLocation();

  return (
    <>
      {(loading || apiLoading) && <PreLoader />} {/* Show when page loads or API is loading */}

      <Routes>
        <Route path='/' element={<HomePage setLoading={setLoading} />} />
        <Route path='/about-us' element={<AboutPage setLoading={setLoading} />} />
        <Route path='/service/:category' element={<ServicePage setApiLoading={setApiLoading} apiLoading={apiLoading} />} />
        <Route path='/contact' element={<ContactPage setLoading={setLoading} />} />
        <Route path='/pricing-package/:category' element={<PricingPage />} />
        <Route path='/upload-portfolio' element={<UploadFilePage />} />
        <Route path='/upload-service' element={<UploadService />} />
        <Route path='/upload-category' element={<UploadCategory />} />
        <Route path='*' element={<ComingSoon />} />


        {/* Admin Routes */}
        <Route path='/dashboard' element={<AnalyticsPage />} />

      </Routes>
    </>
  );
}

export default App;