import React from 'react';

interface LoadingPageProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message, 
  fullScreen = false 
}) => {
  const containerClass = fullScreen 
    ? "fixed inset-0 bg-white z-50 flex items-center justify-center"
    : "min-h-screen bg-white flex items-center justify-center";

  return (
    <div className={` reletive h-full ${containerClass} `}>
        {/* Loading Content */}
        <div className="absolute inset-0 z-1">
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-white/80  to-white/90"></div>
              <img 
                src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="image"
                className="w-full h-full object-cover" />
        </div>
        {/* ------------------- */}
      <div className="text-center space-y-5 px-6  z-50">
        {/* Logo/Brand Area */}
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto relative">
            {/* Animated Circles */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-teal-600 border-t-transparent animate-spin"></div>
          </div>
          
          {/* Hotel4 Text */}
          <h2 className="text-3xl font-serif  font-light text-teal-800 tracking-wide z-50">
            casa pery
          </h2>
        </div>

        {/* Loading Message */}
        <div className="flex flex-col gap-8">
          <p className="text-white  font-normal text-lg ">
            {message || 'Loading your experience...'}
          </p>
          
          {/* Animated Dots */}
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
