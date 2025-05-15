
import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { Toaster } from "@/components/ui/toaster";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar collapsed={sidebarCollapsed} />
      
      <div className="flex-1">
        <AdminHeader toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
        <main className="p-4 md:p-6 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};
