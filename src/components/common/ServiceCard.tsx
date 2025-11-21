import { Calendar, User } from 'lucide-react'
import { ExperienceNoteType } from '../../types/types'

const ServiceCard = ( props: ExperienceNoteType) => {
  return (
    <div className="transform w-full md:rotate-3 transition-transform hover:rotate-0 duration-500">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <span className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{props.date}</span>
          </span>

        </div>
                  
        <h3 className="text-3xl font-light text-gray-800 mb-4 leading-tight">
          {props.title}
        </h3>
          
        <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
          {props.note}
        </p>
        
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-2 text-amber-600">
            <User className="w-4 h-4" />
            <span className="text-sm">{ props.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
