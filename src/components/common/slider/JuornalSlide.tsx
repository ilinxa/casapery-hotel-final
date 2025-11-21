// import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import ButtonBlr from '../ButtonBlr'
// import {motion} from "framer-motion"
// import { JournalCardType } from '../../../types/types'


// type Props = {
//   post: JournalCardType
//   onPrev: () => void
//   onNext: () => void
//   onPause: () => void
// }

// const JournalSlide = ({ post, onPrev, onNext, onPause }: Props) => (
//   // console.log("post", post.image),
//   <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl ">
//     {/* background image */}
//     <div
//       className="absolute inset-0 transition-all duration-1000 ease-out"
//       style={{
//         backgroundImage: `url(http://localhost:1337${post.image.url})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         transform: 'scale(1.1)'
//       }}
//     >
//       {/* bakground dark layer*/}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
//     </div>
      

      
//     <div className="relative h-full flex items-center justify-center md:justify-start">
      
//       <div className="w-full  text-center sm:text-left max-w-3xl px-12 md:px-24">
        
//                     <motion.div
//         initial={{opacity:0, x:-100}} 
//         whileInView={{opacity:1, x:0}}
//         viewport={{ once: true }}
//         transition={{
//             type:"spring",
//             stiffness:20,
//             damping:10,
//             delay:.6
//         }}
//           className='h-full'
//         >
//         <div className="inline-flex items-center space-x-2 mb-6">
//           <span className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-light">
//             {post.category}
//           </span>
//           <span className="text-white/80 text-sm">Featured Story</span>
//         </div>

//          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight animate-slideUp">
//           {post.title}
//         </h3>

//         <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-light max-w-2xl animate-slideUp animation-delay-100">
//           {post.ShortContent}
//         </p>

//         <div className="flex flex-wrap items-center gap-6 mb-8 text-white/80 animate-slideUp animation-delay-200">
//           <div className="flex items-center space-x-2">
//             <User className="w-4 h-4" />
//             <span className="text-sm font-light">{post.creator}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Calendar className="w-4 h-4" />
//             <span className="text-sm font-light">{post.date}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Clock className="w-4 h-4" />
//             <span className="text-sm font-light">{post.readTime} </span>
//           </div>
//         </div>
//         </motion.div>
        
//         <motion.div
//         initial={{opacity:0, y:100}} 
//         whileInView={{opacity:1, y:0}}
//         viewport={{ once: true }}
//         transition={{
//             type:"spring",
//             stiffness:20,
//             damping:10,
//             delay:1.2
//         }}
//           className='h-full'
//         >

//         <div className='w-full  flex items-center justify-center md:justify-start '>

//           <Link to={`/journal/${post.documentId}`}>
//             <ButtonBlr title="READ FULL STORY" iconRight={<ArrowRight />} />
//           </Link>
//         </div>
//         </motion.div>

//       </div>
//     </div>
    
//     <button
//       onClick={onPrev}
//       className="absolute  left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full  hidden  md:flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
//       onMouseEnter={onPause}
//     >
//       <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
//     </button>
    
//     <button
//       onClick={onNext}
//       className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hidden  md:flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
//       onMouseEnter={onPause}
//     >
//       <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
//     </button>
    
//   </div>
// )

// export default JournalSlide

import { Calendar, Clock, ArrowRight, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonBlr from "../ButtonBlr";
import { motion, AnimatePresence } from "framer-motion";
import { JournalCardType } from "../../../types/types";

type Props = {
  post: JournalCardType;
  onPrev: () => void;
  onNext: () => void;
  onPause: () => void;
};
 const baseUrl = import.meta.env.VITE_FILE_URL ?? '';

const JournalSlide = ({ post, onPrev, onNext, onPause }: Props) => (
  
  <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
    {/* Background with fade/zoom animation */}
    <AnimatePresence mode="wait">
      <motion.div
        key={post.image.url} // important: forces exit/enter
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${baseUrl}${post.image.url})`,
          // backgroundImage: `url(http://localhost:1337${post.image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{  scale: 1.3 }}
        animate={{  scale: 1 }}
        exit={{  scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </motion.div>
    </AnimatePresence>

    {/* Foreground text content */}
    <div className="relative h-full flex items-center justify-center md:justify-start">
      <div className="w-full text-center sm:text-left max-w-3xl px-12 md:px-24">
        {/* Category + Featured */}
        <motion.div
          key={`meta-${post.documentId}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center space-x-2 mb-6"
        >
          {
            post.category &&
          <span className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-light">
            {post.category}
          </span>
          }
          {/* <span className="text-white/80 text-sm">Featured Story</span> */}
        </motion.div>

        {/* Title */}
        <motion.h3
          key={`title-${post.documentId}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight"
        >
          {post.title}
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          key={`excerpt-${post.documentId}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-light max-w-2xl line-clamp-4"
        >
          {post.ShortContent}
        </motion.p>

        {/* Meta info */}
        <motion.div
          key={`meta-info-${post.documentId}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-wrap items-center gap-6 mb-8 text-white/80"
        >

          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-light">{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-light">{post.readTime} </span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span className="text-sm font-light">{post.creator}</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          key={`button-${post.documentId}`}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="w-full flex items-center justify-center md:justify-start"
        >
          <Link to={`/journal/${post.documentId}`}>
            <ButtonBlr title="READ FULL STORY" iconRight={<ArrowRight />} />
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Navigation buttons */}
    <button
      onClick={onPrev}
      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hidden md:flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
      onMouseEnter={onPause}
    >
      <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
    </button>

    <button
      onClick={onNext}
      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hidden md:flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
      onMouseEnter={onPause}
    >
      <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
    </button>
  </div>
);

export default JournalSlide;
