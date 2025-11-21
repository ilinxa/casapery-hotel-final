import  { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
// import { brandData, navegationData } from '../data/navigationData'
import LogoText from './common/LogoText'
import ContactBtn from './common/ContactBtn'
import NavBarLink from './NavBarLink'
import LanguageSwitcher from './LanguageSwitcher'
import Cta from './common/Cta'
import { HeaderDataType } from '../types/types'



const Navigation = (data: HeaderDataType) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // console.log("CTA data", data.navItems)

  useEffect(() => {
    // console.log("data", data)
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Update blur background state
      setIsScrolled(currentScrollY > 50)
      // Smart scroll behavior
      if (currentScrollY < 100) {
        // Always show navigation at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navigation
        setIsVisible(false)
        setIsMobileMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navigation
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled 
            ? 'backdrop-blur-md bg-teal-600/90 border-b border-white/20 shadow-lg' 
            : 'backdrop-blur-md bg-teal-600/40'
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          {data.logo && 
          <LogoText 
          name={data.logo.label}   
          image={data.logo.logo.url}
          className="text-white"
          />
        }

          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Navigation */}
            { data && data.navItems &&
              data.navItems.map((item, index) => (   
                <NavBarLink 
                  key={index}
                  navItems={item}
                  onClick={closeMobileMenu} />
              ))
            }
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className='hidden md:flex gap-5'>
              <LanguageSwitcher />
                              {
                  data && data.cta &&

                  <ContactBtn whatsappnumber={data.cta.whatsApp_number}  title={data.cta.label}  />
                  
                }
            {/* <ContactBtn title="Book Now" whatsappnumber='905522407770'  /> */}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out
            ${isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }
          `}
        >
          <div className="backdrop-blur-md bg-black/40 border-b border-white/20 shadow-xl mx-6 mt-2 rounded-xl overflow-hidden">
            <div className="px-6 py-4 space-y-4">
              {
                // Mobile menu links
                data && data.navItems &&
                data.navItems.map((link, index) => (
                <NavBarLink 
                  key={index}
                  navItems={link}
                  onClick={closeMobileMenu} />

                ))
              }
            
              <div className="pt-4 border-t border-white/20  flex justify-between items-center">
                <LanguageSwitcher />
                {
                  data && data.cta &&

                  <Cta cta={data.cta}   />
                  
                }
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  )
}

export default Navigation
