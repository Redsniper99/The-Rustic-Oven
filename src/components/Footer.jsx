import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 w-full">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-playfair mb-4">The Rustic Oven</h3>
            <p className="text-gray-300">
              Experience authentic wood-fired cuisine in the heart of Kandy. Our rustic charm and artisanal approach bring warmth to every dish.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-gray-300 hover:text-secondary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>42 Kandy City Center</li>
              <li>Kandy, Sri Lanka</li>
              <li>+94 77 123 4567</li>
              <li>info@sixway.lk</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 11:00 AM - 11:00 PM</li>
              <li>Saturday - Sunday: 10:00 AM - 12:00 AM</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} SixWay Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 