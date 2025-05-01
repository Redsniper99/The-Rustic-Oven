import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="hero-overlay" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <motion.div
          className="container relative z-20 text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair mb-4 md:mb-6">
            The Rustic Oven
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            Experience authentic wood-fired cuisine in the heart of Kandy. Our rustic charm and artisanal approach bring warmth to every dish.
          </p>
          <Link to="/menu">
            <motion.button
              className="btn bg-secondary text-primary hover:bg-primary hover:text-secondary border-2 border-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Our Menu
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* We Are the Best Section */}
      <section className="py-16 md:py-20 bg-light">
        <div className="container px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-primary mb-4 md:mb-6">
              We Are the Best
            </h2>
            <p className="text-lg sm:text-xl text-text-light max-w-3xl mx-auto px-4">
              Experience culinary excellence with our award-winning dishes and exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Stats Grid */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "Michelin Star", value: "3" },
                  { label: "Years of Excellence", value: "15+" },
                  { label: "Happy Customers", value: "50K+" },
                  { label: "Awards Won", value: "25+" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl sm:text-3xl font-playfair text-primary mb-2">{stat.value}</p>
                    <p className="text-sm sm:text-base text-text-light">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section bg-light w-full">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Signature Dishes</h2>
            <p className="section-subtitle">
              Indulge in our carefully crafted dishes made with the finest ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
                title: "Truffle Pasta",
                description: "Handmade pasta with black truffle and parmesan cream sauce"
              },
              {
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                title: "Grilled Salmon",
                description: "Fresh Atlantic salmon with lemon butter and seasonal vegetables"
              },
              {
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
                title: "Chocolate Soufflé",
                description: "Warm chocolate soufflé with vanilla bean ice cream"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform -skew-x-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%, 10% 0, 20% 0, 30% 0, 40% 0, 50% 0, 60% 0, 70% 0, 80% 0, 90% 0, 100% 0, 100% 10%, 100% 20%, 100% 30%, 100% 40%, 100% 50%, 100% 60%, 100% 70%, 100% 80%, 100% 90%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 50% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 100%, 0 100%, 0 90%, 0 80%, 0 70%, 0 60%, 0 50%, 0 40%, 0 30%, 0 20%, 0 10%, 0 0)' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <Testimonials />

      {/* About Section */}
      <section className="section w-full bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-white">Our Story</h2>
              <p className="text-gray-300 mb-8">
                Founded in 2020, The Rustic Oven has become Kandy's premier destination for authentic wood-fired cuisine. Located in the heart of Kandy City Center, we combine traditional cooking methods with modern culinary excellence to create unforgettable dining experiences.
              </p>
              <Link to="/about">
                <motion.button
                  className="btn bg-secondary text-primary hover:bg-white hover:text-primary border-2 border-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Restaurant Interior"
                className="w-full h-full object-cover transform -skew-x-6"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%, 10% 0, 20% 0, 30% 0, 40% 0, 50% 0, 60% 0, 70% 0, 80% 0, 90% 0, 100% 0, 100% 10%, 100% 20%, 100% 30%, 100% 40%, 100% 50%, 100% 60%, 100% 70%, 100% 80%, 100% 90%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 50% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 100%, 0 100%, 0 90%, 0 80%, 0 70%, 0 60%, 0 50%, 0 40%, 0 30%, 0 20%, 0 10%, 0 0)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 