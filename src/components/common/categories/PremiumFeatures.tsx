import React from 'react';
import { Sparkles, Clock, Mountain } from 'lucide-react';

const PremiumFeatures: React.FC = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      <div className="relative z-10 grid md:grid-cols-3 gap-8 text-white">
        <div className="text-center">
          <Sparkles className="w-8 h-8 mx-auto mb-3 text-amber-400" />
          <h4 className="text-lg font-light mb-2">Daily Housekeeping</h4>
          <p className="text-sm text-gray-300 font-light">Twice daily service with evening turndown</p>
        </div>
        <div className="text-center">
          <Clock className="w-8 h-8 mx-auto mb-3 text-amber-400" />
          <h4 className="text-lg font-light mb-2">Express Check-In</h4>
          <p className="text-sm text-gray-300 font-light">Priority service for seamless arrival</p>
        </div>
        <div className="text-center">
          <Mountain className="w-8 h-8 mx-auto mb-3 text-amber-400" />
          <h4 className="text-lg font-light mb-2">Exclusive Experiences</h4>
          <p className="text-sm text-gray-300 font-light">Curated activities and private tours</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
