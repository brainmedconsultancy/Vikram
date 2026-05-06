import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Oversized Black Hoodie',
    price: '₹299',
    description: 'Premium heavyweight cotton blend for ultimate comfort and streetwear style.',
    image: '/images/hoodie.png',
  },
  {
    id: 2,
    name: 'Streetwear T-Shirt',
    price: '₹299',
    description: 'Minimalist drop-shoulder tee designed for everyday modern confidence.',
    image: '/images/tshirt.png',
  },
  {
    id: 3,
    name: 'Urban Jacket',
    price: '₹299',
    description: 'Sleek dark-themed utility jacket, weather-resistant and stylish.',
    image: '/images/jacket.png',
  },
  {
    id: 4,
    name: 'T-Shirt',
    price: '₹299',
    description: 'Minimalist drop-shoulder tee designed for everyday modern confidence.',
    image: '/images/cargo.png',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Products = () => {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-white"
        >
          Latest <span className="text-[#f97316]">Arrivals</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 w-24 bg-[#f97316] mx-auto rounded-full glow-box"
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-[#111111] to-[#0a0a0a]">
              <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-[#f97316] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow font-light leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <span className="text-2xl font-bold text-white">{product.price}</span>
                <button className="bg-white/10 hover:bg-[#f97316] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:glow-box hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] active:scale-95 text-sm uppercase tracking-wider">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Products;
