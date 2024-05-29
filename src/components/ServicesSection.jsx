import { FaWrench, FaPlug, FaCamera } from 'react-icons/fa';

const ServicesSection = () => (
  <section id="services" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <header className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600">Experience luxury and precision in every service we offer</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plumbing */}
        <div id="plumbing_services" className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-8">
            <FaWrench className="mx-auto mb-6 text-6xl text-yellow-500" />
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Plumbing</h4>
            <ul className="text-lg text-gray-700">
              <li>Bathroom Set Installation</li>
              <li>Electric Geyser & Solar Geyser</li>
              <li>Rigid Copper Pipe</li>
              <li>Stainless Steel Pipes</li>
            </ul>
          </div>
          <div className="bg-yellow-500 py-4">
            <a href="mailto:info@vvelectrical.com" className="block text-center text-white font-semibold hover:text-gray-900">Make Enquiry</a>
          </div>
        </div>

        {/* Electrical */}
        <div id="electrical_services" className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-8">
            <FaPlug className="mx-auto mb-6 text-6xl text-yellow-500" />
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Electrical Services</h4>
            <ul className="text-lg text-gray-700">
              <li>Boom Gate Installation & Maintenance</li>
              <li>Electric & Solar Geyser</li>
              <li>Energizer & Electrical Types</li>
              <li>Wire Type</li>
            </ul>
          </div>
          <div className="bg-yellow-500 py-4">
            <a href="mailto:info@vvelectrical.com" className="block text-center text-white font-semibold hover:text-gray-900">Make Enquiry</a>
          </div>
        </div>

        {/* Security */}
        <div id="security_services" className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          <div className="p-8">
            <FaCamera className="mx-auto mb-6 text-6xl text-yellow-500" />
            <h4 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">Security Services</h4>
            <ul className="text-lg text-gray-700">
              <li>Surveillance Systems</li>
              <li>Alarm Systems</li>
              <li>Access Control Systems</li>
              <li>Security Consulting</li>
            </ul>
          </div>
          <div className="bg-yellow-500 py-4">
            <a href="mailto:info@vvelectrical.com" className="block text-center text-white font-semibold hover:text-gray-900">Make Enquiry</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
