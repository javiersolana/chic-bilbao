import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Salones', href: '#salones' },
    { name: 'Tienda', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-chic-black/90 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
           <a href="#" className={`text-2xl font-serif tracking-widest font-bold uppercase ${isScrolled ? 'text-white' : 'text-white'}`}>
             Chic<span className="text-chic-gold">Bilbao</span>
           </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-chic-gold ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4 text-white">
            <div className="relative flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="absolute right-8 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-1 text-sm text-white placeholder-white/60 focus:outline-none focus:border-chic-gold"
                  />
                )}
              </AnimatePresence>
              <Search
                className="w-5 h-5 cursor-pointer hover:text-chic-gold transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-chic-gold transition-colors" />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-chic-black z-40 flex flex-col items-center justify-center space-y-8"
            >
              {/* Mobile Search */}
              <div className="relative w-64 mb-4">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:border-chic-gold"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
              </div>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-white text-xl uppercase tracking-widest font-serif hover:text-chic-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};