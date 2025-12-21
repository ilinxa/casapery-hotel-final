import React from 'react';
import {  Star } from 'lucide-react';
import ImgHandler from '../../ImgHandler';
import { RoomCardProps } from '../../../types/types';


const RoomCard: React.FC<RoomCardProps> = ({ room, isSelected, isHovered, onClick, onHover, onLeave, stagger }) => {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        group cursor-pointer transform transition-all duration-500
        ${isSelected ? 'ring-2 ring-teal-500 ring-offset-4' : ''}
        ${stagger ? 'md:translate-y-6XXX' : ''}
        ${isHovered ? 'scale-105 -translate-y-2' : ''}
      `}
    >
      <div className="relative  overflow-hidden rounded-lg shadow-lg">
        <ImgHandler
          url={room.image[0].url}
          alternativeText={room.image[0].alternativeText}
          className="w-full h-36 md:h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-xs font-light tracking-wider uppercase mb-1 text-white/80">{room.category}</p>
          <div className='flex justify-between items-center'>

          <h4 className="text-sm md:text-md lg:text-lg font-light mb-2">{room.name}</h4>
          
          </div>
          <div className="flex items-center justify-end">
            {/* <span className="text-xl font-light">{room.price}</span> */}
            {/* <ArrowRight className={`w-4 h-4 transform transition-transform ${isHovered ? 'translate-x-1' : ''}`} /> */}
          </div>
        </div>
        <div className='absolute top-3 left-3'>
          <p className='bg-black/50 px-[6px] rounded-full text-sm text-white'>{room.available}</p>
        </div>
        {room.suit && (
          <div className="absolute top-3 right-3 bg-amber-600 text-white p-1.5 rounded-full">
            <Star className="w-3 h-3 fill-current" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
