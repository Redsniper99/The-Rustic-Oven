import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Starters',
      items: [
        { 
          name: 'Bruschetta', 
          price: '$12', 
          description: 'Toasted bread with fresh tomatoes and basil',
          image: "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        { 
          name: 'Calamari', 
          price: '$16', 
          description: 'Crispy fried squid with marinara sauce',
          image: 'https://images.pexels.com/photos/725997/pexels-photo-725997.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        { 
          name: 'Caprese Salad', 
          price: '$14', 
          description: 'Fresh mozzarella, tomatoes, and basil',
          image: 'https://images.pexels.com/photos/5589059/pexels-photo-5589059.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Mushroom Arancini',
          price: '$15',
          description: 'Crispy risotto balls filled with mushrooms',
          image: 'https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Garlic Prawns',
          price: '$18',
          description: 'Sautéed prawns in garlic butter sauce',
          image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Spring Rolls',
          price: '$13',
          description: 'Crispy vegetable spring rolls',
          image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Beef Carpaccio',
          price: '$17',
          description: 'Thinly sliced raw beef with truffle oil',
          image: 'https://images.pexels.com/photos/8697539/pexels-photo-8697539.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'French Onion Soup',
          price: '$12',
          description: 'Classic soup with gruyere cheese',
          image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Tuna Tartare',
          price: '$19',
          description: 'Fresh tuna with avocado and citrus',
          image: 'https://images.pexels.com/photos/8697514/pexels-photo-8697514.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ],
    },
    {
      title: 'Main Courses',
      items: [
        { 
          name: 'Grilled Salmon', 
          price: '$28', 
          description: 'Fresh salmon with lemon butter sauce',
          image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        { 
          name: 'Beef Tenderloin', 
          price: '$32', 
          description: 'Premium cut with red wine reduction',
          image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        { 
          name: 'Vegetable Risotto', 
          price: '$22', 
          description: 'Creamy arborio rice with vegetables',
          image: 'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Duck Confit',
          price: '$34',
          description: 'Slow-cooked duck leg with vegetables',
          image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Seafood Paella',
          price: '$36',
          description: 'Spanish rice with mixed seafood',
          image: 'https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Rack of Lamb',
          price: '$38',
          description: 'Herb-crusted lamb with mint sauce',
          image: 'https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Lobster Thermidor',
          price: '$42',
          description: 'Lobster in rich cream sauce',
          image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Veal Osso Buco',
          price: '$36',
          description: 'Braised veal shanks with gremolata',
          image: 'https://images.pexels.com/photos/6941017/pexels-photo-6941017.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Truffle Pasta',
          price: '$32',
          description: 'Fresh pasta with black truffle',
          image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ],
    },
    {
      title: 'Desserts',
      items: [
        { 
          name: 'Tiramisu', 
          price: '$10', 
          description: 'Classic Italian coffee dessert',
          image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        { 
          name: 'Chocolate Lava Cake', 
          price: '$12', 
          description: 'Warm cake with vanilla ice cream',
          image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        { 
          name: 'Crème Brûlée', 
          price: '$11', 
          description: 'French custard with caramelized sugar',
          image: 'https://images.pexels.com/photos/6163263/pexels-photo-6163263.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Apple Tart',
          price: '$10',
          description: 'Caramelized apples in buttery pastry',
          image: 'https://images.pexels.com/photos/6341599/pexels-photo-6341599.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Cheesecake',
          price: '$11',
          description: 'New York style with berry compote',
          image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Panna Cotta',
          price: '$9',
          description: 'Italian cream dessert with berries',
          image: 'https://images.pexels.com/photos/6126306/pexels-photo-6126306.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Profiteroles',
          price: '$12',
          description: 'Choux pastry with chocolate sauce',
          image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Mango Sorbet',
          price: '$8',
          description: 'Refreshing mango ice dessert',
          image: 'https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
          name: 'Chocolate Truffles',
          price: '$10',
          description: 'Assorted handmade chocolate truffles',
          image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
      ],
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(() => {
    const initialState = {};
    menuCategories.forEach(category => {
      initialState[category.title] = 0;
    });
    return initialState;
  });

  const [direction, setDirection] = useState({});
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = (category) => {
    setDirection(prev => ({ ...prev, [category]: 1 }));
    setCurrentIndex(prev => ({
      ...prev,
      [category]: (prev[category] + 1) % menuCategories.find(c => c.title === category).items.length
    }));
  };

  const handlePrev = (category) => {
    setDirection(prev => ({ ...prev, [category]: -1 }));
    setCurrentIndex(prev => ({
      ...prev,
      [category]: (prev[category] - 1 + menuCategories.find(c => c.title === category).items.length) % menuCategories.find(c => c.title === category).items.length
    }));
  };

  const getVisibleItems = (items, startIndex = 0) => {
    if (!items || !Array.isArray(items)) return [];
    
    const result = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (startIndex + i) % items.length;
      result.push(items[index]);
    }
    return result;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <div className="container relative h-full flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-playfair text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Menu
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our carefully crafted dishes made with the finest ingredients
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {menuCategories.map((category) => (
            <div key={category.title} className="mb-32 last:mb-0">
              <h2 className="text-4xl font-playfair text-primary mb-16 text-center">
                {category.title}
              </h2>
              
              <div className="relative">
                <div className="overflow-hidden">
                  <AnimatePresence
                    initial={false}
                    custom={direction[category.title]}
                    mode="wait"
                  >
                    <motion.div
                      key={currentIndex[category.title]}
                      custom={direction[category.title]}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          handleNext(category.title);
                        } else if (swipe > swipeConfidenceThreshold) {
                          handlePrev(category.title);
                        }
                      }}
                      className={`grid gap-8 ${itemsPerView === 1 ? 'grid-cols-1' : 'grid-cols-3'}`}
                    >
                      {getVisibleItems(category.items, currentIndex[category.title] || 0).map((item, idx) => (
                        item && (
                          <motion.div
                            key={`${item.name}-${idx}`}
                            className="group relative bg-[#FAF9F6] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5,
                              delay: idx * 0.1,
                              ease: "easeOut"
                            }}
                            whileHover={{ 
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <div className="aspect-square overflow-hidden">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-0 left-0 right-0 p-6">
                                <motion.div 
                                  className="bg-white/95 rounded-lg p-4"
                                  initial={{ y: 20, opacity: 0 }}
                                  whileHover={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <h3 className="text-xl font-playfair mb-2 text-primary">{item.name}</h3>
                                  <p className="text-gray-700 mb-2 text-sm">{item.description}</p>
                                  <span className="text-secondary font-medium text-lg">{item.price}</span>
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        )
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handlePrev(category.title)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transform transition-all duration-300 z-10"
                  aria-label="Previous slide"
                >
                  <FiChevronLeft size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleNext(category.title)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-primary p-2 rounded-full shadow-lg transform transition-all duration-300 z-10"
                  aria-label="Next slide"
                >
                  <FiChevronRight size={24} />
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu; 