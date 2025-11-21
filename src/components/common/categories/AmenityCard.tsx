import React from 'react';

interface AmenityCardProps {
  amenity: {
    icon: string;
    label: string;
    description: string;
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ amenity, isHovered, onHover, onLeave }) => {
  return (
    <div className="group relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <div
        className={`
          bg-white border border-gray-200 rounded-xl px-2 py-4 md:p-6 h-full
          transform transition-all duration-300
          ${isHovered ? 'scale-105 shadow-xl -translate-y-2 border-teal-500' : 'hover:shadow-lg'}
        `}
      >
        <div className="flex flex-col items-center text-center">
          <div
            className={`
              w-14 h-14 rounded-full flex items-center justify-center mb-4
              transition-all duration-300
              ${isHovered ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg' : 'bg-gray-100'}
            `}
          >
            {/* <amenity.icon
              className={`w-7 h-7 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-600'}`}
            /> */}
            <img 
            src={amenity.icon} 
            alt={amenity.label}  
            className={`w-7 h-7 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-600'}`
            }/>
          </div>
          <h4 className="text-sm font-medium text-gray-800 mb-1">{amenity.label}</h4>
          <p className="text-xs text-gray-500 font-light">{amenity.description}</p>
        </div>
      </div>

      {/* {isHovered && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
      )} */}
    </div>
  );
};

export default AmenityCard;
