
import placeholder from '../public/placeholder.png'

export interface Props {
    url: string,
    alternativeText?: string
    className?: string
}

const ImgHandler = ({url, alternativeText, className}: Props ) => {
    const baseUrl = import.meta.env.VITE_FILE_URL ?? '';
    // console.log("url", url)
  return (
        <img 
        src= {url && url.length > 0 ? 
            baseUrl + url : placeholder }
            // `http://localhost:1337${url}` : placeholder }
            alt={`${alternativeText} image`}
            className={className}
        />
  )
}

export default ImgHandler