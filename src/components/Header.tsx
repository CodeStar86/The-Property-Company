import { Button } from "./ui/button"
import { Menu, Phone, Mail } from "lucide-react"
import { useState } from "react"
import lionWhite from "../assets/lion_white.png";
interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'rentals', label: 'Rentals' },
    { id: 'sales', label: 'Sales' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavigate = (page: string) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-[#1a237e] border-b border-[#283593] sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-[#0d1442] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:02083409090" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone size={14} />
              020 8340 9090
            </a>
            <a href="mailto:info@thepropertycompany.co.uk" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail size={14} />
              info@thepropertycompany.co.uk
            </a>
          </div>
          <div className="hidden md:block">
            Crouch End & Southgate Offices
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
  onClick={() => handleNavigate('home')}
  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
>
  <img src={lionWhite} alt="The Property Company Logo" className="h-10 w-10" />
  <h1 className="text-2xl font-bold text-white">The Property Company</h1>
</button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-200 font-medium border-b-2 border-blue-200 pb-1'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons with increased spacing */}
          <div className="hidden lg:flex items-center space-x-4 ml-12">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white border-0"
              onClick={() => handleNavigate('contact')}
            >
              Free Valuation
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a237e] bg-transparent"
              onClick={() => handleNavigate('admin')}
            >
              Admin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#283593]">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`text-left transition-colors ${
                    currentPage === item.id
                      ? 'text-blue-200 font-medium'
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-[#283593]">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white w-fit border-0"
                  onClick={() => handleNavigate('contact')}
                >
                  Free Valuation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1a237e] bg-transparent w-fit"
                  onClick={() => handleNavigate('admin')}
                >
                  Admin
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}