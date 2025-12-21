import { useState } from "react";
import ImgHandler from "../../ImgHandler";
import { ImgType } from "../../../types/types";




const ImageSlider = ({ images }:{images:ImgType[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Handle single image case
  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="relative w-full  overflow-hidden rounded-lg">
        {/* <img 
          src={images[0]} 
          alt="Slide" 
          className="w-full h-full object-cover"
        /> */}
        {
            images[0] && images[0].url && images[0].url.length > 0 &&
            <ImgHandler
            url={images[0].url}
            alternativeText={images[0].alternativeText}
            className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
        }

      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto ">
      {/* Image Container */}
      <div className="  overflow-hidden rounded-lg">
        {/* <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="w-full h-[500px] object-cover rounded-lg shadow-2xl transition-transform duration-300"
        /> */}
        {
            images[currentIndex] && images[currentIndex].url && images[currentIndex].url.length > 0 &&
            images.map((img, idx) => 
                <div key={idx} className={idx === currentIndex ? 'block' : 'hidden' }>
                    <ImgHandler
                    url={img.url}
                    alternativeText={img.alternativeText}
                    className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                    />
                </div>
            )
        }



        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Indicator Dots */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};



export default ImageSlider;