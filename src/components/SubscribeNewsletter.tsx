import React, { useState, useContext } from 'react';
import { Mail } from 'lucide-react';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const SubscribeNewsletter: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };
  
  return (
    <div className="bg-blue-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t.subscribe}</h2>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Stay updated with the latest news, events, and announcements from STEM Gharbiya.' 
              : 'ابق على اطلاع بأحدث الأخبار والفعاليات والإعلانات من STEM الغربية.'}
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              required
              className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? t.loading : t.subscribeButton}
            </button>
          </form>
          
          {submitStatus === 'success' && (
            <div className="mt-4 p-2 bg-green-700 text-white rounded-md max-w-md mx-auto">
              {language === 'en' 
                ? 'Thank you for subscribing to our newsletter!' 
                : 'شكرًا لاشتراكك في نشرتنا الإخبارية!'}
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mt-4 p-2 bg-red-700 text-white rounded-md max-w-md mx-auto">
              {t.error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;