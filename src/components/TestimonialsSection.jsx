import { FaQuoteLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
        <Slider {...settings} className="testimonial-slider">
          <div className="testimonial-item bg-gradient-to-b from-yellow-200 to-yellow-100 shadow-md rounded-lg overflow-hidden p-8 flex items-center text-center lg:rounded-lg">
            <div className="mr-6">
              <FaQuoteLeft className="text-4xl text-yellow-500" />
            </div>
            <div>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">&ldquo;VV Electrical provided exceptional service. Their attention to detail and professionalism exceeded our expectations.&rdquo;</p>
              <h4 className="text-lg font-semibold text-gray-800">- Jane Doe</h4>
            </div>
          </div>
          <div className="testimonial-item bg-gradient-to-b from-yellow-200 to-yellow-100 shadow-md rounded-lg overflow-hidden p-8 flex items-center text-center lg:rounded-lg">
            <div className="mr-6">
              <FaQuoteLeft className="text-4xl text-yellow-500" />
            </div>
            <div>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">&ldquo;We were impressed by the quality of work delivered by VV Electrical. Their expertise and efficiency are commendable.&rdquo;</p>
              <h4 className="text-lg font-semibold text-gray-800">- John Smith</h4>
            </div>
          </div>
          {/* Add more testimonial items as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
