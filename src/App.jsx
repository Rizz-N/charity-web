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
import WaqafDetails from "./pages/WaqafDetails";
import WaqafPage from "./pages/WaqafPage";
import KurbanPage from "./pages/KurbanPage";
import ZPenghasilan from "./pages/ZPenghasilan";
import ZMaal from "./pages/ZMaal";
import ZFitrah from "./pages/ZFitrah";
import ZFidyah from "./pages/ZFidyah";
import ZEmas from "./pages/ZEmas";
import PaymentPage from "./pages/PaymentPage";
import PaymentKurban from "./pages/PaymentKurban";
import Paymentzakat from "./pages/Paymentzakat";

//

import Auth from "./pages/admin/Auth";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/AdminLayout";
import Article from "./pages/admin/Article";
import Product from "./pages/admin/Product";
import ZakatLayout from "./components/ZakatLayout";
import ArticleLayout from "./components/ArticleLayout";
import UpdateArticle from "./pages/admin/UpdateArticle";
import DeleteArticle from "./pages/admin/DeleteArticle";
import ProductLayout from "./components/ProductLayout";
import ManageProduct from "./pages/admin/ManageProduct";

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
            <Route path="waqaf/:slug" element={<WaqafDetails />} />
            <Route path="zakat" element={<ZakatLayout />}>
              <Route path="penghasilan" element={<ZPenghasilan />} />
              <Route path="mal" element={<ZMaal />} />
              <Route path="fitrah" element={<ZFitrah />} />
              <Route path="fidyah" element={<ZFidyah />} />
              <Route path="emas" element={<ZEmas />} />
            </Route>
            <Route path="sedekah" element={<SedekahPage />} />
            <Route path=":type/bayar/:slug" element={<PaymentPage />} />
            <Route path="zakat/:type/bayar" element={<Paymentzakat />} />
            <Route path="waqaf" element={<WaqafPage />} />
            <Route path="kurban" element={<KurbanPage />} />
            <Route path="kurban/bayar/:slug" element={<PaymentKurban />} />
          </Route>
          <Route path="auth" element={<Auth />} />
          <Route path="dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="article" element={<ArticleLayout />}>
              <Route path="create" element={<Article />} />
              <Route path="manage" element={<UpdateArticle />} />
            </Route>
            <Route path="product" element={<ProductLayout />}>
              <Route path="create" element={<Product />} />
              <Route path="manage" element={<ManageProduct />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
