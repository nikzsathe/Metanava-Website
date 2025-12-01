import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeOnemain from '../pages/HomeOnemain';
import HomeTwoMain from '../pages/HomeTwoMain';
import HomeThreeMain from '../pages/HomeThreeMain';
import HomeFourMain from '../pages/HomeFourMain';
import HomeFiveMain from '../pages/HomeFiveMain';
import HomeSixMain from '../pages/HomeSixMain';
import HomeSevenMain from '../pages/HomeSevenMain';
import FullScreenSlicerMain from '../pages/FullScreenSlicerMain';
import InteractiveLinksMain from '../pages/InteractiveLinksMain';
import ShowcaseCarousaleMain from '../pages/ShowcaseCarousaleMain';
import PortfolioShowcaseMain from '../pages/PortfolioShowcaseMain';
import AboutMain from '../pages/AboutMain';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import ShopMain from '../pages/ShopMain';
import ShopDetailsMain from '../pages/ShopDetailsMain';
import PricingMain from '../pages/PricingMain';
import FaqMain from '../pages/FaqMain';
import PortfolioTwoMain from '../pages/PortfolioTwoMain';
import PortfolioOneMain from '../pages/PortfolioOneMain';
import PortfolioThreeMain from '../pages/PortfolioThreeMain';
import PortfolioFourMain from '../pages/PortfolioFourMain';
import PortfolioDetailsMain from '../pages/PortfolioDetailsMain';
import BlogOneMain from '../pages/BlogOneMain';
import BlogSidebarMain from '../pages/BlogSidebarMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import ContactMain from '../pages/ContactMain';
import ErrorMain from '../pages/ErrorMain';
import ServiceDetailsDynamic from '../pages/ServiceDetailsDynamic';
import CareerMain from '../pages/CareerMain';
import PrivacyPolicyMain from '../pages/PrivacyPolicyMain';
import TermsConditionsMain from '../pages/TermsConditionsMain';
import CookiesPolicyMain from '../pages/CookiesPolicyMain';
import CASLPolicyMain from '../pages/CASLPolicyMain';
import BlogAdminMain from '../pages/admin/BlogAdminMain';
import BlogDetailsDynamic from '../pages/BlogDetailsDynamic';

const AppNavigation = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<HomeOnemain />} />
            <Route path="/home-two" element={<HomeTwoMain />} />
            <Route path="/home-three" element={<HomeThreeMain />} />
            <Route path="/home-four" element={<HomeFourMain />} />
            <Route path="/home-five" element={<HomeFiveMain />} />
            <Route path="/home-six" element={<HomeSixMain />} />
            <Route path="/home-seven" element={<HomeSevenMain />} />
            <Route path="/full-screen-slicer" element={<FullScreenSlicerMain />} />
            <Route path="/interactive-links" element={<InteractiveLinksMain />} />
            <Route path="/showcase-carousale" element={<ShowcaseCarousaleMain />} />
            <Route path="/portfolio-showcase" element={<PortfolioShowcaseMain />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/service" element={<ServiceMain />} />
            <Route path="/service-details" element={<ServiceDetailsMain />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetailsDynamic />} />
            <Route path="/team" element={<TeamMain />} />
            <Route path="/team-details" element={<TeamDetailsMain />} />
            <Route path="/shop" element={<ShopMain />} />
            <Route path="/shop-details" element={<ShopDetailsMain />} />
            <Route path="/pricing" element={<PricingMain />} />
            <Route path="/faq" element={<FaqMain />} />
            <Route path="/portfolio-two-columns" element={<PortfolioOneMain />} />
            <Route path="/portfolio-three-columns" element={<PortfolioTwoMain />} />
            <Route path="/portfolio-four-columns" element={<PortfolioThreeMain />} />
            <Route path="/portfolio-random" element={<PortfolioFourMain />} />
            <Route path="/portfolio-details" element={<PortfolioDetailsMain />} />
            <Route path="/blog" element={<BlogOneMain />} />
            <Route path="/blog-sidebar" element={<BlogSidebarMain />} />
            <Route path="/blog-details" element={<BlogDetailsMain />} />
            <Route path="/blog/:slug" element={<BlogDetailsDynamic />} />
            <Route path="/admin/blog" element={<BlogAdminMain />} />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/careers" element={<CareerMain />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyMain />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsMain />} />
            <Route path="/cookies-policy" element={<CookiesPolicyMain />} />
            <Route path="/casl-policy" element={<CASLPolicyMain />} />
            <Route path="*" element={<ErrorMain />} />
         </Routes>
      </Router>
   );
};

export default AppNavigation;