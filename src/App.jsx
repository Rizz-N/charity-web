import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import MainContent from "./pages/MainContent";
import DonasiPage from "./pages/DonasiPage";
import ZakatPage from "./pages/ZakatPage";
import SedekahPage from "./pages/SedekahPage";
import DonasiDetails from "./pages/DonasiDetails";
import WaqafPage from "./pages/WaqafPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainContent />} />
            <Route path="donasi" element={<DonasiPage />} />
            <Route path="donasi/:slug" element={<DonasiDetails />} />
            <Route path="zakat" element={<ZakatPage />} />
            <Route path="sedekah" element={<SedekahPage />} />
            <Route path="waqaf" element={<WaqafPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
