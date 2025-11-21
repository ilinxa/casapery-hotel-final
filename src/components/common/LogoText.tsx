
import { Link } from 'react-router-dom'
import ImgHandler from '../ImgHandler'

interface Props {
    name: string,
    image?: string
    className?: string
}
const LogoText = ({name, image, className}: Props) => {
  return (
    <Link to="/" className={`flex items-center space-x-3  ${className}`}>
        {/* <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-lg"></div> */}
        
        { image &&  
        <ImgHandler url={image} alternativeText={name} className="w-32 invert  object-cover rounded-lg drop-shadow-xl" />}
          

        {/* <img src={image.length > 0 ? image : "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={name} className="w-8 h-8 rounded-lg shadow-lg" /> */}
        <span className=" font-semibold text-lg tracking-wide">
            {/* {name} */}
        </span>
    </Link>
  )
}

export default LogoText