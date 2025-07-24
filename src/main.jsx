import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";

// ScrollToTop
import ScrollToTop from './components/ScrollToTop';

// Layouts
import RootLayout from "@/layouts/root.layout";
import MainLayout from "@/layouts/main.layout";

//Site Pages
import HomePage from "@/pages/home.page";
import AboutUsPage from "@/pages/aboutUs.page";
import ServicesPage from './pages/services.page';
import NotFoundPage from './pages/notFound.page';
import ContactUsPage from './pages/contactUs.page';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Site Mainlayout */}
          <Route path="/" element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
          </Route>

          {/* Site Logged User/Client Layout */}

          {/* Site Admin Layout */}

          {/* 404 page inside MainLayout */}
          <Route path="*" element={<NotFoundPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
