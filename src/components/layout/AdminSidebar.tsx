
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Folder, 
  Mail, 
  Settings, 
  User, 
  LogOut
} from 'lucide-react';

interface AdminSidebarProps {
  collapsed: boolean;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ collapsed }) => {
  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Projects', path: '/admin/projects', icon: <Folder size={20} /> },
    { name: 'Messages', path: '/admin/messages', icon: <Mail size={20} /> },
    { name: 'Profile', path: '/admin/profile', icon: <User size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside 
      className={`bg-sidebar text-sidebar-foreground h-screen ${collapsed ? 'w-[70px]' : 'w-64'} transition-all duration-300 flex flex-col shadow-md fixed md:relative z-20`}
    >
      <div className={`py-6 px-4 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && (
          <h2 className="text-xl font-bold text-white">Portfolio Admin</h2>
        )}
        {collapsed && (
          <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center text-white font-bold">
            PA
          </div>
        )}
      </div>

      <nav className="flex-1 mt-6 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? 'bg-sidebar-accent text-white'
                      : 'hover:bg-sidebar-accent/50 text-gray-300 hover:text-white'
                  }`
                }
                aria-label={item.name}
              >
                <span>{item.icon}</span>
                {!collapsed && <span className="transition-opacity duration-200">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <button className="flex items-center gap-3 w-full px-4 py-2 text-gray-300 hover:text-white rounded-md hover:bg-sidebar-accent/50 transition-colors" aria-label="Logout">
          <LogOut size={20} />
          {!collapsed && <span className="transition-opacity duration-200">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
