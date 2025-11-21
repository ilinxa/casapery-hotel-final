import { useState, useEffect } from 'react'
import SectionHeader from './common/SectionHeader'
import JournalThumbnails from './common/slider/JournalThumbnails'
import JournalSlide from './common/slider/JuornalSlide'
import { JurnalSectionTypes } from '../types/types'
 import {motion} from "framer-motion"


const JournalSliderSection = (journalPosts: JurnalSectionTypes) => {
  const journalPostsData = journalPosts.journals
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % journalPostsData.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(true)
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <SectionHeader tagline={journalPosts.tagline} title={journalPosts.title} />

        <motion.div
          initial={{opacity:0, y:-100}} 
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{
                type:"spring",
                stiffness:20,
                damping:10,
                delay:.6
            }}
              className='z-[50]'
            >

                
              <JournalSlide
                post={journalPostsData[currentSlide]}
                onPrev={() => { setCurrentSlide((prev) => (prev - 1 + journalPostsData.length) % journalPostsData.length); setIsAutoPlaying(false); }}
                onNext={() => { setCurrentSlide((prev) => (prev + 1) % journalPostsData.length); setIsAutoPlaying(false); }}
                onPause={() => setIsAutoPlaying(false)}
              />
        </motion.div>
        
        <div className='flex flex-col md:flex-row justify-between w-full items-center gap-6 md:gap-4  my-7 h-content z-50'>
          <div className='flex-1 '>
            {/* <motion.div
              initial={{opacity:0, y:0}} 
              whileInView={{opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{
                  type:"spring",
                  stiffness:20,
                  damping:10,
                  delay:2
              }}
               > */}
 

                <JournalThumbnails
                  posts={journalPostsData}
                  currentSlide={currentSlide}
                  onSelect={goToSlide}
                  
                  />
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default JournalSliderSection
