import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">STEM {t.gharbiya}</span>
            </div>
            <p className="text-blue-200 mb-4">{t.footerTagline}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white">{t.home}</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white">{t.about}</Link></li>
              <li><Link to="/programs" className="text-blue-200 hover:text-white">{t.programs}</Link></li>
              <li><Link to="/admissions" className="text-blue-200 hover:text-white">{t.admissions}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.resources}</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-blue-200 hover:text-white">{t.news}</Link></li>
              <li><Link to="/gallery" className="text-blue-200 hover:text-white">{t.gallery}</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white">{t.contact}</Link></li>
              <li><a href="#" className="text-blue-200 hover:text-white">{t.faq}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contactUs}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-200">{t.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-200">+20 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-200">info@stemgharbiya.edu.eg</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} STEM {t.gharbiya}. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;