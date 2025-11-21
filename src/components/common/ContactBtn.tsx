interface Props {
    title: string,
    whatsappnumber?: string
    link?: string
}
const ContactBtn = ( {title, whatsappnumber, link}: Props) => {
  return (

        <a  href={
            whatsappnumber ?
            `https://wa.me/${whatsappnumber}`
        
            :
            `${link}`
        } 
        
        className="  bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full hover:from-teal-600 hover:to-teal-700 hover:scale-105 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
            {title}
        </a>
  )
}

export default ContactBtn

// link="https://www.google.com"