import { User } from 'lucide-react'
interface CreatorCardProps {
    name: string
}
const CreatorCard2 = (creator:CreatorCardProps ) => {
  return (
          <div className="mt-16 w-fit p-4 bg-gradient-to-r from-gray-50 to-teal-50 shadow-md rounded-2xl">
            <div className="flex items-center justify-center space-x-6">
              
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white  font-light">
                {/* {data.creator.split(' ').map(n => n[0]).join('')} */}
                <User className='w-10 h-10'/>
              
              </div>
              <div className="flex-1 flex items-center justify-center">
                <h4 className="text-xl font-light text-gray-800 mb-2">{creator.name}</h4>
                {/* <p className="text-gray-600 font-light leading-relaxed">
                  A passionate travel writer and cultural explorer, {data.creator.split(' ')[0]} has spent over a decade discovering the world's most extraordinary destinations. With a focus on sustainable luxury and authentic cultural experiences, their stories inspire mindful travel and deeper connections with the places we visit.
                </p> */}
                {/* <div className="flex space-x-4 mt-4">
                  <button className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                    Follow on Twitter
                  </button>
                  <button className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                    More Stories
                  </button>
                </div> */}
              </div>
            </div>
          </div>
  )
}

export default CreatorCard2