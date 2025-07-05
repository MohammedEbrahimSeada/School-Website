import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, GraduationCap, LogIn, UserPlus } from 'lucide-react';
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
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.home}</Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.about}</Link>
            <Link to="/programs" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.programs}</Link>
            <Link to="/admissions" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.admissions}</Link>
            <Link to="/news" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.news}</Link>
            <Link to="/gallery" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.gallery}</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">{t.contact}</Link>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage} 
              className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300"
            >
              <Globe className="h-5 w-5 mr-1" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4 border-l border-blue-700 pl-4">
              <Link 
                to="/login" 
                className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300"
              >
                <LogIn className="h-4 w-4 mr-1" />
                {language === 'en' ? 'Login' : 'دخول'}
              </Link>
              <Link 
                to="/register" 
                className="flex items-center px-4 py-2 bg-yellow-500 text-blue-900 rounded-md hover:bg-yellow-400 transition duration-300 font-medium"
              >
                <UserPlus className="h-4 w-4 mr-1" />
                {language === 'en' ? 'Register' : 'تسجيل'}
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleLanguage} className="px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300">
              <Globe className="h-5 w-5" />
            </button>
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 transition duration-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-blue-800">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.home}</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.about}</Link>
            <Link to="/programs" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.programs}</Link>
            <Link to="/admissions" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.admissions}</Link>
            <Link to="/news" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.news}</Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.gallery}</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>{t.contact}</Link>
            
            {/* Mobile Auth Buttons */}
            <div className="border-t border-blue-700 pt-3 mt-3">
              <Link 
                to="/login" 
                className="flex items-center px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300" 
                onClick={toggleMenu}
              >
                <LogIn className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Login' : 'دخول'}
              </Link>
              <Link 
                to="/register" 
                className="flex items-center px-3 py-2 mt-2 bg-yellow-500 text-blue-900 rounded-md hover:bg-yellow-400 transition duration-300 font-medium" 
                onClick={toggleMenu}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Register' : 'تسجيل'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;