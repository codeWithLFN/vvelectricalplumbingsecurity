import { FaLightbulb, FaWrench, FaShieldAlt } from 'react-icons/fa';

const AboutUsSection = () => (
  <section id="about-us" className="py-16 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-8">About Us</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
      VV Electrical, Plumbing & Security is a Gauteng based construction company established in 2021 with two capable and hands-on managing directors. 
      The company&apos;s mission is to establish a one-stop shop for:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="about-item bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center">
          <div className="rounded-full bg-yellow-500 p-4 mb-6">
            <FaLightbulb className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Electrical Solutions</h3>
          <p className="text-gray-600">Bringing brilliance to your spaces with expert electrical services.</p>
        </div>
        <div className="about-item bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center">
          <div className="rounded-full bg-yellow-500 p-4 mb-6">
            <FaWrench className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Plumbing Services</h3>
          <p className="text-gray-600">Ensuring smooth flow and functionality with our plumbing expertise.</p>
        </div>
        <div className="about-item bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center">
          <div className="rounded-full bg-yellow-500 p-4 mb-6">
            <FaShieldAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Security Systems</h3>
          <p className="text-gray-600">Protecting what matters most with state-of-the-art security solutions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsSection;
