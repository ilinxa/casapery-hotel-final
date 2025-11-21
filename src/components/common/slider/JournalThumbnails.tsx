
import { Link } from "react-router-dom"

import ImgHandler from "../../ImgHandler"
import { JournalCardType } from "../../../types/types"
import { motion } from "framer-motion"


type Props = {
  posts: JournalCardType[]
  currentSlide: number
  onSelect: (index: number) => void
}

const JournalThumbnails = ({ posts, currentSlide, onSelect }: Props) => (
  <div className="flex flex-col">
    {/* <div className=" flex items-center justify-center space-x-3 mt-8">
      {posts.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`transition-all duration-300 ${
            currentSlide === index
              ? 'w-12 h-3 bg-amber-600 rounded-full'
              : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div> */}

    <div className="mt-12XXX grid grid-cols-3 sm:grid-cols-6 gap-4">
      {posts.map((post, index) => (

         < motion.div
        initial={{opacity:0, y:-100}} 
                  whileInView={{opacity:1, y:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:1.2 +(index*0.2)
                      
                  }}
        key={index}
          >
                    <div
                    onClick={() => onSelect(index)}
          className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
           
            currentSlide === index
              ? 'ring-2 ring-amber-600 ring-offset-2 transform scale-105'
              : 'opacity-60 hover:opacity-100'
          }`}
        >


                          
          <ImgHandler url={post.image.url} alternativeText={post.image.alternativeText} className="w-full h-24 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
            <p className="text-white text-xs font-light truncate">{post.title}</p>
          </div>
        </div> 
          </motion.div>
      ))}
        <motion.div
        initial={{opacity:0, y:-100}} 
                  whileInView={{opacity:1, y:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:2.8
                  }}
        > 

      
          <Link to="/journal" className='h-24 ' >
            <button className="bg-gradient-to-r XXmd:w-[200px]XX lg:w-auto from-amber-600 to-amber-500 text-white px-6 py-4XX rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center space-x-3XXX mx-auto  h-full">
              <span className="text-sm lg:text-lg  font-light tracking-wide">EXPLORE ALL STORIES</span>
              {/* <ArrowRight className="w-5 h-5" /> */}
            </button>
          </Link>
        </motion.div>

    </div>
  </div>
)

export default JournalThumbnails
