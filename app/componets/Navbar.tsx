import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logoImage from '~/assets/logo.png'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const indiaHolidays = [
    'Andaman Tour Packages',
    'Kerala Tour Packages',
    'Rajasthan Tour Packages',
    'Gujarat Tour Packages',
    'Himachal Pradesh Tour Packages',
    'Uttarakhand Tour Packages',
    'Ladakh Tour Packages',
    'Sikkim & West Bengal Tour Packages',
    'Kashmir Tour Packages',
    'Goa Tour Packages'
  ]

  const internationalHolidays = [
    'Sri Lanka Tour Packages',
    'Europe Tour Packages',
    'USA Tour Packages',
    'Bali Tour Packages',
    'Mauritius Tour Packages',
    'Hong Kong Tour Packages',
    'Turkey Tour Packages',
    'Vietnam Tour Packages',
    'Dubai Tour Packages',
    'Thailand Tour Packages',
    'Singapore Tour Packages',
    'Maldives Tour Packages'
  ]

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <nav className={`sticky top-0 z-[999] transition-all duration-300 bg-white ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center animate-fadeIn">
            <img 
              src={logoImage} 
              alt="Flexi Global Holidays" 
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* India Holidays Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('india')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium"
                onClick={() => setOpenDropdown(openDropdown === 'india' ? null : 'india')}
              >
                India Holidays
                <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'india' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'india' && (
                <div 
                  className="absolute top-full left-0 pt-2 w-72 animate-fadeIn z-[100]"
                  onMouseEnter={() => setOpenDropdown('india')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white shadow-2xl rounded-xl py-3 border border-gray-100 max-h-96 overflow-y-auto">
                    {indiaHolidays.map((item) => (
                      <Link
                        key={item}
                        to={`/packages/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-5 py-2.5 text-sm text-[#4B5563] hover:bg-[#FAF8F3] hover:text-[#0066CC] hover:pl-6 transition-all duration-200 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(null);
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* International Holidays Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('international')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium"
                onClick={() => setOpenDropdown(openDropdown === 'international' ? null : 'international')}
              >
                International Holidays
                <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'international' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'international' && (
                <div 
                  className="absolute top-full left-0 pt-2 w-72 animate-fadeIn z-[100]"
                  onMouseEnter={() => setOpenDropdown('international')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-white shadow-2xl rounded-xl py-3 border border-gray-100 max-h-96 overflow-y-auto">
                    {internationalHolidays.map((item) => (
                      <Link
                        key={item}
                        to={`/packages/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-5 py-2.5 text-sm text-[#4B5563] hover:bg-[#FAF8F3] hover:text-[#0066CC] hover:pl-6 transition-all duration-200 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(null);
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium">
              About Us
            </Link>
            <Link to="/trade-fair" className="text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium">
              Trade Fair
            </Link>
            <Link to="/hotels" className="text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium">
              Hotels
            </Link>
            <Link to="/mice" className="text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium">
              MICE
            </Link>
            <Link to="/visa" className="text-[#1A2B4A] hover:text-[#0066CC] transition-colors duration-200 font-medium">
              Visa
            </Link>
            

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-6 py-2.5 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={16} />
              Plan Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-[#1A2B4A] sm:w-7 sm:h-7" /> : <Menu size={24} className="text-[#1A2B4A] sm:w-7 sm:h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-14 sm:top-16 md:top-20 bg-[#1A2B4A] bg-opacity-98 backdrop-blur-md z-40 animate-fadeIn">
            <div className="h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4 sm:py-6">
              <div className="flex flex-col gap-1">
                {/* India Holidays Mobile */}
                <div className="border-b border-white/10 pb-2 mb-2">
                  <button
                    className="flex items-center justify-between w-full text-white py-3 font-medium"
                    onClick={() => toggleDropdown('mobile-india')}
                  >
                    India Holidays
                    <ChevronDown size={20} className={`transition-transform duration-200 ${openDropdown === 'mobile-india' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'mobile-india' && (
                    <div className="pl-4 mt-2 space-y-1 animate-fadeIn">
                      {indiaHolidays.map((item, index) => (
                        <Link
                          key={item}
                          to={`/packages/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-[#FAF8F3] py-2 text-sm hover:text-[#D4AF37] transition-colors"
                          style={{ animationDelay: `${index * 0.05}s` }}
                          onClick={() => {
                            setIsOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* International Holidays Mobile */}
                <div className="border-b border-white/10 pb-2 mb-2">
                  <button
                    className="flex items-center justify-between w-full text-white py-3 font-medium"
                    onClick={() => toggleDropdown('mobile-international')}
                  >
                    International Holidays
                    <ChevronDown size={20} className={`transition-transform duration-200 ${openDropdown === 'mobile-international' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'mobile-international' && (
                    <div className="pl-4 mt-2 space-y-1 animate-fadeIn">
                      {internationalHolidays.map((item, index) => (
                        <Link
                          key={item}
                          to={`/packages/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-[#FAF8F3] py-2 text-sm hover:text-[#D4AF37] transition-colors"
                          style={{ animationDelay: `${index * 0.05}s` }}
                          onClick={() => {
                            setIsOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/about" className="text-white py-3 font-medium border-b border-white/10 hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link to="/trade-fair" className="text-white py-3 font-medium border-b border-white/10 hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(false)}>
                  Trade Fair
                </Link>
                <Link to="/hotels" className="text-white py-3 font-medium border-b border-white/10 hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(false)}>
                  Hotels
                </Link>
                <Link to="/mice" className="text-white py-3 font-medium border-b border-white/10 hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(false)}>
                  MICE
                </Link>
                <Link to="/visa" className="text-white py-3 font-medium border-b border-white/10 hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(false)}>
                  Visa
                </Link>
              
              
                <Link to="/terms" className="text-white py-3 font-medium hover:text-[#D4AF37] transition-colors" onClick={() => setIsOpen(false)}>
                  Terms of Use
                </Link>

                {/* Mobile CTA */}
                <Link 
                  to="/contact" 
                  className="mt-6 bg-gradient-to-r from-[#D4AF37] to-[#C9A634] text-white px-6 py-4 rounded-full font-semibold text-center flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  Plan Your Journey
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}