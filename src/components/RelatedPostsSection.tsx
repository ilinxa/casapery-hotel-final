
// import { JournalPost } from '../data/journalPosts'

import { Link } from "react-router-dom";
// import { JournalPost } from "../data/journalPosts";
import { ArrowLeft } from "lucide-react";



// fetch related posts based on categories

const RelatedPostsSection = ( category : any) => {
    // fetch related posts based on categories
    
    // const posts = journalPostsData.filter((post) => post.category === category).slice(0, 3);
  return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-light text-gray-800 mb-4">
                Related Stories
              </h3>
              <p className="text-gray-600 font-light">
                Discover more stories from the {category.toLowerCase()} category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* {posts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/journal/${relatedPost.id}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-light">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-light text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 font-light text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
                        <span className="mr-2">Read Story</span>
                        <ArrowLeft className="w-4 h-4 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))} */}
            </div>
          </div>
        </section>
  )
}

export default RelatedPostsSection