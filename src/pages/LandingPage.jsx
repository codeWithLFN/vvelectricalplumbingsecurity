import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import AboutUsSection from '../components/AboutUsSection.jsx';
import PortfolioSection from '../components/PortfolioSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import FooterSection from '../components/FooterSection.jsx';
import WhatsAppFloater from '../components/WhatsAppFloater.jsx';

const LandingPage = () => (
  <div>
    <Header />
    <div id="home">
      <HeroSection />
    </div>
    <div id="about-us">
      <AboutUsSection />
    </div>
    <div id="services">
      <ServicesSection />
    </div>
    <div id="projects">
      <PortfolioSection />
    </div>
    <div id="contact">
      <ContactSection />
    </div>
    <WhatsAppFloater />
    <FooterSection />
  </div>
);

export default LandingPage;
