import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaExternalLinkAlt, FaUser, FaPhoneAlt, FaLocationArrow, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => (
  <section className="contact p-12 text-slate-400">
    <div id="contact">
      <header className="section-title io-item text-center mb-12">
        <h2 title="Contact Info" className="text-5xl font-bold text-black">Contact Us</h2>
      </header>
      {/* CONTACT INFO */}
      <div id="contact-items" className="contact-items grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* PHONE NUMBERS */}
        <div className="contact-item bg-gray-800 p-8 shadow-2xl rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="contact-item-title flex items-center mb-6">
            <FaPhone className="contact-icon mr-4 text-3xl text-yellow-500" />
            <h3 className="text-2xl font-semibold text-white">Phone Numbers</h3>
          </div>
          {/*CONTACT INFO */}
          <div className="contact-info">
            <div className="contact-info-item mb-6">
              <div className="flex items-center mb-4">
                <FaUser className="icon mr-2 text-2xl text-yellow-500" />
                <p className="text-lg text-gray-300">Mr. Matodzi Mutavhatsindi <span className="font-semibold"></span></p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="icon mr-2 text-2xl text-yellow-500" />
                <p>
                  <a href="tel:0763863550" className="text-yellow-500 hover:text-yellow-300">076 386 3550</a>
                </p>
              </div>
              {/* CALL NOW BUTTON */}
              <div className="item-button mt-6">
                <a className="cta-btn contact-button inline-flex items-center bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-600" title="Call Thabelo" href="tel:0729270758">
                  Call Now
                  <FaPhoneAlt className="icon ml-3 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* EMAIL */}
        <div className="contact-item bg-gray-800 p-8 shadow-2xl rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="contact-item-title flex items-center mb-6">
            <FaEnvelope className="contact-icon mr-4 text-3xl text-yellow-500" />
            <h3 className="text-2xl font-semibold text-white">Email Address</h3>
          </div>
          <div className="contact-info">
            <div className="contact-info-item mb-6">
              <div className="flex items-center mb-4">
                <FaEnvelope className="icon mr-2 text-2xl text-yellow-500" />
                <p>
                  <a href="mailto:info@vvelectrical.co.za" className="text-yellow-500 hover:text-yellow-300">info@vvelectrical.co.za</a>
                </p>
              </div>
              <div className="item-button mt-6">
                <a className="cta-btn inline-flex items-center bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-600" title="Send Email" href="mailto:info@vvelectrical.co.za">
                  Send Email
                  <FaPaperPlane className="icon ml-3 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="contact-item bg-gray-800 p-8 shadow-2xl rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="contact-item-title flex items-center mb-6">
            <FaFacebook className="contact-icon mr-4 text-3xl text-yellow-500" />
            <h3 className="text-2xl font-semibold text-white">Social Media</h3>
          </div>
          {/* FACEBOOK */}
          <div className="contact-info">
            <div className="contact-info-item mb-6">
              <div className="flex items-center mb-4">
                <FaFacebook className="icon mr-2 text-2xl text-yellow-500" />
                <p className="text-lg text-gray-300">Facebook</p>
              </div>
              <div className="item-button mt-6">
                <a className="cta-btn btn-md inline-flex items-center bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-600" title="Facebook profile" href="#" target="_blank">
                  View Account
                  <FaExternalLinkAlt className="icon ml-3 text-2xl" />
                </a>
              </div>
            </div>
          </div>
          {/* INSTAGRAM */}
          <div className="contact-info">
            <div className="contact-info-item mb-6">
              <div className="flex items-center mb-4">
                <FaInstagram className="icon mr-2 text-2xl text-yellow-500" />
                <p className="text-lg text-gray-300">Instagram</p>
              </div>
              <div className="item-button mt-6">
                <a className="cta-btn btn-md inline-flex items-center bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-600" title="Instagram profile" href="#" target="_blank">
                  View Account
                  <FaExternalLinkAlt className="icon ml-3 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* LOCATION */}
        <div className="contact-item bg-gray-800 p-8 shadow-2xl rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl">
          <div className="contact-item-title flex items-center mb-6">
            <FaMapMarkerAlt className="contact-icon mr-4 text-3xl text-yellow-500" />
            <h3 className="text-2xl font-semibold text-white">Location</h3>
          </div>
          <div className="contact-info">
            <div className="contact-info-item mb-6">
              <div className="flex items-center mb-4">
                <FaLocationArrow className="icon mr-2 text-2xl text-yellow-500" />
                <p className="text-lg text-gray-300">Gauteng</p>
              </div>
              <div className="item-button mt-6">
                <a className="cta-btn btn-md inline-flex items-center bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-600" title="Location" href="https://goo.gl/maps/xipWF492X1BgCwsDA" target="_blank">
                  Google Maps
                  <FaExternalLinkAlt className="icon ml-3 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FORM */}
      <form id="form" className="contact-form bg-gray-800 p-8 shadow-2xl rounded-xl mt-12 transition-transform transform hover:scale-105 max-w-3xl mx-auto" target="_blank" action="https://formsubmit.co/info@orichtrading.co.za" method="POST">
        <div className="container-title form-container-title io-item mb-6">
          <h2 className="text-3xl font-semibold text-white">Let&apos;s Talk</h2>
        </div>
        {/* NAME */}
        <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Name:</label>
        <input type="text" tabIndex={0} name="Name" id="username" placeholder="Enter your full name.." minLength={2} required className="block w-full p-3 border border-gray-600 rounded-lg mb-6 bg-gray-900 text-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200" />
        {/* EMAIL */}
        <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email:</label>
        <input type="email" name="Email" id="email" placeholder="Enter your email address.." required className="block w-full p-3 border border-gray-600 rounded-lg mb-6 bg-gray-900 text-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200" />
        {/* TEXTAREA */}
        <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Subject of Enquiry:</label>
        <textarea name="Subject" rows={4} cols={10} minLength={2} placeholder="eg. Bathroom Set Installation" id="message" required className="block w-full p-3 border border-gray-600 rounded-lg mb-6 bg-gray-900 text-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-200"></textarea>
        <button type="submit" className="cta-btn btn-lg inline-flex items-center bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg hover:bg-yellow-600" title="Submit Form">
          Submit Enquiry
          <FaPaperPlane className="icon ml-3 text-2xl" />
        </button>
        {/* form options */}
        <input type="hidden" name="_subject" defaultValue="New submission!" />
        <input type="hidden" name="_autoresponse" defaultValue="We have received your enquiry. We will be in touch shortly. Thank you." />
        <input type="hidden" name="_template" defaultValue="box" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_cc" defaultValue="orichtradingprojects@gmail.com" />
      </form>
      {/* END OF FORM */}
    </div>
  </section>
);

export default ContactSection;
