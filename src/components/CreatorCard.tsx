import { User } from 'lucide-react'
interface CreatorCardProps {
    name: string
}
const CreatorCard = (creator:CreatorCardProps ) => {
  return (
    <div className='w-full flex items-center justify-start'>

    <div className="mt-16 w-[300px] p-8 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
        <div className='flex w-full items-center justify-around '>

        <User  className='w-10 h-10 text-white '/>
        <h2 className='text-white font-bold text-xl'>{creator.name}</h2>
        </div>
    </div>
    </div>
  )
}

export default CreatorCard