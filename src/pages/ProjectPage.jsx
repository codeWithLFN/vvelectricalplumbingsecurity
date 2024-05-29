import Header from '../components/Header.jsx';
import Footer from '../components/FooterSection.jsx';
import Contact from '../components/ContactSection.jsx';

const ProjectSection = () => {
  return (
    <div>
      <Header />
      <section id="projects" className="py-20">
        <header className="section-title io-item">
          <h2 title="Orich projects" className="text-3xl font-semibold">Projects</h2>
        </header>

        {/* PLUMBING */}
        <div className="gallery" id="plumbing">
          <div className="gallery-title">
            <h3 className="text-xl font-semibold">Plumbing</h3>
          </div>
          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div className="project-item" key={`plumbing-${index}`}>
                <figure className="project-img io-item">
                  <img src={`../projects/plumbing-${index}.jpg`} loading="lazy" alt="Plumbing project" />
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* ELECTRICAL */}
        <div className='gallery' id='electrical'>
          <div className="gallery-title">
            <h3 className="text-xl font-semibold">Electrical</h3>
          </div>
          <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div className="project-item" key={`electrical-${index}`}>
                <figure className="project-img io-item">
                  <img src={`../projects/electrical-${index}.jpg`} loading="lazy" alt="Electrical project" />
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Add more project sections here */}

      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectSection;
