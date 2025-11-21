
import { HeroCardType } from "../../types/types"
import ImgHandler from "../ImgHandler"


const HeroImage = ( { image, title, description}: HeroCardType) => {
    if (title && description) {
        return (
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300  max-h-[20rem]">
                <div className="h-[10rem]">
                    {
                        image && image.url && image.url.length > 0 &&
                        <ImgHandler 
                            url={image.url} 
                            alternativeText={image.alternativeText } 
                            className="w-full h-full  object-cover"
                        />
                    }
                </div>
                <div className="px-6 py-4 max-h-36 flex flex-col justify-center">
                    { 
                        title && title.length > 0 &&
                      <h3 className="text-lg font-light text-gray-800 mb-2 tracking-wide ">
                        {title}
                      </h3>
                    }
                    {
                        description && description.length > 0 &&

                        <p className="text-gray-600 text-sm font-light leading-relaxed">
                            {description}
                        </p>
                    }
                </div>
            </div>
        )
    }
    return (
        <div className="bg-white max-h-[18.5rem] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 h-[15rem] md:h-full ">
            
            <div className="h-full">
                {image && image.url && image.url.length > 0 &&
                <ImgHandler 
                url={image.url} 
                alternativeText={image.alternativeText } 
                className="w-full h-full object-cover" /> 
                }
            </div>
        </div>
    )
}

export default HeroImage
