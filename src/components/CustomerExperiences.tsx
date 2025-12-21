import { useState, useEffect, useRef } from 'react'
import SectionHeader from './common/SectionHeader'
import ServiceCard from './common/ServiceCard'
import styles from '../style/CustomerStories.module.css'
import ImgHandler from './ImgHandler'
import { CustomerExperiencesProps } from '../types/types'
import {motion} from 'framer-motion'

const CustomerExperiences = ( Experiences: CustomerExperiencesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  

  // Auto-advance functionality
  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      
      intervalRef.current = setInterval(() => {
        handleNext()
      }, 6000)
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    // Reset interval to prevent conflicts
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) %  Experiences.notes.length)
      setIsAnimating(false)
      // Restart interval after animation
      intervalRef.current = setInterval(() => {
        handleNext()
      }, 6000)
    }, 700)
  }
  const handlePrevious = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    // Reset interval to prevent conflicts
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + Experiences.notes.length) % Experiences.notes.length)
      setIsAnimating(false)
      
      // Restart interval after animation
      intervalRef.current = setInterval(() => {
        handleNext()
      }, 6000)
    }, 700)
  }
  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return
    
    setIsAnimating(true)
    
    // Reset interval to prevent conflicts
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
      
      // Restart interval after animation
      intervalRef.current = setInterval(() => {
        handleNext()
      }, 6000)
    }, 700)
  }

  const currentStory = Experiences.notes[currentIndex]
  const nextStory = Experiences.notes[(currentIndex + 1) % Experiences.notes.length]

  return (
    <section id='CustomerExperiences' className="pt-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full transform -translate-x-48 translate-y-48"></div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader tagline={Experiences.tagline} title={Experiences.title} />

        {/* Slider Container */}
        <div className="mb-20 relative">
          <div className="relative overflow-crap">
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
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]  ">
              {/* Image Container - Slides from LEFT to LEFT */}
              <div className="relative h-96 overflow-crap rounded-lg md:-rotate-3 hover:rotate-0 duration-500 bg-transparent">
                {/* Current Image */}
                <div 
                  className={`absolute inset-0 w-full h-full  ${
                    isAnimating 
                      ? styles['slider-slide-out-left']
                      : styles['slider-visible']
                  }`}
                >
                  <div className="w-full h-full transform    transition-transform duration-300 ">
                    <ImgHandler 
                      url={currentStory.image.url}
                      alternativeText={currentStory.image.alternativeText}
                      className="w-full h-full object-cover shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
                      // loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured Story
                    </div>
                  </div>
                </div>
                
                {/* Next Image - Only visible during animation */}
                {isAnimating && (
                  <div className={`absolute inset-0 w-full h-full  ${styles['slider-slide-in-left']}`}>
                    <div className="w-full h-full transform ">
                      <ImgHandler 
                        url={nextStory.image.url}
                        alternativeText={nextStory.image.alternativeText}
                        className="w-full h-full shadow-lg object-cover rounded-lg "
                        // loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Featured Story
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content Card - Slides from RIGHT to RIGHT */}
              <div className="relative w-full min-h-[400px] overflow-crap">
                {/* Current Content */}
                <div 
                  className={`absolute w-full inset-0   flex lg:p-10 ${
                    isAnimating 
                      ?  styles['slider-slide-out-right']
                      : styles['slider-visible']
                  }`}
                >
                      <ServiceCard {...currentStory} />
                  
                </div>
                
                {/* Next Content - Only visible during animation */}
                {isAnimating && (
                  <div className={`absolute inset-0 w-full  ${styles['slider-slide-in-right']} flex lg:p-10 `}>
                    <ServiceCard {...nextStory} />
                  </div>
                )}
              </div>
            </div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
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
                          
                    <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={handlePrevious}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Experiences.notes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-200 disabled:cursor-not-allowed ${
                    index === currentIndex 
                      ? 'bg-amber-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
           

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-500 ease-out"
                style={{ 
                  width: `${((currentIndex + 1) / Experiences.notes.length) * 100}%` 
                }}
              />
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>{currentIndex + 1} of {Experiences.notes.length}</span>
              {/* <span>{currentStory.category}</span> */}
            </div>
          </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default CustomerExperiences
