import { useEffect } from 'react'
import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { Calendar, Clock, User, ArrowLeft,  BookOpen, Tag } from 'lucide-react'
// import { journalPostsData } from '../data/journalPosts'
import { useLanguage } from '../context/LanguageContext'
import { useFetch } from '../hooks/useFetch'
// import RelatedPostsSection from '../components/RelatedPostsSection'

import BlockRenderer from '../components/BlockRenderer'
import CreatorCard2 from '../components/CreatorCard2'
import { journalPostsDataType, TagType } from '../types/types'

const StoryPage = () => {
 
  const baseUrl = import.meta.env.VITE_FILE_URL ?? '';
  const { documentId } = useParams<{ documentId: string }>()
  const { lang } = useLanguage();
  // console.log("documentId", documentId)
  
  const { data, isLoading } = useFetch<journalPostsDataType>(`/journals/${documentId}?locale=${lang}`);

  // console.log("post data", data)

  // const post = data.find(p => p.id === parseInt(documentId || '0'))

  // if (!post) {
  //   return <Navigate to="/journal" replace /> 
  // }
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, [pathname]);

  // Get related posts (same category, excluding current post)
  // const relatedPosts = journalPostsData
    // .filter(p => p.category === post.category && p.id !== post.id)
    // .slice(0, 3)
     if (isLoading) return <p>Loading post data...</p>;
    if (!data) return <p>
      <Navigate to="/journal" replace /> 
    </p>;

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${baseUrl}${data.image.url})`
            // backgroundImage: `url(https://casa-pery-server.onrender.com${data.image.url})`
            // backgroundImage: `url(http://localhost:1337${data.image.url})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16">
          {/* Back Button */}
          <Link 
            to="/journal"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-light">Back to Journal</span>
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-amber-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-light">
              {data.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            {data.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="font-light">{data.creator}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-light">{data.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-light">{data.readTime} min</span>
            </div>
            {data.featured &&
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span className="font-light">Featured Story</span>
            </div>
            }
          </div>

          {/* Excerpt */}
          <p className="text-xl text-white/90 font-light leading-relaxed max-w-3xl">
            {data.ShortContent}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Share Buttons */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Tag className="w-4 h-4 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {data.journal_tags.map((tag:TagType, index:number) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-light hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200 cursor-pointer"
                  >
                    {tag.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <h1 className='text-4xl font-light text-gray-800 my-8'>{data.title}</h1>

          {
            data.blockText && data.blockText.length > 0 && (  
            <article>
              <BlockRenderer content={data.blockText} />
            </article>
            )
          }
          {
            data.creator && (
              <CreatorCard2 name={data.creator} />
            )
          }
        </div>
      </article>

      {/* Related Posts Section */}
      {/* <RelatedPostsSection category={data.category} /> */}

      {/* Back to Journal CTA */}
      {/* <section className="py-16 px-6 bg-gradient-to-r from-teal-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-light text-white mb-6">
            Explore More Stories
          </h3>
          <p className="text-teal-100 font-light mb-8 text-lg">
            Discover more extraordinary destinations and cultural experiences in our travel journal
          </p>
          <Link 
            to="/journal"
            className="inline-flex items-center space-x-3 bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Journal</span>
          </Link>
        </div>
      </section> */}
    </div>
  )
}

export default StoryPage
