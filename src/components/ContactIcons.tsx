import { Mail, MessageCircle, MapPin } from 'lucide-react'

const ContactIcons = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-600 text-sm">
              Paradise Lux Five-O guests services<br />
              Call Phone: Guest Lux Scheduling
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-600 text-sm">
              Paradise Lux Five-O guests services<br />
              Call Phone: Guest Lux Scheduling
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
              <MapPin className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-600 text-sm">
              Paradise Lux Five-O guests services<br />
              Call Phone: Guest Lux Scheduling
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactIcons
