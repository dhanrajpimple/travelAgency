import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronRight, MapPin, Globe } from 'lucide-react'
import { Link } from 'react-router'
import logo from '../assets/Navlog.png'

// Helper function to convert package name to slug
function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const domesticDestinations = [
    'Andaman Tour Packages','Kerala Tour Packages','Rajasthan Tour Packages','Gujarat Tour Packages',
    'Himachal Pradesh Tour Packages','Uttarakhand Tour Packages','Ladakh Tour Packages',
    'Sikkim & West Bengal Tour Packages','Kashmir Tour Packages','Goa Tour Packages'
  ]

  const internationalDestinations = [
    'Sri Lanka Tour Packages','Europe Tour Packages','USA Tour Packages','Bali Tour Packages',
    'Mauritius Tour Packages','Hong Kong Tour Packages','Turkey Tour Packages','Vietnam Tour Packages',
    'Dubai Tour Packages','Thailand Tour Packages','Singapore Tour Packages','Maldives Tour Packages'
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = (menu: string) => {
    setOpenMobileMenu(openMobileMenu === menu ? null : menu)
    setOpenSubMenu(null)
  }

  const handleDesktopDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <>
      <nav className={`fixed w-full top-0 z-[999] transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* Logo Image */}
            <Link to="/" className="flex items-center">
              <div className="bg-[#F5F5F5] rounded-lg">
                <img src={logo} alt="Flexi Global Holidays" className="h-14  lg:h-20 w-auto object-contain" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 text-gray-800 font-medium">

              {/* Dropdown: Holidays */}
              <div className="relative group cursor-pointer">
                <button 
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors duration-200 font-medium" 
                  onClick={() => handleDesktopDropdown('holidays')}
                >
                  Holidays <ChevronDown size={18} className={`${openDropdown === 'holidays' ? 'rotate-180' : ''} transition-transform duration-300`} />
                </button>

                {openDropdown === 'holidays' && (
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-8 w-[500px] border border-gray-100 animate-fadeIn">
                    {/* Domestic */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-base">
                        <MapPin size={18} className="text-[#D4AF37]"/> 
                        <span>Domestic</span>
                      </h3>
                      <ul className="space-y-2">
                        {domesticDestinations.map(item => (
                          <li key={item}>
                            <Link 
                              to={`/packages/${nameToSlug(item)}`}
                              className="text-gray-600 hover:text-[#D4AF37] hover:font-semibold transition-all duration-200 text-sm py-1 block border-l-2 border-transparent hover:border-[#D4AF37] hover:pl-2 pl-0"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* International */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-base">
                        <Globe size={18} className="text-[#D4AF37]"/> 
                        <span>International</span>
                      </h3>
                      <ul className="space-y-2">
                        {internationalDestinations.map(item => (
                          <li key={item}>
                            <Link 
                              to={`/packages/${nameToSlug(item)}`}
                              className="text-gray-600 hover:text-[#D4AF37] hover:font-semibold transition-all duration-200 text-sm py-1 block border-l-2 border-transparent hover:border-[#D4AF37] hover:pl-2 pl-0"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="hover:text-[#D4AF37] transition-colors duration-200 font-medium">About Us</Link>
              <Link to="/trade-fair" className="hover:text-[#D4AF37] transition-colors duration-200 font-medium">Trade Fair</Link>
              <Link to="/cphi-tour-packages" className="hover:text-[#D4AF37] transition-colors duration-200 font-medium">CPHI Milan 2026</Link>
              <Link to="/cphi-package-tour-from-india" className="hover:text-[#D4AF37] transition-colors duration-200 font-medium">CPHI Tour From India</Link>
              <Link to="/hotels" className="hover:text-[#D4AF37] transition-colors duration-200 font-medium">Hotels</Link>

              <Link to="/contact" className="hover:text-[#D4AF37] transition-colors duration-200 font-medium">Contact Us</Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} className="text-gray-800"/> : <Menu size={26} className="text-gray-800"/>}
            </button>
          </div>
        </div>
      </nav>


      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-gradient-to-b from-[#0D1829] via-[#1a2b4a] to-[#0D1829] z-[998] overflow-y-auto animate-slideDown">
          <div className="px-4 py-6 space-y-3">
            
            {/* Holidays Dropdown */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden hover:bg-white/15 transition-all duration-300">
              <button 
                className="flex justify-between items-center w-full px-4 py-4 text-white font-bold text-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200"
                onClick={() => toggleMobileMenu('holidays')}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-[#D4AF37] to-[#FFD700] rounded-full"></span>
                  Holidays
                </span>
                <ChevronDown 
                  size={20} 
                  className={`${openMobileMenu === 'holidays' ? 'rotate-180' : ''} transition-transform duration-300 text-[#D4AF37]`} 
                />
              </button>

              {openMobileMenu === 'holidays' && (
                <div className="px-2 pb-4 space-y-3 animate-fadeInUp">
                  
                  {/* Domestic */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden mx-2 hover:bg-white/15 transition-all duration-300">
                    <button 
                      className="flex justify-between items-center w-full px-4 py-3.5 text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200 rounded-t-xl"
                      onClick={() => setOpenSubMenu(openSubMenu === 'domestic' ? null : 'domestic')}
                    >
                      <span className="flex items-center gap-2.5 font-semibold">
                        <MapPin size={18} className="text-[#D4AF37]"/> 
                        <span>Domestic</span>
                      </span>
                      <ChevronRight 
                        size={18} 
                        className={`${openSubMenu === 'domestic' ? 'rotate-90' : ''} transition-transform duration-300 text-[#D4AF37]`} 
                      />
                    </button>
                    {openSubMenu === 'domestic' && (
                      <div className="px-4 pb-3 space-y-1 animate-fadeInUp">
                        {domesticDestinations.map((item, index) => (
                          <Link 
                            key={item} 
                            to={`/packages/${nameToSlug(item)}`}
                            className="block text-gray-200 hover:text-[#D4AF37] py-2.5 px-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-[#D4AF37] pl-3"
                            style={{ animationDelay: `${index * 20}ms` }}
                            onClick={() => {
                              setIsOpen(false)
                              setOpenMobileMenu(null)
                              setOpenSubMenu(null)
                            }}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* International */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden mx-2 hover:bg-white/15 transition-all duration-300">
                    <button 
                      className="flex justify-between items-center w-full px-4 py-3.5 text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200 rounded-t-xl"
                      onClick={() => setOpenSubMenu(openSubMenu === 'international' ? null : 'international')}
                    >
                      <span className="flex items-center gap-2.5 font-semibold">
                        <Globe size={18} className="text-[#D4AF37]"/> 
                        <span>International</span>
                      </span>
                      <ChevronRight 
                        size={18} 
                        className={`${openSubMenu === 'international' ? 'rotate-90' : ''} transition-transform duration-300 text-[#D4AF37]`} 
                      />
                    </button>
                    {openSubMenu === 'international' && (
                      <div className="px-4 pb-3 space-y-1 animate-fadeInUp">
                        {internationalDestinations.map((item, index) => (
                          <Link 
                            key={item} 
                            to={`/packages/${nameToSlug(item)}`}
                            className="block text-gray-200 hover:text-[#D4AF37] py-2.5 px-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-200 font-medium text-sm border-l-2 border-transparent hover:border-[#D4AF37] pl-3"
                            style={{ animationDelay: `${index * 20}ms` }}
                            onClick={() => {
                              setIsOpen(false)
                              setOpenMobileMenu(null)
                              setOpenSubMenu(null)
                            }}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <Link 
              to="/about" 
              className="block text-white text-lg font-semibold py-3.5 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 active:bg-white/25 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/trade-fair" 
              className="block text-white text-lg font-semibold py-3.5 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 active:bg-white/25 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setIsOpen(false)}
            >
              Trade Fair
            </Link>
            <Link 
              to="/cphi-tour-packages" 
              className="block text-white text-lg font-semibold py-3.5 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 active:bg-white/25 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setIsOpen(false)}
            >
              CPHI Milan 2026
            </Link>
            <Link 
              to="/cphi-package-tour-from-india" 
              className="block text-white text-lg font-semibold py-3.5 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 active:bg-white/25 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setIsOpen(false)}
            >
              CPHI Tour From India
            </Link>
            <Link 
              to="/hotels" 
              className="block text-white text-lg font-semibold py-3.5 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 active:bg-white/25 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setIsOpen(false)}
            >
              Hotels
            </Link>

            <Link 
              to="/contact" 
              className="block text-white text-lg font-semibold py-3.5 px-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#D4AF37]/50 active:bg-white/25 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn { 
          animation: fadeIn 0.3s ease-out; 
        }
        .animate-slideDown { 
          animation: slideDown 0.4s ease-out; 
        }
        .animate-fadeInUp { 
          animation: fadeInUp 0.3s ease-out forwards;
          opacity: 0;
        }
        
        /* Smooth scrolling for mobile menu */
        @media (max-width: 1024px) {
          .lg\\:hidden {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </>
  )
}
