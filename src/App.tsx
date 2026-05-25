import { AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { Article, Tab } from './types';
import { ArticleView } from './views/ArticleView';
import { HomeView } from './views/HomeView';
import { NewsView } from './views/NewsView';
import { WeatherView } from './views/WeatherView';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackFromArticle = () => {
    setSelectedArticle(null);
  };

  // When an article is selected, hide the bottom nav and show the article
  if (selectedArticle) {
    return <ArticleView article={selectedArticle} onBack={handleBackFromArticle} />;
  }

  return (
    <div className="min-h-screen bg-background relative max-w-[480px] mx-auto shadow-2xl overflow-x-hidden">
      <AnimatePresence mode="wait">
        {activeTab === 'home' && <HomeView key="home" onArticleClick={handleArticleClick} />}
        {activeTab === 'weather' && <WeatherView key="weather" />}
        {activeTab === 'news' && <NewsView key="news" onArticleClick={handleArticleClick} />}
        {/* Placeholder for saved and settings */}
        {activeTab === 'saved' && (
          <div key="saved" className="pt-24 px-5 text-center text-on-surface-muted italic font-serif">
            Saved articles will appear here.
          </div>
        )}
        {activeTab === 'settings' && (
          <div key="settings" className="pt-24 px-5 text-center text-on-surface-muted italic font-serif">
            Settings page under construction.
          </div>
        )}
      </AnimatePresence>

      <BottomNav activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}

