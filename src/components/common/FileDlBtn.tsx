import { ArrowDown } from 'lucide-react'
import { FileDownloaderType } from '../../types/types'



const FileDlBtn = (props: FileDownloaderType) => {

  const baseUrl = import.meta.env.VITE_FILE_URL ?? '';
  return (

    <div className="text-center ">
          <a 
          href={
            props.externalFile ?
            props.fileUrl
            :
            `${baseUrl}${props.file.url}`
            // `http://localhost:1337${props.file.url}`
            
          }
            className="bg-gradient-to-r from-amber-600/90 to-amber-500/90 justify-center text-white px-8 py-2 rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto">
            <span className="text-md font-light tracking-wide">{ props.label}</span>
            <ArrowDown className="w-4 h-4" />
          </a>
    </div>
  )
}

export default FileDlBtn