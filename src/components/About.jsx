import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fbbf24]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 rounded-3xl"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm font-bold tracking-[0.3em] text-[#f97316] uppercase mb-6"
          >
            Our Philosophy
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-200"
          >
            <span className="font-semibold text-white">VIKRAM</span> is a modern streetwear-inspired clothing brand focused on <span className="italic text-[#fbbf24]">confidence</span>, <span className="italic text-[#fbbf24]">style</span>, and <span className="italic text-[#fbbf24]">comfort</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
