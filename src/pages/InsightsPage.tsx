import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { INSIGHTS_DATA } from '../data/mockData';
import { Insight } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, ChevronRight, Share2, FileText } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<Insight | null>(null);

  const categories = ['ALL', 'Market Notes', 'Partnership Briefings', 'Sponsor Perspectives', 'Funding Notes'];

  const filteredInsights = selectedCategory === 'ALL'
    ? INSIGHTS_DATA
    : INSIGHTS_DATA.filter((i) => i.category === selectedCategory);

  const featuredInsight = INSIGHTS_DATA[0];

  return (
    <div className="min-h-screen bg-[#0B1B2B] text-white selection:bg-[#C5A059] selection:text-[#0B1B2B] pb-safe">
      
      {/* PAGE HEADER */}
      <section className="relative pt-12 sm:pt-16 pb-12 bg-geo-pattern border-b border-[#142A3E] pt-safe overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <Logo variant="circle" height={60} className="mb-4 drop-shadow" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
            Selected Perspectives & Deal Thinking
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 max-w-3xl">
            Haugh Advisory Insights & Market Notes
          </h1>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed font-sans">
            Concise analysis on navigating sovereign regulatory friction, structuring cross-border partnerships, and executing market entry across emerging corridors.
          </p>
        </div>
      </section>

      {/* ARTICLE READER MODAL / EXPANDED VIEW */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-[#0B1B2B]/95 backdrop-blur-md overflow-y-auto p-4 sm:p-8 flex justify-center">
          <div className="max-w-3xl w-full bg-[#142A3E] border border-[#C5A059]/40 rounded-xl p-6 sm:p-10 my-auto relative space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-[#0B1B2B] border border-gray-800 text-xs font-mono"
            >
              ✕ Close Briefing
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#C5A059] bg-[#0B1B2B] px-3 py-1 rounded border border-[#C5A059]/30">
                {activeArticle.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white pt-2 leading-snug">
                {activeArticle.title}
              </h2>
              <div className="flex items-center space-x-4 text-xs text-gray-400 pt-1 border-b border-gray-800 pb-4">
                <span>By <strong>{activeArticle.author}</strong></span>
                <span>•</span>
                <span>{activeArticle.publishedDate}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {activeArticle.imageUrl && (
              <div className="h-64 w-full rounded-lg overflow-hidden">
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-sans">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
              <span className="text-xs text-[#C5A059] font-serif italic">Haugh Advisory Institutional Intelligence</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-[#C5A059] text-[#0B1B2B] px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FEATURED LEAD ARTICLE (EDITORIAL DESIGN) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#142A3E]/80 border border-[#C5A059]/40 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#C5A059] bg-[#0B1B2B] px-3 py-1 rounded border border-[#C5A059]/30">
                  FEATURED BRIEFING
                </span>
                <span className="text-xs text-gray-400">{featuredInsight.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight hover:text-[#C5A059] transition-colors cursor-pointer" onClick={() => setActiveArticle(featuredInsight)}>
                {featuredInsight.title}
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                {featuredInsight.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
              <span className="text-xs text-gray-400">By <strong className="text-white">{featuredInsight.author}</strong> — {featuredInsight.publishedDate}</span>
              <button
                onClick={() => setActiveArticle(featuredInsight)}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:underline"
              >
                <span>Read Full Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-auto overflow-hidden relative">
            <img
              src={featuredInsight.imageUrl}
              alt={featuredInsight.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B1B2B]/90 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERING */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-gray-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C5A059] text-[#0B1B2B] font-bold shadow'
                  : 'bg-[#142A3E]/60 text-gray-300 hover:text-white hover:bg-[#142A3E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-[#142A3E]/70 border border-gray-800 hover:border-[#C5A059]/60 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {article.imageUrl && (
                  <div className="h-48 w-full overflow-hidden relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2B] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-1 rounded bg-[#0B1B2B]/90 text-[#C5A059] border border-[#C5A059]/30">
                      {article.category}
                    </span>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>{article.publishedDate}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-800/80 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">By {article.author}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059] group-hover:underline inline-flex items-center space-x-1">
                  <span>Read</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
