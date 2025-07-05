import React, { useState, useContext } from 'react';
import { Calendar, Clock, MapPin, Search, Filter, ChevronDown } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import SubscribeNewsletter from '../components/SubscribeNewsletter';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const News: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample news data
  const newsData = [
    {
      id: '1',
      title: language === 'en' ? 'STEM Gharbiya Students Win National Science Competition' : 'طلاب STEM الغربية يفوزون بمسابقة العلوم الوطنية',
      excerpt: language === 'en' 
        ? 'Our students showcased exceptional talent and innovation at the National Science Competition, securing first place in three categories including physics, chemistry, and environmental science.'
        : 'أظهر طلابنا موهبة وابتكارًا استثنائيين في مسابقة العلوم الوطنية، وحصلوا على المركز الأول في ثلاث فئات بما في ذلك الفيزياء والكيمياء وعلوم البيئة.',
      date: '2025-03-15',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Achievements' : 'إنجازات'
    },
    {
      id: '2',
      title: language === 'en' ? 'New Robotics Lab Opens at STEM Gharbiya' : 'افتتاح مختبر الروبوتات الجديد في STEM الغربية',
      excerpt: language === 'en' 
        ? 'We are excited to announce the opening of our state-of-the-art robotics laboratory, equipped with the latest technology and tools for hands-on learning experiences.'
        : 'يسعدنا أن نعلن عن افتتاح مختبر الروبوتات المتطور لدينا، المجهز بأحدث التقنيات والأدوات لتجارب التعلم العملي.',
      date: '2025-03-10',
      image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Facilities' : 'مرافق'
    },
    {
      id: '3',
      title: language === 'en' ? 'STEM Gharbiya Partners with MIT for Exchange Program' : 'STEM الغربية تتشارك مع MIT لبرنامج التبادل',
      excerpt: language === 'en' 
        ? 'We are proud to announce our new partnership with Massachusetts Institute of Technology, offering our students unique opportunities for international collaboration and research.'
        : 'نحن فخورون بالإعلان عن شراكتنا الجديدة مع معهد ماساتشوستس للتكنولوجيا، مما يوفر لطلابنا فرصًا فريدة للتعاون الدولي والبحث.',
      date: '2025-03-05',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Partnerships' : 'شراكات'
    },
    {
      id: '4',
      title: language === 'en' ? 'Student Research Project Wins International Recognition' : 'مشروع بحثي للطلاب يحصل على اعتراف دولي',
      excerpt: language === 'en' 
        ? 'A groundbreaking research project on renewable energy solutions developed by our Grade 12 students has been recognized at the International Youth Science Forum.'
        : 'حصل مشروع بحثي رائد حول حلول الطاقة المتجددة طوره طلاب الصف الثاني عشر لدينا على اعتراف في المنتدى الدولي لعلوم الشباب.',
      date: '2025-02-28',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Research' : 'بحث'
    },
    {
      id: '5',
      title: language === 'en' ? 'STEM Gharbiya Hosts Regional Mathematics Olympiad' : 'STEM الغربية تستضيف أولمبياد الرياضيات الإقليمي',
      excerpt: language === 'en' 
        ? 'Our school proudly hosted the Regional Mathematics Olympiad, bringing together talented students from across the region to compete in challenging mathematical problems.'
        : 'استضافت مدرستنا بفخر أولمبياد الرياضيات الإقليمي، حيث جمعت الطلاب الموهوبين من جميع أنحاء المنطقة للتنافس في مسائل رياضية صعبة.',
      date: '2025-02-20',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Events' : 'فعاليات'
    },
    {
      id: '6',
      title: language === 'en' ? 'Alumni Success Story: From STEM Gharbiya to NASA' : 'قصة نجاح خريج: من STEM الغربية إلى ناسا',
      excerpt: language === 'en' 
        ? 'Meet Dr. Sarah Ahmed, a STEM Gharbiya alumna who now works as a research scientist at NASA, contributing to groundbreaking space exploration missions.'
        : 'تعرف على الدكتورة سارة أحمد، خريجة STEM الغربية التي تعمل الآن كعالمة بحث في ناسا، وتساهم في مهام استكشاف الفضاء الرائدة.',
      date: '2025-02-15',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      category: language === 'en' ? 'Alumni' : 'خريجون'
    }
  ];

  // Sample events data
  const eventsData = [
    {
      title: language === 'en' ? 'Annual Science Fair 2025' : 'معرض العلوم السنوي 2025',
      date: language === 'en' ? 'April 15, 2025' : '15 أبريل 2025',
      time: language === 'en' ? '10:00 AM - 4:00 PM' : '10:00 صباحًا - 4:00 مساءً',
      location: language === 'en' ? 'STEM Gharbiya Main Hall' : 'القاعة الرئيسية STEM الغربية',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: language === 'en' ? 'Robotics Workshop for Beginners' : 'ورشة عمل الروبوتات للمبتدئين',
      date: language === 'en' ? 'April 20, 2025' : '20 أبريل 2025',
      time: language === 'en' ? '2:00 PM - 5:00 PM' : '2:00 مساءً - 5:00 مساءً',
      location: language === 'en' ? 'Robotics Lab' : 'مختبر الروبوتات',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: language === 'en' ? 'Parent-Teacher Conference' : 'اجتماع أولياء الأمور والمعلمين',
      date: language === 'en' ? 'April 25, 2025' : '25 أبريل 2025',
      time: language === 'en' ? '9:00 AM - 12:00 PM' : '9:00 صباحًا - 12:00 ظهرًا',
      location: language === 'en' ? 'School Auditorium' : 'قاعة المدرسة',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: language === 'en' ? 'STEM Career Day' : 'يوم مهن STEM',
      date: language === 'en' ? 'May 5, 2025' : '5 مايو 2025',
      time: language === 'en' ? '10:00 AM - 3:00 PM' : '10:00 صباحًا - 3:00 مساءً',
      location: language === 'en' ? 'Multiple Classrooms' : 'فصول دراسية متعددة',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80'
    },
    {
      title: language === 'en' ? 'International Mathematics Competition Preparation' : 'إعداد مسابقة الرياضيات الدولية',
      date: language === 'en' ? 'May 10, 2025' : '10 مايو 2025',
      time: language === 'en' ? '3:00 PM - 6:00 PM' : '3:00 مساءً - 6:00 مساءً',
      location: language === 'en' ? 'Mathematics Department' : 'قسم الرياضيات',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: language === 'en' ? 'Graduation Ceremony 2025' : 'حفل التخرج 2025',
      date: language === 'en' ? 'June 15, 2025' : '15 يونيو 2025',
      time: language === 'en' ? '6:00 PM - 9:00 PM' : '6:00 مساءً - 9:00 مساءً',
      location: language === 'en' ? 'School Courtyard' : 'فناء المدرسة',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  const categories = [
    { value: 'all', label: language === 'en' ? 'All Categories' : 'جميع التصنيفات' },
    { value: 'achievements', label: language === 'en' ? 'Achievements' : 'إنجازات' },
    { value: 'facilities', label: language === 'en' ? 'Facilities' : 'مرافق' },
    { value: 'partnerships', label: language === 'en' ? 'Partnerships' : 'شراكات' },
    { value: 'research', label: language === 'en' ? 'Research' : 'بحث' },
    { value: 'events', label: language === 'en' ? 'Events' : 'فعاليات' },
    { value: 'alumni', label: language === 'en' ? 'Alumni' : 'خريجون' }
  ];

  // Filter news based on search term and category
  const filteredNews = newsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           item.category.toLowerCase() === categories.find(cat => cat.value === selectedCategory)?.label.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="News and Events" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.newsTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {language === 'en' 
              ? 'Stay updated with the latest news, events, and achievements from STEM Gharbiya.'
              : 'ابق على اطلاع بأحدث الأخبار والفعاليات والإنجازات من STEM الغربية.'
            }
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  activeTab === 'news'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {t.allNews}
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  activeTab === 'events'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {t.allEvents}
              </button>
            </div>

            {/* Search and Filter */}
            {activeTab === 'news' && (
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder={language === 'en' ? 'Search news...' : 'البحث في الأخبار...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                  />
                </div>
                
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <Filter className="h-5 w-5 mr-2" />
                    {categories.find(cat => cat.value === selectedCategory)?.label}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </button>
                  
                  {showFilters && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      {categories.map((category) => (
                        <button
                          key={category.value}
                          onClick={() => {
                            setSelectedCategory(category.value);
                            setShowFilters(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50"
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'news' ? (
            <div>
              <SectionTitle 
                title={language === 'en' ? 'Latest News' : 'أحدث الأخبار'} 
                subtitle={language === 'en' 
                  ? `Showing ${filteredNews.length} ${filteredNews.length === 1 ? 'article' : 'articles'}`
                  : `عرض ${filteredNews.length} ${filteredNews.length === 1 ? 'مقال' : 'مقالات'}`
                }
                centered={false}
              />
              
              {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {filteredNews.map((item) => (
                    <NewsCard 
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      excerpt={item.excerpt}
                      date={item.date}
                      image={item.image}
                      category={item.category}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {language === 'en' 
                      ? 'No news articles found matching your criteria.'
                      : 'لم يتم العثور على مقالات إخبارية تطابق معاييرك.'
                    }
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <SectionTitle 
                title={language === 'en' ? 'Upcoming Events' : 'الفعاليات القادمة'} 
                subtitle={language === 'en' 
                  ? 'Join us for these exciting upcoming events and activities'
                  : 'انضم إلينا في هذه الفعاليات والأنشطة القادمة المثيرة'
                }
                centered={false}
              />
              
              <div className="space-y-6 mt-8">
                {eventsData.map((event, index) => (
                  <EventCard 
                    key={index}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    image={event.image}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-lg overflow-hidden shadow-xl">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {language === 'en' ? 'Stay Connected' : 'ابق على تواصل'}
                </h2>
                <p className="text-blue-200 mb-6">
                  {language === 'en' 
                    ? 'Never miss important updates, events, or achievements. Subscribe to our newsletter and follow us on social media.'
                    : 'لا تفوت التحديثات المهمة أو الفعاليات أو الإنجازات. اشترك في نشرتنا الإخبارية وتابعنا على وسائل التواصل الاجتماعي.'
                  }
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-300">
                    {language === 'en' ? 'Subscribe to Newsletter' : 'اشترك في النشرة الإخبارية'}
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
                    {language === 'en' ? 'Follow Us' : 'تابعنا'}
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" 
                  alt="Students collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
};

export default News;