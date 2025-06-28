import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, GraduationCap } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = translations[language];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">STEM {t.gharbiya}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.home}</Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.about}</Link>
            <Link to="/programs" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.programs}</Link>
            <Link to="/admissions" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.admissions}</Link>
            <Link to="/news" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.news}</Link>
            <Link to="/gallery" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.gallery}</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-blue-800">{t.contact}</Link>
            <button 
              onClick={toggleLanguage} 
              className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800"
            >
              <Globe className="h-5 w-5 mr-1" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleLanguage} className="px-3 py-2 rounded-md hover:bg-blue-800 mr-2">
              <Globe className="h-5 w-5" />
            </button>
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.home}</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.about}</Link>
            <Link to="/programs" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.programs}</Link>
            <Link to="/admissions" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.admissions}</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.news}</Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.gallery}</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-800" onClick={toggleMenu}>{t.contact}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;