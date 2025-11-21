import { CTASectionProps } from "../types/types";
import FileDlBtn from "./common/FileDlBtn";
import ImgHandler from "./ImgHandler";



const CTASection = (props: CTASectionProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-teal-700 to-teal-600 text-white text-center relative overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 opacity-20">
        { props.image && props.image.url && props.image.url.length > 0 &&
        <ImgHandler 
        url={props.image.url}
        alternativeText={props.image.alternativeText}
        className="w-full h-full object-cover"
        />
      }
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-teal-200 text-sm tracking-wide mb-4">{props.tagline}</p>
        <h2 className="text-4xl md:text-5xl font-light mb-8">
          {props.title}
        </h2>
        <p className="text-teal-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          {props.description}
        </p>
        
      </div>
        {props.fileDownloader && 
        <FileDlBtn {...props.fileDownloader} />
        }
        
    </section>
  )
}

export default CTASection
