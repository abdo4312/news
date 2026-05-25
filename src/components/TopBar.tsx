import { Menu, Search } from 'lucide-react';

interface TopBarProps {
  showSearch?: boolean;
  title?: string;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  rightElement?: React.ReactNode;
}

export function TopBar({ 
  showSearch = true, 
  title = "Atmosphere", 
  onMenuClick, 
  onSearchClick,
  rightElement 
}: TopBarProps) {
  return (
    <header className="flex justify-between items-center px-5 h-16 w-full z-40 sticky top-0 bg-background/90 backdrop-blur-md border-b border-outline-dim">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="text-primary hover:bg-surface-highlight transition-colors p-2 rounded-full -ml-2 active:scale-95"
        >
          <Menu size={24} />
        </button>
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-bold text-primary leading-none tracking-tight">
            {title}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {showSearch && (
          <button 
            onClick={onSearchClick}
            className="text-primary hover:bg-surface-highlight transition-colors p-2 rounded-full active:scale-95"
          >
            <Search size={22} />
          </button>
        )}
        {rightElement}
      </div>
    </header>
  );
}
