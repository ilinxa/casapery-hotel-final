import  { useState } from 'react'
import AmenityCard from './common/categories/AmenityCard'
import { ServiceSectionProps } from '../types/types';

const ServiceSection = (services : ServiceSectionProps) => {
      const [hoveredAmenity, setHoveredAmenity] = useState<number | null>(null);
  return (
        <section id='RoomCategories' className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" >
        <div className="max-w-7xl mx-auto relative">    

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-gray-800 mb-3">{services.tagline}</h3>
            <p className="text-gray-500 font-light">{services.title}</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {services.serviceCard.map((service, index) => (
              <AmenityCard
                key={index}
                amenity={service}
                isHovered={hoveredAmenity === index}
                onHover={() => setHoveredAmenity(index)}
                onLeave={() => setHoveredAmenity(null)}
              />
            ))}
          </div>

          {/* <PremiumFeatures /> */}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection