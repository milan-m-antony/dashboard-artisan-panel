
import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { Toaster } from "@/components/ui/toaster";
import { useIsMobile } from '@/hooks/use-mobile';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isMobile);
  const [sidebarVisible, setSidebarVisible] = useState(!isMobile);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarVisible(!sidebarVisible);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row transition-colors duration-200">
      <AdminSidebar 
        collapsed={sidebarCollapsed} 
        visible={sidebarVisible}
        toggleSidebar={toggleSidebar} 
      />
      
      <div className={`flex-1 transition-all duration-300 w-full 
        ${!isMobile && !sidebarCollapsed ? 'md:ml-64' : !isMobile && sidebarCollapsed ? 'md:ml-[70px]' : ''}
      `}>
        <AdminHeader toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
        <main className="p-3 md:p-6 w-full mx-auto overflow-x-auto">
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
};
