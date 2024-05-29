const HeroSection = () => (
  <section id="home" className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://orichtrading.co.za/img/hero_800.webp" alt="Hero Background" className="object-cover object-center h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
    </div>
    <div className="relative z-10 text-center">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Elevate Your Space</h2>
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-2xl mx-auto">Experience the epitome of luxury with our cutting-edge solutions</p>
      <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full font-semibold text-xl transition duration-300 ease-in-out hover:bg-yellow-600 hover:text-white">
        <a href="#contact">Get Started</a>
      </button>
    </div>
  </section>
);

export default HeroSection;
