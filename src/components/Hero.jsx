import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Floating Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f97316]/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#fbbf24]/10 rounded-full blur-[120px] mix-blend-screen" style={{ animation: 'pulse 4s infinite alternate' }}></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center w-full max-w-4xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-[#f97316] blur-2xl opacity-20 rounded-full"></div>
          <img 
            src="/images/logo.png" 
            alt="VIKRAM Logo Large" 
            className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-2 border-[#f97316]/40 glow-box relative z-10"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white uppercase"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            VIKRAM 
          </span>
          <span className="block text-3xl md:text-5xl mt-2 text-[#f97316] glow-text">Clothing</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-gray-400 font-light mb-10 tracking-[0.2em]"
        >
          Style &bull; Strength &bull; Confidence
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-[#f97316] rounded-full hover:bg-[#ea580c] focus:outline-none glow-box overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative text-lg tracking-wider">SHOP NOW</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
