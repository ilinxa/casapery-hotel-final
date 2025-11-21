
import  { useState } from 'react';
import SectionHeader from './common/SectionHeader';
import FeaturedRoom from './common/categories/FeaturedRoom';
import RoomCard from './common/categories/RoomCard';
import { RoomSectionType } from '../types/types';
import {motion} from 'framer-motion'




const RoomCategories = ( props: RoomSectionType) => {
  // console.log(props)
  const [selectedRoom, setSelectedRoom] = useState(props.room[0]);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  return (
    <section id='RoomCategories' 
    className="py-24 px-6 bg-gradient-to-b -mt-1 from-white via-gray-50 to-white relative overflow-hidden" >
      <div className="absolute top-20 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl transform -translate-x-36"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl transform translate-x-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10  flex flex-col gap-12">
        {
          props.tagline && props.tagline.length > 0 && (
            <SectionHeader tagline={props.tagline} title={props.title} />
          )
        }

        <FeaturedRoom selectedRoom={selectedRoom} cta={props.cta} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {props.room && props.room.length > 0 && props.room.map((room, index) => (
            <motion.div
              initial={{opacity:0, y:100}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:.8+(index/10)
              }}
              key={index}
                
              > 
            <RoomCard
              room={room}
              isSelected={selectedRoom.id === room.id}
              isHovered={hoveredRoom === room.id}
              onClick={() => setSelectedRoom(room)}
              onHover={() => setHoveredRoom(room.id)}
              onLeave={() => setHoveredRoom(null)}
              stagger={index % 2 === 0}
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCategories;
