
// import  { useState } from 'react';
// import SectionHeader from './common/SectionHeader';
// import FeaturedRoom from './common/categories/FeaturedRoom';
// import RoomCard from './common/categories/RoomCard';
// import { RoomSectionType } from '../types/types';
// import {motion} from 'framer-motion'
// import useEmblaCarousel from 'embla-carousel-react';



// const RoomCategories = ( props: RoomSectionType) => {
//   // console.log(props)
//   const [selectedRoom, setSelectedRoom] = useState(props.room[0]);
//   const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

//   return (
//     <section id='RoomCategories' 
//     className="py-24 px-6 bg-gradient-to-b -mt-1 from-white via-gray-50 to-white relative overflow-hidden" >
//       <div className="absolute top-20 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl transform -translate-x-36"></div>
//       <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl transform translate-x-48"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10  flex flex-col gap-12">
//         {
//           props.tagline && props.tagline.length > 0 && (
//             <SectionHeader tagline={props.tagline} title={props.title} />
//           )
//         }

//         <FeaturedRoom selectedRoom={selectedRoom} cta={props.cta} />

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
//           {props.room && props.room.length > 0 && props.room.map((room, index) => (
//             <motion.div
//               initial={{opacity:0, y:100}} 
//               whileInView={{opacity:1, y:0}}
//               viewport={{ once: true }}
//               transition={{
//                   type:"spring",
//                   stiffness:20,
//                   damping:10,
//                   delay:.8+(index/10)
//               }}
//               key={index}
                
//               > 
//             <RoomCard
//               room={room}
//               isSelected={selectedRoom.id === room.id}
//               isHovered={hoveredRoom === room.id}
//               onClick={() => setSelectedRoom(room)}
//               onHover={() => setHoveredRoom(room.id)}
//               onLeave={() => setHoveredRoom(null)}
//               stagger={index % 2 === 0}
//             />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RoomCategories;

import { useState, useEffect } from 'react';
import SectionHeader from './common/SectionHeader';
import FeaturedRoom from './common/categories/FeaturedRoom';
import RoomCard from './common/categories/RoomCard';
import { RoomSectionType } from '../types/types';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

const RoomCategories = (props: RoomSectionType) => {
  const [selectedRoom, setSelectedRoom] = useState(() => props.room?.[0] || null);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  // Embla carousel setup
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });

  // Ensure selectedRoom is always valid when props change
  useEffect(() => {
    if (props.room && props.room.length > 0 && !selectedRoom) {
      setSelectedRoom(props.room[0]);
    }
  }, [props.room, selectedRoom]);

  return (
    <section
      id="RoomCategories"
      className="py-24 px-6 bg-gradient-to-b -mt-1 from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-20 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl transform -translate-x-36"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl transform translate-x-48"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        {props.tagline && props.tagline.length > 0 && (
          <SectionHeader tagline={props.tagline} title={props.title} />
        )}

        <FeaturedRoom selectedRoom={selectedRoom} cta={props.cta} />

        {/* Embla Carousel Container */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {props.room &&
              props.room.length > 0 &&
              props.room.map((room) => (
                <div
                  className="embla__slide flex-[0_0_70%]  min-w-0 px-2 md:flex-[0_0_48%] lg:flex-[0_0_23%] select-none pt-3"
                  key={room.id}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 20,
                      damping: 10,
                      delay: 0.2,
                    }}
                  >
                    <RoomCard
                      room={room}
                      isSelected={selectedRoom?.id === room.id}
                      isHovered={hoveredRoom === room.id}
                      onClick={() => setSelectedRoom(room)}
                      onHover={() => setHoveredRoom(room.id)}
                      onLeave={() => setHoveredRoom(null)}
                      stagger={false} // stagger doesn’t apply in carousel
                    />
                  </motion.div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomCategories;