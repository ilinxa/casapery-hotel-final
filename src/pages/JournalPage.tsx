
import { useLocation } from 'react-router-dom'
import {  ArrowRight } from 'lucide-react'
import SectionHeader from '../components/common/SectionHeader'

import { useEffect } from 'react'
import JournalCard from '../components/common/JournalCard'
import { useLanguage } from '../context/LanguageContext'
import { useFetch } from '../hooks/useFetch'

import { JournalPageProps } from '../types/types'
import LoadingPage from '../components/LoadingPage'
import placeholder from ".././public/placeholder.png"
import ImgHandler from '../components/ImgHandler'
import { motion } from 'framer-motion'



const JournalPage = () => {
      const { lang } = useLanguage();
      const { data: data, isLoading, error  } = useFetch<JournalPageProps>(`/journal-page?locale=${lang}`);
  
      // console.log("journal Page Data", data)
  
  
  const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, [pathname]);
  if (isLoading) return <LoadingPage message='Loading...'/>
  // if (error) return console.log(error)
  if (!data) return <LoadingPage message='Sorry no data found'/>
  if (error) return <LoadingPage message='there was an error'/>

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex -z-40 items-center justify-center overflow-hidden">
        {/* { data.bgImage && data.bgImage.url && data.bgImage.url.length > 0 && */}

            <div 
            className="absoluteXX fixed  bg-black w-full h-full flex xxxitems-center xxxjustify-center"

            > 
            {
              data.bgImage && data.bgImage.url && data.bgImage.url.length > 0 ? (

                <ImgHandler url={data.bgImage.url} alternativeText={data.bgImage.alternativeText}
                className='w-full h-full  object-cover' />
              ) : (
                
                <img src={placeholder} alt="placeholder" className='w-full inset-0 object-cover' />
              )
            }
            </div>
          
        
        <div className="relative z-10 text-center text-gray-50 max-w-4xl mx-auto px-6  h-full flex flex-col items-center justify-end">
          {            data.title  && data.title.length > 0 &&          
          <h1
          className="text-4xl sm:text-5xl md:text-[5rem] font-black  -mb-[7px] tracking-wide text-nowrap uppercase">
            { data.title}
          </h1>

          } 
          {/* <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
            { journalPageData.PageDescription}
          </p> */}
        </div>
      </section>

      {/* Journal Posts Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white z-40 shadow-md" >
        <div className="max-w-7xl mx-auto">
          {
            data.tagline  && data.tagline.length > 0 &&

          <SectionHeader 
          tagline={data.tagline} 
          title={data.title}
          description={data.description}/>

          }
          {/* Posts Grid */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              data.journals.length > 0 &&

              data.journals.map((post, index) => (
              <motion.div
                  initial={{opacity:0, y:100}} 
                            whileInView={{opacity:1, y:0}}
                            viewport={{ once: true }}
                            transition={{
                                type:"spring",
                                stiffness:20,
                                damping:10,
                                delay:.5 + (index * 0.5)
                            }}
                             key={index}
                  > 

              
              <JournalCard post={post} />
            </motion.div>
            ))
            }
          </div>

          {/* Load More Button */}
          {
            data.journals.length > 5 && (
              <div className="text-center mt-16">
                <button className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-10 py-4 rounded-lg hover:from-teal-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto">
                  <span className="text-lg font-light tracking-wide">
                    {lang === "en" ? "LOAD MORE STORIES" : "Daha Fazla "}                    
                    </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
            )
          }
        </div>
      </section>

    </div>
  )
}

export default JournalPage
