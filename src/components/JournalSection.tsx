
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

import ImgHandler from './ImgHandler'
import { JournalCardType } from '../types/types'


const JournalSection = ( journalPosts: JournalCardType[]) => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-4 font-light">
            Stories & Insights
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide">
            TRAVEL JOURNAL
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        {/* Featured Post - Asymmetric Layout */}
        <div className="mb-20">
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image with rotation */}
              <div className="relative">
                <div className="transform md:-rotate-2 transition-transform hover:rotate-0 duration-500">
                  <ImgHandler
                    url={journalPosts[0].image.url}
                    alternativeText="Featured Journal Post"
                    className="w-full h-96 object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-light">
                    Featured Story
                  </div>
                </div>
              </div>
              
              {/* Content with opposite rotation */}
              <div className="transform md:rotate-1 transition-transform hover:rotate-0 duration-500">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{journalPosts[0].date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{journalPosts[0].readTime}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-light text-gray-800 mb-4 leading-tight">
                    {journalPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                    {journalPosts[0].ShortContent}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{journalPosts[0].creator}</span>
                    </div>
                    
                    <button className="group flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors">
                      <span className="font-medium">Read Story</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {journalPosts.slice(1).map((post, index) => (
            <div 
              key={post.id} 
              className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? 'md:translate-y-8XXX' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <ImgHandler 
                  url={post.image.url}
                  alternativeText={post.image.alternativeText}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {post.category}
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
                
                <h3 className="text-2xl font-light text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 font-light">
                  {post.ShortContent}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-light">{post.creator}</span>
                  </div>
                  
                  {/* <button className="group/btn flex items-center space-x-1 text-amber-600 hover:text-amber-700 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button> */}
                  {/* <Cta2  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-10 py-4 rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto">
            <span className="text-lg font-light tracking-wide">VIEW ALL STORIES</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default JournalSection
