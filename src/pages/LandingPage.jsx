import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import AboutUsSection from '../components/AboutUsSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import PortfolioSection from '../components/PortfolioSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import FooterSection from '../components/FooterSection.jsx';	

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
    <div id="testimonials">
      <TestimonialsSection />
    </div>
    <div id="projects">
      <PortfolioSection />
    </div>
    <div id="contact">
      <ContactSection />
    </div>
    <FooterSection />
  </div>
);

export default LandingPage;
