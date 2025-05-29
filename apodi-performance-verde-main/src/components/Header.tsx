
import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalidadesOpen, setIsModalidadesOpen] = useState(false);
  const location = useLocation();

  const modalidades = [
    { label: 'Musculação', href: '/musculacao' },
    { label: 'Natação', href: '/natacao' },
    { label: 'Luta', href: '/luta' },
  ];

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Modalidades', 
      href: '#modalidades',
      hasDropdown: true,
      submenu: modalidades 
    },
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  // Smooth scroll function
  const smoothScrollToSection = (targetId: string) => {
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = 80; // Fixed header height
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      smoothScrollToSection(href);
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header-fixed fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-[#5D9C31]" />
            <span className="text-2xl font-bold">
              <span className="text-[#5D9C31]">P</span>
              <span className="text-black">ERFORMANCE</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative dropdown">
                {item.hasDropdown ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setIsModalidadesOpen(true)}
                    onMouseLeave={() => {
                      // Delay before hiding
                      setTimeout(() => setIsModalidadesOpen(false), 500);
                    }}
                  >
                    <button 
                      className={`flex items-center space-x-1 transition-colors duration-300 font-medium dropdown-trigger ${
                        location.pathname.includes('/musculacao') || 
                        location.pathname.includes('/natacao') || 
                        location.pathname.includes('/luta')
                          ? 'text-[#5D9C31]' 
                          : 'text-gray-700 hover:text-[#5D9C31]'
                      }`}
                      onClick={(e) => handleNavClick(item.href, e)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    <div 
                      className={`dropdown-menu absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 transition-all duration-300 ease-out ${
                        isModalidadesOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsModalidadesOpen(true)}
                      onMouseLeave={() => {
                        setTimeout(() => setIsModalidadesOpen(false), 500);
                      }}
                    >
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className={`block px-4 py-2 transition-colors ${
                            location.pathname === subItem.href
                              ? 'text-[#5D9C31] bg-[#5D9C31]/10'
                              : 'text-gray-700 hover:bg-[#5D9C31]/10 hover:text-[#5D9C31]'
                          }`}
                          onClick={() => setIsModalidadesOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`transition-colors duration-300 font-medium ${
                      location.pathname === item.href || 
                      (item.href === '/' && location.pathname === '/')
                        ? 'text-[#5D9C31]' 
                        : 'text-gray-700 hover:text-[#5D9C31]'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            
            <button className="bg-[#5D9C31] text-white px-6 py-2 rounded-lg hover:bg-[#4a7d28] transition-colors duration-300 font-medium">
              Área do Aluno
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-[#5D9C31] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-700 hover:text-[#5D9C31] transition-colors duration-300 font-medium w-full text-left"
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block text-gray-600 hover:text-[#5D9C31] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-[#5D9C31] text-white px-6 py-2 rounded-lg hover:bg-[#4a7d28] transition-colors duration-300 font-medium text-left">
                Área do Aluno
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
