import { SectionHeaderProps } from "../../types/types"
import {motion} from 'framer-motion'
const SectionHeader = ( {tagline, title,description} : SectionHeaderProps) => {
  return (

        <div className="text-center mb-16">
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

          <p className="text-sm text-gray-500 tracking-widest uppercase mb-4 font-light">
            {tagline}
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

          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
            {title}
          </h2>
        </motion.div>

        {/* Description paragraph */}

        
            { description &&
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

              <div className="max-w-2xl mx-auto">
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  {description}
                </p>
              </div>
        </motion.div>
            }
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

            className="w-24 mt-8  h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
            
            ></motion.div>
        </div>
  )
}

export default SectionHeader
