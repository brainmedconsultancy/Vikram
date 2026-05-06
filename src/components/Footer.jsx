import { FaInstagram, FaTwitter, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.png" 
                alt="VIKRAM Logo" 
                className="h-12 w-12 rounded-full object-cover border border-white/10 group-hover:border-[#f97316] transition-colors" 
              />
              <span className="text-2xl font-bold tracking-widest text-white group-hover:text-[#f97316] transition-colors">
                VIKRAM
              </span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Elevating modern streetwear with premium quality and unmatched style.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#f97316] transition-all duration-300 transform hover:-translate-y-1">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#f97316] transition-all duration-300 transform hover:-translate-y-1">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#f97316] transition-all duration-300 transform hover:-translate-y-1">
              <FaTiktok size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#f97316] transition-all duration-300 transform hover:-translate-y-1">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {currentYear} VIKRAM Clothing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
