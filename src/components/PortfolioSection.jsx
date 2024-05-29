const PortfolioSection = () => (
  <section className="bg-white py-12">
    <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Our Projects</h2>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/path-to-project1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
        <div className="p-6">
          <p className="text-lg font-semibold text-gray-800 mb-4">Electrical Installation at XYZ</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
      <div className="portfolio-item bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/path-to-project2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
        <div className="p-6">
          <p className="text-lg font-semibold text-gray-800 mb-4">Plumbing Work at ABC</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
