import { motion } from 'motion/react';
import { CURRENT_WEATHER, DAILY_FORECAST, MOCK_ARTICLES } from '../data';
import { WeatherIcon } from '../components/WeatherIcon';
import { TopBar } from '../components/TopBar';
import { Article } from '../types';

interface HomeViewProps {
  onArticleClick: (article: Article) => void;
}

export function HomeView({ onArticleClick }: HomeViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32"
    >
      <TopBar 
        rightElement={
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-dim ml-2 bg-surface">
             <img 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzPOHpYxmAvHuKnVQLiGPJNLuqcdg6Tm-XuJLclJ20H2j4gOFzHGGdhMFc0rOKC_IDAEyBTQda0Ktiu8fPwHG3ss-gR2Ap9Hm86XVrE-MMWzmYzgFy1P02k00tS6KLNnJymiwaFXtRBVGjrSegHgtuNgcIJbvvGtRrzW4O1-wnZsbnp9Wxdc_KQbsyuUFwU832ArNt2q2GKNRgXWAOeJmtpqJTwDJWBaTXZ6LA8fDV3sMFI7PwFQrRASp_r2xFhMMKpLTcH3ZknNhD" 
            />
          </div>
        }
      />
      
      <main className="px-5 pt-6 space-y-8">
        {/* Greeting */}
        <section>
          <p className="text-xs text-on-surface-muted uppercase font-bold tracking-widest mb-1">
            Monday, 12 June
          </p>
          <h2 className="font-serif text-3xl font-semibold text-on-surface tracking-tight">
            Good Morning, Alex
          </h2>
        </section>

        {/* Weather Hero Card */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-surface-raised border border-outline-dim p-6 shadow-xl group">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-[64px] leading-tight text-on-surface">
                  {CURRENT_WEATHER.temp}°
                </span>
                <span className="text-2xl text-on-surface-muted font-medium">C</span>
              </div>
              <p className="text-primary mt-1 flex items-center gap-2 font-medium">
                <WeatherIcon icon={CURRENT_WEATHER.icon} className="w-5 h-5" />
                {CURRENT_WEATHER.condition}
              </p>
            </div>
            <div className="text-right">
              <WeatherIcon icon="cloudy" className="w-14 h-14 text-secondary/80 mt-2" />
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-outline-dim/50">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-muted tracking-widest mb-1">FEELS LIKE</span>
              <span className="text-sm text-on-surface font-medium">24°</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-muted tracking-widest mb-1">HUMIDITY</span>
              <span className="text-sm text-on-surface font-medium">60%</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-on-surface-muted tracking-widest mb-1">WIND</span>
              <span className="text-sm text-on-surface font-medium">12 km/h</span>
            </div>
          </div>
          
          {/* Decorative glows */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full pointer-events-none" />
        </section>

        {/* 5-Day Forecast */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[11px] font-bold text-on-surface-muted tracking-widest uppercase">5-Day Forecast</h3>
            <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Details</span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 snap-x">
            {DAILY_FORECAST.map((day, i) => (
              <div 
                key={day.day} 
                className={`flex-none flex flex-col items-center p-4 rounded-2xl min-w-[76px] snap-start border ${
                  i === 0 
                    ? 'bg-surface-raised border-outline-dim shadow-md' 
                    : 'bg-surface border-transparent opacity-80'
                }`}
              >
                <span className="text-[11px] font-bold text-on-surface-muted tracking-widest mb-3">
                  {day.day.toUpperCase()}
                </span>
                <WeatherIcon icon={day.icon} className={`w-6 h-6 mb-3 ${i === 0 ? 'text-primary' : 'text-on-surface-muted'}`} />
                <span className="font-semibold text-on-surface">{day.high}°</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Stories */}
        <section className="space-y-6">
          <h3 className="font-serif text-2xl text-on-surface border-l-4 border-primary pl-3 tracking-tight">
            Top Stories
          </h3>
          
          <div className="space-y-6">
            {MOCK_ARTICLES.slice(0, 2).map((article) => (
              <article 
                key={article.id} 
                onClick={() => onArticleClick(article)}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform box-border border border-outline-dim"
              >
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="inline-block bg-primary text-on-primary text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full mb-3 uppercase">
                    {article.category}
                  </span>
                  <h4 className="font-serif text-[22px] font-semibold text-on-surface mb-3 leading-tight tracking-tight">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 text-on-surface-muted">
                    <span className="text-xs font-semibold">{article.source}</span>
                    <span className="w-1 h-1 bg-outline rounded-full" />
                    <span className="text-xs">{article.timestamp}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
}
