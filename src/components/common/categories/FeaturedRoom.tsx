
import { Users, Square, Star  } from 'lucide-react';
import Cta from '../Cta';
import ImgHandler from '../../ImgHandler';
import { CTAType, RoomType } from '../../../types/types';
import {motion} from 'framer-motion'



interface FeaturedRoomProps {
  selectedRoom: RoomType
  cta?: CTAType
}

const FeaturedRoom = ({ selectedRoom ,  cta }: FeaturedRoomProps) => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative order-2 md:order-1">
          <motion.div
            initial={{opacity:0, x:-100}} 
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{
                type:"spring",
                stiffness:20,
                damping:10,
                delay:.6
            }}
          > 
            <div className="transform transition-all duration-700 hover:shadow-lg">
                <ImgHandler
                url={selectedRoom.image.url}
                alternativeText={selectedRoom.image.alternativeText}
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
                {selectedRoom.popular && (
                  <div>   
                    <motion.div
                      initial={{opacity:0, y:-20}} 
                      whileInView={{opacity:1, y:0}}
                      viewport={{ once: true }}
                      transition={{
                          type:"spring",
                          stiffness:20,
                          damping:10,
                          delay:1.2
                      }}
                      className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-light flex items-center space-x-2"
                    > 
              
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </motion.div>
                  </div>
            
                )}
          
                <motion.div
                  initial={{opacity:0, y:20}} 
                  whileInView={{opacity:1, y:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:1.4
                  }}
                  className="absolute bottom-6 left-6 bg-white/90  backdrop-blur-sm px-6 py-4 rounded-lg">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Square className="w-4 h-4 text-gray-600" />
                        {
                          selectedRoom.size && selectedRoom.size.length > 0 && (
                            <span className="text-sm font-medium">{selectedRoom.size}</span>
                          )
                        }
                      </div>
                    <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    {selectedRoom.occupancy && selectedRoom.occupancy.length > 0 && (
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
                initial={{opacity:0, x:100}} 
                whileInView={{opacity:1, x:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:10,
                    delay:.8
          }}
                > 
          <div className="transform transition-all  duration-700 hover:shadow-lg">
            <div className="bg-white/80 backdrop-blur-sm h-[500px] p-7 rounded-lg shadow-xl flex flex-col justify-between">
              <div className="flex  items-center justify-between mb-2">
                <span className="text-xs font-medium text-teal-600 tracking-widest uppercase">
                  {selectedRoom.category}
                </span>
                  {/* <motion.div
                      initial={{opacity:0, y:-20}} 
                      whileInView={{opacity:1, y:0}}
                      viewport={{ once: true }}
                      transition={{
                          type:"spring",
                          stiffness:20,
                          damping:10,
                          delay:1.4
                      }}> */}

                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(selectedRoom.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{selectedRoom.rating}</span>
                </div>
                  {/* </motion.div> */}
              </div>

              <motion.div
              initial={{opacity:0, x:-20}} 
                      whileInView={{opacity:1, x:0}}
                      viewport={{ once: true }}
                      transition={{
                          type:"spring",
                          stiffness:20,
                          damping:10,
                          delay:1.4
                      }}
                      className='h-full  flex flex-col justify-between'
              >

                <h3 className="text-xl font-normal md:text-3xl md:font-light text-gray-800 mb-2">{selectedRoom.name}</h3>

                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-xl md:text-3xl font-light text-teal-600">{selectedRoom.price}</span>
                  <span className="text-sm md:text-2xl text-gray-500 font-light">{selectedRoom.priceUnit}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-md font-light">
                  {selectedRoom.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {selectedRoom.features && selectedRoom.features?.length > 0 && selectedRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {cta && (
                <motion.div
                      initial={{opacity:0, y:20}} 
                      whileInView={{opacity:1, y:0}}
                      viewport={{ once: true }}
                      transition={{
                          type:"spring",
                          stiffness:20,
                          damping:10,
                          delay:1.2
                      }}
                      className='w-full flex items-center justify-center md:justify-start '
                      >
 
                <Cta  cta={cta} />
                      </motion.div>
              )}
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
