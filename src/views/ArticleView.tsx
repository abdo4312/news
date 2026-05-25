import { motion } from 'motion/react';
import { ArrowLeft, Bookmark, MessageSquare, Share2, ThumbsUp, PlayCircle } from 'lucide-react';
import { Article } from '../types';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

export function ArticleView({ article, onBack }: ArticleViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="bg-background min-h-screen text-on-surface relative z-50 pb-28"
    >
      {/* Immersive Header */}
      <header className="relative w-full h-[530px] overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1322] via-[#0d1322]/50 to-transparent" />
        
        {/* Navigation Over Image */}
        <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <button 
            onClick={onBack}
            className="p-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/40 text-white transition-colors active:scale-95"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            <button className="p-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/40 text-white transition-colors active:scale-95">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
          <span className="inline-block px-3 py-1 bg-primary text-on-primary-container text-[11px] font-bold uppercase tracking-widest rounded-full mb-4 shadow-lg">
            {article.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-surface">
              {article.author.avatarUrl ? (
                <img src={article.author.avatarUrl} alt={article.author.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/20 text-primary font-bold">
                  {article.author.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">{article.author.name}</span>
              <span className="text-xs text-white/70">{article.timestamp} • {article.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="px-5 mt-8 max-w-2xl mx-auto">
        <div className="flex flex-col gap-6 text-lg text-on-surface/90 leading-[1.7] font-sans">
          {article.content.map((paragraph, index) => {
            if (index === 0) {
              return (
                <p key={index} className="first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:font-bold first-letter:leading-none">
                  {paragraph}
                </p>
              );
            }
            if (index === 2 && article.quote) {
              return (
                <React.Fragment key={`frag-${index}`}>
                  <blockquote className="my-8 py-5 border-l-[3px] border-primary pl-6 bg-surface-raised rounded-r-xl italic font-serif text-2xl text-on-surface-muted leading-snug">
                    {article.quote}
                  </blockquote>
                  <p>{paragraph}</p>
                </React.Fragment>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-outline-dim flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 bg-surface-raised text-on-surface-muted text-[11px] font-bold uppercase tracking-widest rounded-full cursor-pointer hover:bg-outline-dim/50 transition-colors">
              #{tag.toUpperCase().replace(/\s+/g, '')}
            </span>
          ))}
        </div>
      </article>

      {/* Action Bar Sticky Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-outline-dim z-50 flex justify-between items-center safe-area-pb">
        <div className="flex items-center gap-6 pl-2">
          <button className="flex flex-col items-center text-on-surface-muted hover:text-primary transition-colors active:scale-95">
            <ThumbsUp className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold tracking-widest">1.2K</span>
          </button>
          <button className="flex flex-col items-center text-on-surface-muted hover:text-primary transition-colors active:scale-95">
            <MessageSquare className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold tracking-widest">48</span>
          </button>
          <button className="flex flex-col items-center text-on-surface-muted hover:text-primary transition-colors active:scale-95">
            <Share2 className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold tracking-widest">SHARE</span>
          </button>
        </div>
        <button className="bg-primary text-on-primary-container px-6 py-3.5 rounded-full text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-primary-container transition-colors active:scale-95 shadow-lg shadow-primary/20">
          Listen
          <PlayCircle className="w-4 h-4 ml-1" />
        </button>
      </div>
    </motion.div>
  );
}
