import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import { CONFIG } from '~/config/constants'
import logoImage from '~/assets/logo.jpg'

export default function Footer() {

  return (
    <footer className="bg-[#1A2B4A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <div>
              <img 
                src={logoImage} 
                alt="Leisure N More" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-3 sm:mb-4"
              />
              <p className="text-[#FAF8F3]/80 italic text-xs sm:text-sm leading-relaxed">
                "Creating Memories Beyond Destinations"
              </p>
              <p className="text-white/70 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
                Your trusted partner for unforgettable journeys across the globe.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3">
              <a 
                href="https://instagram.com/leisurenmore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://facebook.com/leisurenmore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://twitter.com/leisurenmore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="Twitter"
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/leisurenmore" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:scale-110 active:scale-95 transition-all duration-300 touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Connect with Us</h3>
            <div className="space-y-4 sm:space-y-6">
              {/* Corporate Office */}
              <div className="bg-[#FAF8F3]/5 border-l-4 border-[#D4AF37] p-4 rounded-r-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-white/60 mb-1">Corporate Office - Noida</p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {CONFIG.CORPORATE_OFFICE.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="bg-[#FAF8F3]/5 border-l-4 border-[#D4AF37] p-4 rounded-r-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-white/60 mb-1">Branch Office - Jalgaon</p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {CONFIG.BRANCH_OFFICE.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Our Services', link: '/services' },
                { name: 'Destinations', link: '/destinations' },
                { name: 'Trade Fairs', link: '/trade-fair' },
                { name: 'Hotels', link: '/hotels' },
                { name: 'MICE', link: '/mice' },
                { name: 'Visa Services', link: '/visa' },
                { name: 'Contact Us', link: '/contact' },
                { name: 'Pay Online', link: '/pay-online' },
                { name: 'Terms of Use', link: '/terms' },
                { name: 'Sitemap', link: '/sitemap' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-[#FAF8F3]/80 hover:text-[#D4AF37] hover:translate-x-1 inline-block transition-all duration-200 text-sm group"
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.name}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Contact Information</h3>

            {/* Phone Numbers */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="bg-[#FAF8F3]/5 border-l-4 border-[#D4AF37] p-4 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Phone className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-white/60 mb-1">Call Us</p>
                    <a href={`tel:${CONFIG.PHONE_PRIMARY}`} className="text-white font-semibold text-sm hover:text-[#D4AF37] transition-colors">
                      {CONFIG.PHONE_PRIMARY}
                    </a>
                    <br />
                    <a href={`tel:${CONFIG.PHONE_SECONDARY}`} className="text-white font-semibold text-sm hover:text-[#D4AF37] transition-colors">
                      {CONFIG.PHONE_SECONDARY}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF8F3]/5 border-l-4 border-[#D4AF37] p-4 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Mail className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email Us</p>
                    <a href={`mailto:${CONFIG.EMAIL}`} className="text-white font-semibold text-sm hover:text-[#D4AF37] transition-colors break-all">
                      {CONFIG.EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-medium">
                🔒 Secure Booking
              </span>
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-medium">
                💬 24/7 Support
              </span>
              <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-medium">
                💯 Best Price
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 bg-[#1A2B4A]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-white/60 text-center md:text-left">
              © Dhanraj Pimple 2025 All rights reserved.
            </p>
            <p className="text-white/60 text-center md:text-right">
              Dhanraj Pimple
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}