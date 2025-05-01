import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Quality Ingredients',
      description: 'We source only the finest ingredients from local farmers and trusted suppliers.',
      icon: '🍅',
    },
    {
      title: 'Expert Chefs',
      description: 'Our team of experienced chefs brings creativity and passion to every dish.',
      icon: '👨‍🍳',
    },
    {
      title: 'Elegant Ambiance',
      description: 'Enjoy your meal in our beautifully designed space with perfect lighting and music.',
      icon: '✨',
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Restaurant Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair mb-6">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              A journey of passion, tradition, and culinary excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section w-full -mt-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-playfair mb-6">Our History</h2>
              <p className="text-text-light mb-6">
                Founded in 2020, The Rustic Oven has quickly become one of Kandy's most beloved dining destinations. Located in the heart of the city at Kandy City Center, we've established ourselves as a culinary landmark that combines traditional wood-fired cooking with modern culinary techniques.
              </p>
              <p className="text-text-light">
                Our commitment to authenticity is reflected in every aspect of our restaurant. From our carefully curated menu that celebrates wood-fired cooking, to our exceptional service that embodies true Sri Lankan hospitality. We source the finest ingredients from local farmers and suppliers, ensuring that every dish tells a story of tradition and passion.
              </p>
            </div>
            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Restaurant Interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Chef Michael',
                  role: 'Head Chef',
                  image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Pastry Chef',
                  image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
                },
                {
                  name: 'David Chen',
                  role: 'Sous Chef',
                  image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-playfair mb-2">{member.name}</h3>
                  <p className="text-text-light">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 