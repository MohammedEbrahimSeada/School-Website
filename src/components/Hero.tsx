import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
          alt="STEM Education" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-8">{t.heroSubtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
              {t.learnMore}
            </Link>
            <Link to="/admissions" className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-300">
              {t.applyNow}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;