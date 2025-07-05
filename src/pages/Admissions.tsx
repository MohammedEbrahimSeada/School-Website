import React, { useContext } from 'react';
import { CheckCircle, FileText, Calendar, Users, Download, HelpCircle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SubscribeNewsletter from '../components/SubscribeNewsletter';
import LanguageContext from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Admissions: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  // Eligibility criteria data
  const eligibilityCriteria = [
    {
      title: language === 'en' ? 'Academic Excellence' : 'التميز الأكاديمي',
      description: language === 'en' 
        ? 'Minimum 85% in preparatory school final exams with strong performance in mathematics and science subjects.'
        : 'الحد الأدنى 85% في امتحانات الشهادة الإعدادية مع أداء قوي في مواد الرياضيات والعلوم.'
    },
    {
      title: language === 'en' ? 'Age Requirements' : 'متطلبات العمر',
      description: language === 'en'
        ? 'Students must be between 15-17 years old at the time of application.'
        : 'يجب أن يكون عمر الطلاب بين 15-17 سنة وقت التقديم.'
    },
    {
      title: language === 'en' ? 'Language Proficiency' : 'إتقان اللغة',
      description: language === 'en'
        ? 'Good command of English language as instruction is primarily in English.'
        : 'إتقان جيد للغة الإنجليزية حيث أن التدريس يتم بشكل أساسي باللغة الإنجليزية.'
    },
    {
      title: language === 'en' ? 'Aptitude Test' : 'اختبار القدرات',
      description: language === 'en'
        ? 'Pass the STEM aptitude test covering mathematics, science, and logical reasoning.'
        : 'اجتياز اختبار القدرات STEM الذي يغطي الرياضيات والعلوم والتفكير المنطقي.'
    }
  ];

  // Application process steps
  const applicationSteps = [
    {
      step: 1,
      title: language === 'en' ? 'Online Registration' : 'التسجيل الإلكتروني',
      description: language === 'en'
        ? 'Complete the online application form with personal and academic information.'
        : 'أكمل نموذج التقديم الإلكتروني بالمعلومات الشخصية والأكاديمية.'
    },
    {
      step: 2,
      title: language === 'en' ? 'Document Submission' : 'تقديم المستندات',
      description: language === 'en'
        ? 'Upload all required documents including certificates and identification.'
        : 'ارفع جميع المستندات المطلوبة بما في ذلك الشهادات وإثبات الهوية.'
    },
    {
      step: 3,
      title: language === 'en' ? 'Aptitude Test' : 'اختبار القدرات',
      description: language === 'en'
        ? 'Take the STEM aptitude test at the designated testing center.'
        : 'خذ اختبار القدرات STEM في مركز الاختبار المحدد.'
    },
    {
      step: 4,
      title: language === 'en' ? 'Interview' : 'المقابلة الشخصية',
      description: language === 'en'
        ? 'Attend a personal interview with the admissions committee.'
        : 'احضر مقابلة شخصية مع لجنة القبول.'
    },
    {
      step: 5,
      title: language === 'en' ? 'Final Decision' : 'القرار النهائي',
      description: language === 'en'
        ? 'Receive admission decision and complete enrollment procedures.'
        : 'استلم قرار القبول وأكمل إجراءات التسجيل.'
    }
  ];

  // Required documents
  const requiredDocuments = [
    language === 'en' ? 'Preparatory school certificate (original and copy)' : 'شهادة الإعدادية (أصل وصورة)',
    language === 'en' ? 'Birth certificate (original and copy)' : 'شهادة الميلاد (أصل وصورة)',
    language === 'en' ? 'National ID or passport copy' : 'صورة من البطاقة الشخصية أو جواز السفر',
    language === 'en' ? 'Recent passport-sized photographs (4 copies)' : 'صور شخصية حديثة بحجم جواز السفر (4 نسخ)',
    language === 'en' ? 'Medical certificate of fitness' : 'شهادة طبية بالصحة العامة',
    language === 'en' ? 'Proof of residence' : 'إثبات محل الإقامة',
    language === 'en' ? 'Guardian consent form (for students under 18)' : 'نموذج موافقة ولي الأمر (للطلاب تحت 18 سنة)'
  ];

  // Timeline data
  const timeline = [
    {
      date: language === 'en' ? 'March 1 - April 15' : '1 مارس - 15 أبريل',
      event: language === 'en' ? 'Application Period' : 'فترة التقديم',
      description: language === 'en' ? 'Online applications open' : 'فتح التقديم الإلكتروني'
    },
    {
      date: language === 'en' ? 'April 20 - May 5' : '20 أبريل - 5 مايو',
      event: language === 'en' ? 'Aptitude Tests' : 'اختبارات القدرات',
      description: language === 'en' ? 'STEM aptitude testing period' : 'فترة اختبارات القدرات STEM'
    },
    {
      date: language === 'en' ? 'May 10 - May 20' : '10 مايو - 20 مايو',
      event: language === 'en' ? 'Interviews' : 'المقابلات الشخصية',
      description: language === 'en' ? 'Personal interviews with qualified candidates' : 'مقابلات شخصية مع المرشحين المؤهلين'
    },
    {
      date: language === 'en' ? 'May 25' : '25 مايو',
      event: language === 'en' ? 'Results Announcement' : 'إعلان النتائج',
      description: language === 'en' ? 'Admission decisions released' : 'إعلان قرارات القبول'
    },
    {
      date: language === 'en' ? 'June 1 - June 15' : '1 يونيو - 15 يونيو',
      event: language === 'en' ? 'Enrollment' : 'التسجيل',
      description: language === 'en' ? 'Final enrollment and fee payment' : 'التسجيل النهائي ودفع الرسوم'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: language === 'en' ? 'What is the application fee?' : 'ما هي رسوم التقديم؟',
      answer: language === 'en' 
        ? 'The application fee is 500 EGP, which is non-refundable and covers the cost of processing your application and aptitude test.'
        : 'رسوم التقديم 500 جنيه مصري، وهي غير قابلة للاسترداد وتغطي تكلفة معالجة طلبك واختبار القدرات.'
    },
    {
      question: language === 'en' ? 'Can I apply if I am from another governorate?' : 'هل يمكنني التقديم إذا كنت من محافظة أخرى؟',
      answer: language === 'en'
        ? 'Yes, STEM Gharbiya accepts students from all governorates in Egypt. However, priority is given to students from Gharbiya Governorate.'
        : 'نعم، تقبل STEM الغربية الطلاب من جميع محافظات مصر. ومع ذلك، تُعطى الأولوية للطلاب من محافظة الغربية.'
    },
    {
      question: language === 'en' ? 'What subjects are covered in the aptitude test?' : 'ما هي المواد المشمولة في اختبار القدرات؟',
      answer: language === 'en'
        ? 'The aptitude test covers mathematics, physics, chemistry, biology, and logical reasoning. The test is designed to assess your problem-solving skills and scientific thinking.'
        : 'يغطي اختبار القدرات الرياضيات والفيزياء والكيمياء وعلم الأحياء والتفكير المنطقي. الاختبار مصمم لتقييم مهارات حل المشكلات والتفكير العلمي.'
    },
    {
      question: language === 'en' ? 'Is there accommodation available for students?' : 'هل يتوفر سكن للطلاب؟',
      answer: language === 'en'
        ? 'Yes, STEM Gharbiya provides boarding facilities for students who live far from the school. The dormitories are well-equipped with study areas, recreational facilities, and 24/7 supervision.'
        : 'نعم، توفر STEM الغربية مرافق إقامة للطلاب الذين يعيشون بعيدًا عن المدرسة. المساكن مجهزة جيدًا بمناطق دراسة ومرافق ترفيهية وإشراف على مدار 24/7.'
    },
    {
      question: language === 'en' ? 'What are the school fees?' : 'ما هي المصروفات المدرسية؟',
      answer: language === 'en'
        ? 'School fees vary depending on whether you choose day school or boarding. Please contact our admissions office for detailed fee structure and payment plans.'
        : 'تختلف المصروفات المدرسية حسب اختيارك للدراسة النهارية أو الإقامة. يرجى الاتصال بمكتب القبول للحصول على هيكل الرسوم التفصيلي وخطط الدفع.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="STEM Education" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.admissionsTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {language === 'en' 
              ? 'Join the next generation of innovators and leaders in STEM education.'
              : 'انضم إلى الجيل القادم من المبتكرين والقادة في تعليم العلوم والتكنولوجيا والهندسة والرياضيات.'
            }
          </p>
        </div>
      </div>

      {/* Quick Apply CTA */}
      <section className="py-12 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {language === 'en' ? 'Applications Now Open for 2025-2026' : 'التقديم مفتوح الآن للعام الدراسي 2025-2026'}
            </h2>
            <p className="text-blue-800 mb-6">
              {language === 'en' 
                ? 'Don\'t miss your chance to be part of Egypt\'s premier STEM education program.'
                : 'لا تفوت فرصتك لتكون جزءًا من برنامج تعليم العلوم والتكنولوجيا والهندسة والرياضيات الرائد في مصر.'
              }
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300">
              {t.applyOnline}
            </button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.eligibilityCriteria} 
            subtitle={language === 'en'
              ? 'Make sure you meet these requirements before applying'
              : 'تأكد من استيفاء هذه المتطلبات قبل التقديم'
            }
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{criteria.title}</h3>
                    <p className="text-gray-600">{criteria.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.applicationProcess} 
            subtitle={language === 'en'
              ? 'Follow these steps to complete your application'
              : 'اتبع هذه الخطوات لإكمال طلبك'
            }
            centered={true}
          />
          
          <div className="mt-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
              
              <div className="space-y-8">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.requiredDocuments} 
            subtitle={language === 'en'
              ? 'Prepare these documents for your application'
              : 'جهز هذه المستندات لطلبك'
            }
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">
                  {language === 'en' ? 'Document Checklist' : 'قائمة المستندات المطلوبة'}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {requiredDocuments.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-100 rounded-md">
                <p className="text-sm text-yellow-800">
                  <strong>
                    {language === 'en' ? 'Important:' : 'مهم:'}
                  </strong>{' '}
                  {language === 'en'
                    ? 'All documents must be recent (issued within the last 6 months) and certified copies are required for official documents.'
                    : 'يجب أن تكون جميع المستندات حديثة (صادرة خلال الأشهر الستة الماضية) ومطلوب نسخ مصدقة للمستندات الرسمية.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.admissionsTimeline} 
            subtitle={language === 'en'
              ? 'Important dates for the 2025-2026 admission cycle'
              : 'التواريخ المهمة لدورة القبول 2025-2026'
            }
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-2 md:mb-0">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="font-semibold text-blue-900">{item.date}</span>
                    </div>
                    <div className="md:text-right">
                      <h3 className="text-lg font-semibold mb-1">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t.faq} 
            subtitle={language === 'en'
              ? 'Find answers to commonly asked questions about admissions'
              : 'اعثر على إجابات للأسئلة الشائعة حول القبول'
            }
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <HelpCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Admissions Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              {language === 'en' ? 'Need Help with Your Application?' : 'تحتاج مساعدة في طلبك؟'}
            </h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Our admissions team is here to help you through every step of the application process. Don\'t hesitate to reach out with any questions.'
                : 'فريق القبول لدينا هنا لمساعدتك في كل خطوة من خطوات عملية التقديم. لا تتردد في التواصل معنا لأي أسئلة.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:admissions@stemgharbiya.edu.eg" 
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition duration-300"
              >
                {language === 'en' ? 'Email Admissions' : 'راسل القبول'}
              </a>
              <a 
                href="tel:+201234567890" 
                className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition duration-300"
              >
                {language === 'en' ? 'Call Us' : 'اتصل بنا'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <SubscribeNewsletter />
    </div>
  );
};

export default Admissions;