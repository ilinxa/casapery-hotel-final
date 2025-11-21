import { EventSectionProps } from "../types/types";
import Cta2 from "./common/Cta2";
import ImgHandler from "./ImgHandler";
import {motion} from 'framer-motion'


const EventSection = ({label,  bgImage, bulletPoints, cta, description, image,  title }:EventSectionProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-teal-700/100 to-teal-700/70  text-white relative overflow-hidden ">
      
      <div className="absolute w-full top-0 left-0 h-full opacity-10"           
          style={{
            maskImage: 'linear-gradient(to left, #000, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, #000, transparent)',
          }}
          >
              <motion.div
              initial={{opacity:0, y:100}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:.8
              }}
                className="h-full w-full "
              > 
        <ImgHandler 
          url={bgImage.url}
          alternativeText={bgImage.alternativeText}
          className="h-full w-full object-cover "

        />
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[6rem] sm:gap-[4.5rem] md:gap-[4.5rem]  items-center relative z-10  ">

        
        <div className="flex h-full md:h-[450px]XX lg:h-[600px]XX w-full  rounded-lg">
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

              className="w-full flex justify-end "
                
              >
          <ImgHandler 
            url={image.url}
            alternativeText={image.alternativeText}
            className=" w-[70%] sm:w-full object-cover rounded-lg  shadow-2xl lg:aspect-[3/4] aspect-[4/3] aspect-[8/5]XXX "
          />
          </motion.div>
        </div>

        <div className="flex flex-col items-start  justify-center  mt-[-175px] px-7 lg:px-0 lg:mt-10 ">

          <div className="lg:translate-x-[-30%]   flex w-full justify-center lg:mb-5  ">
              <motion.div
              initial={{opacity:0, x:-100}} 
              whileInView={{opacity:1, x:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:.8
              }}
                className="w-full flex md:justify-start "
              >
                

                <h1 className="text-3xl sm:text-5xl font-serif  max-w-[600px]  text-teal-50 w-full  lg:p-5  font-bold  text-centerCCC md:text-start drop-shadow-md  "> 
                  {label} 
                </h1>
              </motion.div>
          </div>
          <div>
            <motion.div
              initial={{opacity:0, y:-100}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:.8
              }}
                
              >
            <h2 className="text-3xl pt-10 md:pt-16 lg:pt-0 font-bold text-center sm:text-start  my-3  lg:px-0  XXX">
            {title}
                
            </h2>
              </motion.div>
              <motion.div
              initial={{opacity:0, y:-100}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:1
              }}
                
              >

                  <p className="text-teal-50 my-5 pt-0 lg:pt-0  text-md  font-normal  text-center sm:text-start leading-6">
                    {description}
                  </p>
              </motion.div>
          
            <ul className="space-y-1 ">
              { bulletPoints && bulletPoints.length > 0 &&
              bulletPoints.map((bullet, index) => (
              <motion.div
              initial={{opacity:0, y:-100}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:2+(index/1.5)

              }}
                
                key={index}
              >

                <li  className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{bullet.text}</span>
                </li>
              </motion.div>
              ))}
            </ul>
            { cta && (
              <div className="mt-12">
                            <motion.div
              initial={{opacity:0, y:100}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:.8
              }}
                
              >

                <Cta2 {...cta} />
              </motion.div>
              </div>
            )}
            </div>
        </div>
      </div>
    </section>
  )
}

export default EventSection
