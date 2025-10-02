import Layout from "./Layout.jsx";

import Home from "./Home";

import Services from "./Services";

import Products from "./Products";

import News from "./News";

import NewsDetail from "./NewsDetail";

import Portfolio from "./Portfolio";

import PortfolioDetail from "./PortfolioDetail";

import About from "./About";

import Contact from "./Contact";

import SupportDetail from "./SupportDetail";

import ServiceDetail from "./ServiceDetail";

import ProductDetail from "./ProductDetail";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Services: Services,
    
    Products: Products,
    
    News: News,
    
    NewsDetail: NewsDetail,
    
    Portfolio: Portfolio,
    
    PortfolioDetail: PortfolioDetail,
    
    About: About,
    
    Contact: Contact,
    
    SupportDetail: SupportDetail,
    
    ServiceDetail: ServiceDetail,
    
    ProductDetail: ProductDetail,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Services" element={<Services />} />
                
                <Route path="/Products" element={<Products />} />
                
                <Route path="/News" element={<News />} />
                
                <Route path="/NewsDetail" element={<NewsDetail />} />
                
                <Route path="/Portfolio" element={<Portfolio />} />
                
                <Route path="/PortfolioDetail" element={<PortfolioDetail />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/SupportDetail" element={<SupportDetail />} />
                
                <Route path="/ServiceDetail" element={<ServiceDetail />} />
                
                <Route path="/ProductDetail" element={<ProductDetail />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}