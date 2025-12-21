import { Users, Square, Star, X } from 'lucide-react';
import Cta from '../Cta';
import { CTAType, RoomType } from '../../../types/types';
import { motion } from 'framer-motion';
import { TbView360Number } from "react-icons/tb";
; // ✅ Adjust path as needed
import { useState } from 'react';
import Viewer360 from '../Viewer360';
import ImageSlider from '../imageslider/ImgSlider';

interface FeaturedRoomProps {
  selectedRoom: RoomType;
  cta?: CTAType;
}



const FeaturedRoom = ({ selectedRoom, cta }: FeaturedRoomProps) => {
  const [is360Open, setIs360Open] = useState(false);

  const handleOpen360 = () => {
    if (selectedRoom.img360) {
      setIs360Open(true);
      // Optional: prevent background scroll
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClose360 = () => {
    setIs360Open(false);
    document.body.style.overflow = ''; // restore scroll
  };

  return (
    <>
      {/* 360 Modal */}
      {is360Open && selectedRoom.img360 && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={handleClose360}
            className="absolute top-[100px] right-[50%] z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all"
            aria-label="Close 360 view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 360 Viewer */}
          <Viewer360 panoramaImage={selectedRoom.img360.url} />
        </div>
      )}

      {/* Original Featured Room Content */}
      <div className="">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 10,
                delay: 0.6,
              }}
            >
              <div className="transform transition-all duration-700 hover:shadow-lg">
                {/* <ImgHandler
                  url={selectedRoom.image.url}
                  alternativeText={selectedRoom.image.alternativeText}
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                /> */}
                

                <div className="w-full h-[500px] object-cover rounded-lg shadow-2xl  transform transition-all duration-700 hover:shadow-lg">
                                    
                                    <ImageSlider images={selectedRoom.image} />
                </div>

                {/* 360 Badge */}
                {selectedRoom.img360 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 20,
                      damping: 10,
                      delay: 1.2,
                    }}
                    className="absolute top-6 right-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-light flex items-center space-x-2 cursor-pointer hover:bg-amber-700 transition-colors"
                    onClick={handleOpen360}
                  >
                    <TbView360Number />
                    <span>360°</span>
                  </motion.div>
                )}

                {/* Popular Badge */}
                {selectedRoom.suit && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 20,
                      damping: 10,
                      delay: 1.2,
                    }}
                    className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-light flex items-center space-x-2"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span>SUIT</span>
                  </motion.div>
                )}

                {/* Info Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 20,
                    damping: 10,
                    delay: 1.4,
                  }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg"
                >
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4 text-gray-600" />
                      {selectedRoom.size && (
                        <span className="text-sm font-medium">{selectedRoom.size}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      {selectedRoom.occupancy && (
                        <span className="text-sm font-medium">{selectedRoom.occupancy}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Details Section */}
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 10,
                delay: 0.8,
              }}
            >
              <div className="transform transition-all duration-700 hover:shadow-lg">
                <div className="bg-white/80 backdrop-blur-sm h-[500px] p-7 rounded-lg shadow-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-teal-600 tracking-widest uppercase">
                      {selectedRoom.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(selectedRoom.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{selectedRoom.rating}</span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 20,
                      damping: 10,
                      delay: 1.4,
                    }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-normal md:text-3xl md:font-light text-gray-800 mb-2">
                        {selectedRoom.name}
                      </h3>
                      <p className="text-sm md:text-md text-teal-600 font-light mb-4">
                        {selectedRoom.available} Available
                      </p>
                    </div>

                    <div className="flex items-baseline space-x-2 mb-6">
                      <span className="text-xl md:text-3xl font-light text-teal-600">
                        {selectedRoom.price}
                      </span>
                      <span className="text-sm md:text-2xl text-gray-500 font-light">
                        {selectedRoom.priceUnit}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-md font-light">
                      {selectedRoom.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {selectedRoom.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span className="text-sm">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {cta && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 20,
                        damping: 10,
                        delay: 1.2,
                      }}
                      className="w-full flex items-center justify-center md:justify-start"
                    >
                      <Cta cta={cta} />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedRoom;