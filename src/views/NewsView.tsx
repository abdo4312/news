import { motion } from 'motion/react';
import { Bookmark, Search, TrendingUp } from 'lucide-react';
import { TopBar } from '../components/TopBar';
import { MOCK_ARTICLES } from '../data';
import { Article } from '../types';

interface NewsViewProps {
  onArticleClick: (article: Article) => void;
}

export function NewsView({ onArticleClick }: NewsViewProps) {
  const categories = ['All', 'Tech', 'Sports', 'Politics', 'Economy', 'Health'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 flex flex-col min-h-screen"
    >
      <TopBar showSearch={false} />

      <main className="flex-grow pt-4">
        {/* Search */}
        <section className="px-5">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-on-surface-muted w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full bg-surface border border-outline-dim rounded-xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-muted"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mt-6 flex gap-3 overflow-x-auto no-scrollbar px-5 pb-2">
          {categories.map((cat, i) => (
            <button 
              key={cat}
              className={`px-5 py-2 rounded-full whitespace-nowrap text-[11px] font-bold tracking-widest uppercase border transition-colors ${
                i === 0 
                  ? 'bg-primary text-on-primary-container border-primary' 
                  : 'bg-transparent text-on-surface-muted border-outline-dim hover:border-outline'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Trending Section */}
        <section className="mt-8">
          <div className="px-5 flex items-center justify-between mb-4">
            <h2 className="font-serif text-[22px] font-semibold tracking-tight text-on-surface">Trending Now</h2>
            <TrendingUp className="text-primary w-5 h-5" />
          </div>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar px-5 snap-x pb-4">
            {MOCK_ARTICLES.slice(3).reverse().map(article => (
              <div 
                key={article.id}
                onClick={() => onArticleClick(article)}
                className="min-w-[280px] h-[360px] relative rounded-2xl overflow-hidden snap-start flex-shrink-0 border border-outline-dim group cursor-pointer"
              >
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 p-5 w-full flex flex-col gap-2">
                  <span className="bg-primary/20 backdrop-blur-md text-primary border border-primary/20 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-widest w-fit">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white leading-tight mt-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-on-surface-muted/90 mt-1">
                    {article.source} • {article.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Stories */}
        <section className="mt-8 px-5">
          <h2 className="font-serif text-[22px] font-semibold tracking-tight mb-5">Latest Stories</h2>
          <div className="flex flex-col gap-4">
            {MOCK_ARTICLES.slice(0, 3).map(article => (
              <div 
                key={article.id}
                onClick={() => onArticleClick(article)}
                className="flex gap-4 p-3 rounded-2xl border border-outline-dim bg-surface/50 hover:bg-surface transition-colors group cursor-pointer active:scale-[0.98]"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-outline-dim/50">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow py-1">
                  <div>
                    <h4 className="font-serif text-[17px] font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[11px] font-medium text-primary">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-dim" />
                      <span className="text-[11px] text-on-surface-muted">{article.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-on-surface-muted hover:text-primary transition-colors active:scale-90">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
}
