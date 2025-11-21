import { ArrowRight } from 'lucide-react'
import { CTAType } from '../../types/types'


const Cta2 = (cta: CTAType) => {
  return (

    <div className="text-center ">
          <a 
          href={
            cta.isWhatsApp ?
            `https://wa.me/${cta.whatsApp_number}` 
            :
            cta.href
          }
            className="bg-gradient-to-r from-amber-600 to-amber-500 justify-center text-white px-10 py-4 rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto">
            <span className="text-lg font-light tracking-wide">{ cta.label}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
    </div>
  )
}

export default Cta2