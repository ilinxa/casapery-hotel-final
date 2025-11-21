
import { HeroBlockType } from '../types/types'
import HeroImage from './common/HeroImage'
import ImgHandler from './ImgHandler'
import {motion} from 'framer-motion'
const HeroSection = (block:HeroBlockType) => {
  // console.log("block", block)
  return (
    <>
      {/* Hero Section with Gradient Fade */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          {
            block.heroImg.url && block.heroImg.url.length > 0 && (
              <ImgHandler 
                url={block.heroImg.url} 
                alternativeText={block.heroImg.alternativeText} 
                className="w-full h-full object-cover" />
            )
          }
          {/* Gradient fade from top to bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-white"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 max-w-[900px] flex flex-col items-center gap-5">
            {
              block.tagLine && block.tagLine.length > 0 && (
                <motion.div 
                    initial={{opacity:0, y:-100}} 
                    animate={{opacity:1, y:0}} 
                    transition={{
                        type:"spring",
                        stiffness:20,
                        damping:10,
                        delay:0.4

                    }}
                    className=' flex items-center w-fit px-4 py-1 drop-shadow-xl  rounded-full justify-center backdrop-blur-md bg-teal-600/50 border border-white/60 shadow-lg'
                    > 
                    <p className="text-lg  tracking-wide font-light">{block.tagLine}</p>

                </motion.div>
              )
            }
            {
              block.title && block.title.length > 0 && (
                <motion.div 
                  initial={{opacity:0, y:-100}} 
                  animate={{opacity:1, y:0}} 
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:0.9
                  }}
                  className='w-full'
                  > 

                <h1 className=" text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-50 sm:text-6xl drop-shadow-2xl md:text-7xl font-bold  mb-8 leading-tight tracking-wide">
                  {block.title}
                </h1>
                </motion.div>
              )
            }
          </div>
        </div>
      </section>

      {/* 3 Cards Section */}
      <section className="relative -mt-32 z-20 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { block.herocard && block.herocard.length > 0 && block.herocard .map((card, index) => (
                              <motion.div
                initial={{opacity:0, y:100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:30,
                    damping:10,
                    delay:1.3+(index/3)
                }} 
                key={index}
                >
                  <HeroImage
                    key={index}
                    {...card}               
                    />
                </motion.div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
