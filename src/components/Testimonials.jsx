import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "An exceptional dining experience! The attention to detail in every dish is remarkable. The flavors are perfectly balanced, and the presentation is simply stunning.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "The best restaurant in town! The service is impeccable, and the food is consistently outstanding. I've been coming here for years and it never disappoints.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      quote: "A culinary masterpiece! The creativity in their dishes is unmatched. Every visit feels like a new adventure for my taste buds.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-primary">
            What Our Guests Say
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Discover why our guests keep coming back for more
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-full" />
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-secondary text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-playfair mb-4 text-primary">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{testimonials[currentIndex].name}</h3>
                      <p className="text-text-light">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-secondary' : 'bg-primary/20'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 