import { AboutSectionTypes } from '../types/types'
import Cta from './common/Cta'
import ImgHandler from './ImgHandler'
import {motion} from 'framer-motion'


const AboutSection = ( props: AboutSectionTypes) => {
  // console.log("props cta", props.cta)

  return (
    <section id="about" className="py-20 px-6 bg-transparent ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Overlapping Portrait Images */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Background Image - Larger */}
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
            <div className="absolute    top-5 left-0 sm:left-[20%] lg:left-0 w-64 h-80 lg:w-[22rem] lg:h-[30rem] rounded-lg overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-1 transition-transform duration-500">
              
              <ImgHandler 
                url={props.image_1.url}
                alternativeText={props.image_1.alternativeText}
                className="w-full h-full  object-cover"
                />
            </div>
                </motion.div>
            
            {/* Foreground Image - Smaller, Overlapping */}
                          <motion.div
                initial={{opacity:0, x:100}} 
                whileInView={{opacity:1, x:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:20,
                    delay:.8
                }}
                > 
            <div className="absolute top-10 right-0 sm:right-[20%] lg:right-0 w-56 h-[17rem] lg:w-[18rem] lg:h-[26rem] rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              <ImgHandler 
                url={props.image_2.url}
                alternativeText={props.image_2.alternativeText}
                className="w-full h-full object-cover"
                />
            </div>
                </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-teal-100 to-amber-100 rounded-full opacity-30 blur-xl"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="text-left space-y-8 flex flex-col justify-center md:items-start items-center">
            {/* Header */}

            <div className="space-y-4">

              <motion.div 
                initial={{opacity:0, y:100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:10,
                    delay:0.2
                }}
              >
                <p className="text-teal-600 text-center md:text-left text-sm font-medium tracking-[0.2em] uppercase">
                  {props.tagline}
                </p>
              </motion.div>
              <motion.div
                initial={{opacity:0, y:100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:10,
                    delay:0.4
                }}        
                >
                  <h2 className="text-3xl  md:text-5xl  text-center md:text-left  font-extralight text-gray-800 leading-tight tracking-wide">
                    {props.title}
                  </h2>
                </motion.div>
            </div>
            
            {/* Description */}
            <div className="space-y-6 flex flex-col items-center md:items-start  text-center md:text-start">
                            <motion.div
                initial={{opacity:0, y:100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:10,
                    delay:.6
                }}
                  
                > 
              <p className="text-gray-700 text-lg leading-relaxed font-light max-w-md">
                {props.description_1}
              </p>
              </motion.div>
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
              <p className="text-gray-600 text-base leading-relaxed font-light max-w-lg">
                {props.description_2}
              </p>
                </motion.div>
            </div>
            
            {/* CTA Button - Fixed */}
            <div className="pt-4  w-full ">
                <motion.div
                initial={{opacity:0, y:100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:10,
                    delay:1
                }}
                className='w-full flex  items-center justify-center md:justify-start '
                > 
                
 
                <Cta  cta={props.cta}   className='w-full' />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative text */}
                        <motion.div
                initial={{opacity:0, y:-100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:20,
                    damping:20,
                    delay:.8
                }}
                className='mt-20 text-center'
                > 
        {/* <div className="mt-20 text-center"> */}
          <p className="text-gray-400 text-sm font-light tracking-[0.15em] uppercase">
 
            {props.bottomTagline}
          </p>
        {/* </div> */}
                </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
