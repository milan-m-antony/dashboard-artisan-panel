
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Folder, 
  Mail, 
  Settings, 
  User, 
  LogOut,
  X
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AdminSidebarProps {
  collapsed: boolean;
  visible: boolean;
  toggleSidebar?: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ 
  collapsed, 
  visible, 
  toggleSidebar 
}) => {
  const isMobile = useIsMobile();
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: '/admin/projects', icon: <Folder size={20} /> },
    { name: 'Messages', path: '/admin/messages', icon: <Mail size={20} /> },
    { name: 'Profile', path: '/admin/profile', icon: <User size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  // Don't render sidebar at all on mobile if not visible
  if (isMobile && !visible) {
    return null;
  }

  return (
    <aside 
      className={`bg-sidebar text-sidebar-foreground h-screen ${collapsed ? 'w-[70px]' : 'w-64'} 
        transition-all duration-300 flex flex-col shadow-md z-30
        ${isMobile ? 'fixed' : 'sticky top-0'}
        ${isMobile && visible ? 'translate-x-0' : isMobile && !visible ? '-translate-x-full' : ''}
      `}
    >
      <div className={`py-6 px-4 flex items-center ${collapsed ? 'justify-center' : 'justify-between'} relative`}>
        {!collapsed && (
          <h2 className="text-xl font-bold text-white">Portfolio Admin</h2>
        )}
        {collapsed && (
          <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center text-white font-bold">
            PA
          </div>
        )}
        
        {/* Close button - only visible on mobile */}
        {isMobile && toggleSidebar && (
          <button 
            onClick={toggleSidebar} 
            className="text-gray-300 hover:text-white p-1 rounded-md hover:bg-sidebar-accent/50 transition-colors absolute right-2 top-6"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 mt-6 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={isMobile ? toggleSidebar : undefined}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-sidebar-accent text-white'
                      : 'hover:bg-sidebar-accent/50 text-gray-300 hover:text-white'
                  } ${collapsed ? 'justify-center' : ''}`
                }
                aria-label={item.name}
              >
                <span>{item.icon}</span>
                {!collapsed && <span className="transition-opacity duration-200 text-sm whitespace-nowrap">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <button className={`flex items-center gap-3 w-full px-4 py-2 text-gray-300 hover:text-white rounded-md hover:bg-sidebar-accent/50 transition-colors ${collapsed ? 'justify-center' : ''}`} aria-label="Logout">
          <LogOut size={20} />
          {!collapsed && <span className="transition-opacity duration-200 text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
