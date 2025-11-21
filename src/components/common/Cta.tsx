import { CTAType } from "../../types/types"


export interface Props {
    className?: string
    cta: CTAType
}

const Cta = ({cta, className}: Props) => {
  return (
    <div className="w">
        <a
          href={
            cta.isWhatsApp ?
            `https://wa.me/${cta.whatsApp_number}` 
            :
            cta.href
          }
          className={`
          group relative bg-teal-600/70 backdrop-blur-sm
          border border-white/30 text-white 
          px-8 py-4 rounded-lg 
          hover:bg-teal-600 
          disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-300 
          flex items-center justify-center space-x-3 
          ${className}`}         
        > <span className="text-lg font-light tracking-wide">{ cta.label}</span></a >

    </div>
  )
}

export default Cta