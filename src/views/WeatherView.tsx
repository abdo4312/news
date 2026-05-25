import { motion } from 'motion/react';
import { TopBar } from '../components/TopBar';
import { WeatherIcon } from '../components/WeatherIcon';
import { CURRENT_WEATHER, DAILY_FORECAST, HOURLY_FORECAST } from '../data';
import { CloudRain, Gauge, Eye, Sun } from 'lucide-react';

export function WeatherView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32"
    >
      <TopBar showSearch={false} />

      {/* Hero Weather Area */}
      <section className="w-full min-h-[360px] flex flex-col items-center justify-end relative overflow-hidden px-5 py-10 bg-gradient-to-b from-[#004c69] to-background">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCStuWWi3rRTzFXshp2v2zTAx_zS-IIYxQYlNUBWiV3wlyIuaL9Svn_aCwBLJyNhNab2PJxAYpCDJjtJde24upmfOvs2TbE3Bq2WT2y0040XFmtTv2jlnnrPwZu7SCa8YJljwGmgBW4KIuegOb2UwYNF7qfe7mQYmYaFQzUgyCR-2PrENSY4_3OY_F8jcQTJQG7Dz68dd9Hb_XxClIv4DTfjMOsMQ1P_u7cDyNj231xBcWkwSUSC_0oS7FL_260JlLK9BNuDQIR7NIK" 
            alt="Sky background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center space-y-3 w-full">
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-4">
            Current Weather
          </p>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-serif text-[88px] leading-none text-on-surface drop-shadow-lg font-medium">
              {CURRENT_WEATHER.temp}°<span className="text-5xl ml-1">C</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <WeatherIcon icon={CURRENT_WEATHER.icon} className="text-secondary w-8 h-8 drop-shadow-md" />
              <span className="font-serif text-3xl font-medium tracking-tight drop-shadow-md">{CURRENT_WEATHER.condition}</span>
            </div>
          </div>
          
          <div className="bg-surface-raised/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full inline-flex gap-6 mt-6 shadow-2xl">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-widest text-on-surface-muted">HIGH</span>
              <span className="text-sm font-medium">{CURRENT_WEATHER.high}°</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-widest text-on-surface-muted">LOW</span>
              <span className="text-sm font-medium">{CURRENT_WEATHER.low}°</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Forecast Chart */}
      <section className="px-5 mt-8">
        <h3 className="text-[11px] font-bold text-on-surface-muted tracking-widest uppercase mb-4">Hourly Forecast</h3>
        <div className="bg-surface border border-outline-dim rounded-2xl p-5 overflow-x-auto no-scrollbar">
          <div className="flex justify-between items-end min-w-[400px] h-36 gap-4">
            {HOURLY_FORECAST.map((hr, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                <span className="text-xs font-medium text-on-surface-muted">{hr.time}</span>
                <div 
                  className={`w-2 rounded-full transition-all duration-700 ease-out group-hover:bg-primary-container ${i === 0 ? 'bg-primary' : 'bg-primary/50'}`}
                  style={{ height: `${hr.heightPercent}%` }}
                />
                <span className="text-sm font-semibold">{hr.temp}°</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Day Forecast */}
      <section className="px-5 mt-8">
        <h3 className="text-[11px] font-bold text-on-surface-muted tracking-widest uppercase mb-4">7-Day Forecast</h3>
        <div className="bg-surface border border-outline-dim rounded-2xl overflow-hidden divide-y divide-outline-dim/50 shadow-sm">
          <div className="flex items-center justify-between p-4 bg-surface-raised font-medium">
            <span className="w-24">Today</span>
            <WeatherIcon icon={CURRENT_WEATHER.icon} className="text-secondary w-5 h-5" />
            <div className="flex gap-4 w-24 justify-end">
              <span>{CURRENT_WEATHER.high}°</span>
              <span className="text-on-surface-muted">{CURRENT_WEATHER.low}°</span>
            </div>
          </div>
          {DAILY_FORECAST.slice(1).map((day) => (
            <div key={day.day} className="flex items-center justify-between p-4 hover:bg-surface-raised transition-colors cursor-pointer">
              <span className="w-24 font-medium">{day.day}</span>
              <WeatherIcon icon={day.icon} className={`w-5 h-5 ${day.icon === 'sunny' ? 'text-secondary' : 'text-primary'}`} />
              <div className="flex gap-4 w-24 justify-end font-medium">
                <span>{day.high}°</span>
                <span className="text-on-surface-muted">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Details Grid */}
      <section className="px-5 mt-8">
        <h3 className="text-[11px] font-bold text-on-surface-muted tracking-widest uppercase mb-4">Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <DetailCard icon={Sun} title="UV INDEX" value="3" subtitle="Moderate" />
          <DetailCard icon={Gauge} title="PRESSURE" value="1012 hPa" subtitle="Steady" />
          <DetailCard icon={Eye} title="VISIBILITY" value="10 km" subtitle="Clear" />
          <DetailCard icon={CloudRain} title="HUMIDITY" value="60%" subtitle="Dew point 14°" />
        </div>
      </section>
    </motion.div>
  );
}

function DetailCard({ icon: Icon, title, value, subtitle }: { icon: any, title: string, value: string, subtitle: string }) {
  return (
    <div className="bg-surface border border-outline-dim rounded-2xl p-4 flex flex-col gap-2 group hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-2 text-on-surface-muted mb-1">
        <Icon className="w-4 h-4" strokeWidth={2.5} />
        <span className="text-[10px] font-bold tracking-widest uppercase">{title}</span>
      </div>
      <p className="font-serif text-2xl font-semibold">{value}</p>
      <span className="text-xs text-on-surface-muted">{subtitle}</span>
    </div>
  );
}
