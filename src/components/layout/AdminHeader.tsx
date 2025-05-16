
import React from 'react';
import { Bell, ChevronLeft, ChevronRight, Search, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

interface AdminHeaderProps {
  toggleSidebar: () => void;
  collapsed: boolean;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar, collapsed }) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-background border-b border-border py-3 px-4 md:py-4 md:px-6 flex items-center justify-between transition-colors duration-200 sticky top-0 z-20">
      <div className="flex items-center gap-2 md:gap-4">
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-md hover:bg-secondary text-foreground"
          aria-label={collapsed ? "Expand sidebar" : "Toggle sidebar"}
        >
          {isMobile ? (
            <Menu className="h-5 w-5" />
          ) : collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
        <div className="hidden md:flex items-center space-x-2 bg-secondary px-3 py-2 rounded-md">
          <Search size={18} className="text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-sm w-40 lg:w-64 text-foreground"
            aria-label="Search"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeToggle />
        <button className="relative p-1 md:p-2 rounded-full hover:bg-secondary text-foreground" aria-label="Notifications">
          <Bell size={isMobile ? 18 : 20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-2 md:gap-3">
          <Avatar className="h-7 w-7 md:h-9 md:w-9">
            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">Jane Doe</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};
