import { ArrowRight, Calendar,  User } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImgHandler from '../ImgHandler'
import { JournalPost } from '../../types/types'

const JournalCard = ( {post}:{post: JournalPost}) => {
  return (
    <div className='h-max'>

    
            <article 
                // key={post.id}
                className='group cursor-pointer h-full transform transition-all duration-500 hover:scale-105'

              >
                <Link to={`/journal/${post.documentId}`} className="block  h-full">
                  <div className={` rounded-2xl shadow-lg  ${post.featured ? '  ':''} h-full relative overflow-hidden hover:shadow-2xl transition-all duration-500`}>
                    {/* Image */}
                    <div className='relative overflow-hidden  ' >
                      {
                        post.image && post.image.url && post.image.url.length > 0 &&
                        <ImgHandler 
                        url={post.image.url}
                        alternativeText={post.image.alternativeText}
                        className="w-full h-[200px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      }
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                          {
                            post.category && post.category.length > 0 && 
                              <span className="bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light">
                                {post.category}
                              </span>
                          }
                      </div>

                      {/* Featured Badge for first post */}
                      {post.featured  && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-teal-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6   flex flex-col items-start  h-full justify-between">
                      {/* Meta Information */}
                      <div className="flex  items-center gap-4 mb-4 text-gray-500 text-sm">
                        {
                          post.creator && post.creator.length > 0 &&
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.creator}</span>
                        </div>
                        }
                        {
                          post.date && post.date.length > 0 &&
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        }
                        {/* {
                          post.readTime &&
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        } */}
                      </div>

                      {/* Title */}
                      <h3 className='font-lights text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300 '>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      
                      
                      
                      <p className="text-gray-600 leading-relaxed mb-4 font-light">
                        {post.ShortContent}
                      </p>

                      {/* Tags */}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.journal_tags && post.journal_tags.length > 0 &&
                        post.journal_tags.slice(0, 3).map((tag, index) => (
                          <span 
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-light"
                          >
                          {tag.title}
                          </span>
                        ))
                        }
                      
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
                        <span className="mr-2">Read Full Story</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
              
    </div>
  )
}

export default JournalCard