import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useFetch } from '../hooks/useFetch';
import LogoText from './common/LogoText';
import ContactBtn from './common/ContactBtn';
import { Mail, Phone, Pin } from 'lucide-react';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const { data: globalData } = useFetch<any>(`/global?locale=${lang}`);

  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t  border-gray-200XXX bg-gradient-to-t from-neutral-200 to to-neutral-50 backdrop-blur-md bg-teal-500/30XXX  border-white shadow-lg">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
          
          {/* Logo & Brand Section */}
          <div className="space-y-6">
            {globalData?.header?.logo && (
              <LogoText 
                name={globalData.header.logo.label}   
                image={globalData.header.logo.logo?.url}
              />
            )}
            
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              {lang === 'en' 
                ? 'Experience luxury and comfort in our carefully designed spaces. Your perfect getaway awaits.'
                : 'Özenle tasarlanmış alanlarımızda lüks ve konforu deneyimleyin. Mükemmel kaçamağınız sizi bekliyor.'
              }
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <ContactBtn 
                title={lang === 'en' ? 'Book Your Stay' : 'Rezervasyon Yap'} 
                whatsappnumber='905522407770' 
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {lang === 'en' ? 'Contact Information' : 'İletişim Bilgileri'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 text-sm"><Pin /></span>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium text-gray-900">
                    {lang === 'en' ? 'Address' : 'Adres'}
                  </p>
                  <p className="text-sm">
                    {lang === 'en' 
                      ? 'Your Hotel Address, City, Country' 
                      : 'Otel Adresiniz, Şehir, Ülke'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-sm"><Phone /></span>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium text-gray-900">
                    {lang === 'en' ? 'Phone' : 'Telefon'}
                  </p>
                  <p className="text-sm">+90 552 240 77 70</p>
                </div>
              </div>

              <div className="flex  items-center space-x-4">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-sm"><Mail/></span>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium text-gray-900">
                    {lang === 'en' ? 'Email' : 'E-posta'}
                  </p>
                  <p className="text-sm">info@hotel4.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row  justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} {globalData?.header?.logo?.label || 'Hotel4'}. 
              {lang === 'en' ? ' All rights reserved.' : ' Tüm hakları saklıdır.'}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a 
                href="/privacy" 
                className="hover:text-teal-600 transition-colors duration-200"
              >
                {lang === 'en' ? 'Privacy Policy' : 'Gizlilik Politikası'}
              </a>
              <a 
                href="/terms" 
                className="hover:text- transition-colors duration-200"
              >
                {lang === 'en' ? 'Terms of Service' : 'Kullanım Şartları'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
