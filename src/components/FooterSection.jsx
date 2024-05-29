import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const FooterSection = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida luctus ex, non mattis ligula condimentum eu.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
          <div className="flex items-center text-gray-400 mb-4">
            <FaPhone className="mr-2" />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center text-gray-400 mb-4">
            <FaEnvelope className="mr-2" />
            <p>6vC3M@example.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className="text-gray-400">Website developed by <a href="https://github.com/codeWithLFN">codeWithLFN</a></p> {/* Add developer's name and GitHub link here */}
      </div>
    </div>
  </footer>
);

export default FooterSection;
