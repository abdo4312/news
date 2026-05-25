import { Home, CloudSnow, Newspaper, Bookmark, Settings } from 'lucide-react';
import { Tab } from '../types';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'weather', icon: CloudSnow, label: 'Weather' },
    { id: 'news', icon: Newspaper, label: 'News' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ] as const;

  return (
    <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-background/80 backdrop-blur-xl border-t border-outline-dim shadow-2xl safe-area-pb">
      {navItems.map(({ id, icon: Icon, label }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 active:scale-95 ${
              isActive ? 'text-primary' : 'text-on-surface-muted hover:text-primary/70'
            }`}
          >
            <div className="relative">
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? 'drop-shadow-sm' : ''}
              />
              {isActive && (
                <motion.div 
                  layoutId="bottom-nav-indicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                />
              )}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest mt-1.5 opacity-90">
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
