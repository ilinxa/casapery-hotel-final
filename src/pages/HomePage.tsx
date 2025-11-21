import HeroSection from '../components/HeroSection'
import HeadlineSection from '../components/HeadlineSection'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import JournalSliderSection from '../components/JournalSliderSection'
import RoomCategories from '../components/RoomCategories'
import CustomerExperiences from '../components/CustomerExperiences'
import EventSection from '../components/EventSection'
import { useLanguage } from '../context/LanguageContext'
import { useFetch } from '../hooks/useFetch'
import LoadingPage from '../components/LoadingPage'
// import ServiceSection from '../components/ServiceSection'


const HomePage = () => {
  const baseUrl = import.meta.env.VITE_FILE_URL ?? '';
  const { lang } = useLanguage();
  const { data: data, isLoading, error  } = useFetch<any>(`/landing-page?locale=${lang}`);
  // console.log("Landing Page Data", data)
  const location = useLocation()
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 100) // small delay to ensure DOM is ready
      }
    }
  }, [location])
  
  if (isLoading) return <LoadingPage message='Loading...'/>;
  if (!data) return <LoadingPage message='Sorry no data found'/>;
  if (error) console.log("Error loading home data: ", error); // return <p>Error loading global data</p>;
  return (
    <div className="min-h-screen bg-white">
      {
        data.blocks.map((Block: any, index: number) => {
          if (Block.__component === "blocks.hero") {
            return <HeroSection {...Block} key={index} />
          }
          if (Block.__component === "blocks.preface") {
            return (
              <div 
              key={index}
              className="relative bg-cover bg-center bg-no-repeat bg-white"
              style={{
                height: "",
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 1.85), rgba(255, 255, 255, 0.85)), url(${baseUrl}${Block.bgImage.url})`
                // backgroundImage: `linear-gradient(rgba(255, 255, 255, 1.85), rgba(255, 255, 255, 0.85)), url('https://casa-pery-server.onrender.com${Block.bgImage.url}')`
                // backgroundImage: `linear-gradient(rgba(255, 255, 255, 1.85), rgba(255, 255, 255, 0.85)), url('http://localhost:1337${Block.bgImage.url}')`
              }}>
                {
                  Block.headline && (
                    <HeadlineSection {...Block.headline}  />
                  )
                }
                {
                  Block.aboutus &&  (
                    <AboutSection {...Block.aboutus}  />
                  )
                }
              </div>
            )           
          }
          if (Block.__component === "blocks.room") {
            return <RoomCategories {...Block} key={index} />
          }
          if (Block.__component === "blocks.event-card") {
            if (Block.isActive) {
              return <EventSection {...Block} key={index} />
            }

          }
          if (Block.__component === "blocks.travel-experiences") {
            return <CustomerExperiences {...Block} key={index} />
          }
          
          if (Block.__component === "blocks.journals-section") {
            console.log("Journal Section Block: ", Block)
            return <JournalSliderSection {...Block} key={index} />
          }

          // if (Block.__component === "blocks.bottom-card") {
          //   return <CTASection {...Block} key={index} />
          // }
        })
      }

      {/* <ServiceSection  {...serviceCardData} /> */}

    </div>
  )
}

export default HomePage
