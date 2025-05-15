
import React from 'react';
import { Bell, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AdminHeaderProps {
  toggleSidebar: () => void;
  collapsed: boolean;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ toggleSidebar, collapsed }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          )}
        </button>
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md">
          <Search size={18} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-sm w-40 lg:w-64"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Jane Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};
