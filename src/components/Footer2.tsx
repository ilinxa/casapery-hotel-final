import { FileDownloaderType, ImgType } from '../types/types';
import ImgHandler from './ImgHandler';
import { Mail, MapPin, Phone} from 'lucide-react';
import FileDlBtn from './common/FileDlBtn';
import { motion } from 'framer-motion';
interface ContactUsTypes{
    content: string;
    link? : string;
    title: string;
}
interface LogoLinkType{
    href: string;
    id: number;
    isExternal: boolean;
    label: string;
    logo: ImgType
}
interface SocialLinkType{
    title: string;
    link: string;
    icon: ImgType
}
interface FooterData {
    Address:ContactUsTypes
    email:ContactUsTypes
    phoneNumber:ContactUsTypes
    license:string;
    logo: LogoLinkType
    socialLinks: SocialLinkType[]
    image: ImgType
    note: string
    file: FileDownloaderType
}
const Footer2 = (footerData:FooterData) => {

  return (
    <section className=" bg-gradient-to-t from-teal-700 to-teal-600 text-white text-center relative overflow-hidden flex  flex-col items-center">
      <div className="absolute inset-0 opacity-20  h-full">

        { footerData.image && footerData.image.url && footerData.image.url.length > 0 &&
            <motion.div
                  initial={{opacity:0, y:100}} 
                  whileInView={{opacity:1, y:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:.6
                  }}
                    className='w-full h-full'
                  >

            <ImgHandler 
            url={footerData.image.url}
            alternativeText={footerData.image.alternativeText}
            className="w-full h-full object-cover"
            />
            </motion.div>
        }
      </div>

      <div className='flex flex-col md:flex-row  items-center justify-around w-full z-50 py-20 '>
                    <motion.div
                  initial={{opacity:0, x:-100}} 
                  whileInView={{opacity:1, x:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:.6
                  }}
                    className='flex flex-col items-center justify-center flex-1 '
                  >


       
          {footerData.logo && footerData.logo.logo && footerData.logo.logo.url && footerData.logo.logo.url.length > 0 &&
            <ImgHandler 
            url={footerData.logo.logo.url}
            alternativeText={footerData.logo.logo.alternativeText}
            className="w-[15rem] invert pb-6"
            />
          }
          {footerData.logo && footerData.logo.label &&
            <p className="text-sm mb-4 max-w-[19rem]">{footerData.note}</p>
          }
          {
            footerData.file && footerData.file.label && footerData.file.file.url &&
          <FileDlBtn { ...footerData.file} />
          }
          </motion.div>
        

        {/* Contact section */}

                <motion.div
                  initial={{opacity:0, y:-100}} 
                  whileInView={{opacity:1, y:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:.6
                  }}
                    className='flex flex-col my-4 items-center justify-center flex-1'
                  >
            

            <h3 className='text-3xl  mb-8 font-light'>Contact Us</h3>

            {footerData.Address && footerData.Address.content &&
                <div className='flex flex-col px-10 md:flex-row  items-center justify-center gap-2'>
                    
                    <MapPin className='w-5 h-5' />
                    <p className='mb-2'>
                        {footerData.Address.link && footerData.Address.link.length > 0 ? (
                            
                            <a href={footerData.Address.link}
                            className='underline cursor-pointer'>{footerData.Address.content}</a>
                        ):(
                            <span>{footerData.Address.content}</span>
                        )
                    }
                    </p>
                </div>
            }
            
            {footerData.phoneNumber && footerData.phoneNumber.content &&
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                <Phone className='w-5 h-5' />
                <p className='mb-2'>
                    {footerData.phoneNumber.link && footerData.phoneNumber.link.length > 0 ? (
                        
                        <a href={`tel:${footerData.phoneNumber.link}`}
                        className='underline cursor-pointer'>{footerData.phoneNumber.content}</a>
                    ):(
                        <span>{footerData.phoneNumber.content}</span>
                    )
                }
                </p>
                </div>
            }
            {footerData.email && footerData.email.content &&
                <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <p className='mb-2'>
                        {footerData.email.link && footerData.email.link.length > 0 ? (
                            
                            <a href={`mailto:${footerData.phoneNumber.link}`}
                            className='underline cursor-pointer'>{footerData.email.content}</a>
                        ):(
                            <span>{footerData.email.content}</span>
                        )
                    }
                    </p>
                </div>
            }
            

        
        </motion.div>

        {/* Social media section */}
  
            <motion.div
                  initial={{opacity:0, x:100}} 
                  whileInView={{opacity:1,x:0}}
                  viewport={{ once: true }}
                  transition={{
                      type:"spring",
                      stiffness:20,
                      damping:10,
                      delay:.6
                  }}
                    className='flex flex-col items-center justify-center flex-1'
                  >

                  
            <h3 className='text-2xl  my-4 mb-10 font-light'>Follow Us</h3>
            <ul className='flex flex-row items-center justify-center gap-6'>
                {
                    footerData.socialLinks && footerData.socialLinks.length > 0 &&
                    footerData.socialLinks.map((link:SocialLinkType) => (
                        <li key={link.title} >
                            <a href={link.link} target="_blank" rel="noopener noreferrer">
                                <ImgHandler 
                                url={link.icon.url}
                                alternativeText={link.icon.alternativeText}
                                className="w-[2rem] invert "
                                />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </motion.div>

      </div>
        {/* Bottom copyright section */}
        <motion.div
            initial={{opacity:0, y:10}} 
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{
                type:"spring",
                stiffness:20,
                damping:10,
                delay:.6
            }}
            className='w-full  bg-teal-700/90 shadow-sm  py-4 z-50'
            >


        <p>
            <span className='text-teal-100 text-[10px] w-full'>&copy; {new Date().getFullYear()} {footerData.license} <a className='text-[10px] text-teal-300' href="https://ilinxa.com" target="_blank"> powered by ilinxa</a></span>
        </p>

   
                  </motion.div>
    </section>
  )
}


export default Footer2