import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, excerpt, date, image, category }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link to={`/news/${id}`} className="text-blue-600 font-medium hover:text-blue-800">
          {t.readMore} →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;