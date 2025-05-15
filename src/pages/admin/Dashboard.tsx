
import React from 'react';
import { BarChart, Eye, Folder, Mail, ArrowUp, ArrowDown } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { ProjectTable } from '@/components/dashboard/ProjectTable';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { Project, Activity } from '@/types/dashboard';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { toast } = useToast();

  // Sample data
  const projects: Project[] = [
    { id: 1, name: 'E-commerce Redesign', category: 'Web Design', status: 'published', date: '2023-05-12' },
    { id: 2, name: 'Mobile Banking App', category: 'UI/UX Design', status: 'published', date: '2023-04-28' },
    { id: 3, name: 'Social Network Platform', category: 'Web Development', status: 'draft', date: '2023-05-15' },
    { id: 4, name: 'Fitness Tracker', category: 'Mobile App', status: 'draft', date: '2023-05-18' },
  ];

  const activities: Activity[] = [
    { id: 1, type: 'project', description: 'New project "E-commerce Redesign" was published', time: '2 hours ago' },
    { id: 2, type: 'message', description: 'You received a new message from John Smith', time: '5 hours ago' },
    { id: 3, type: 'system', description: 'System update completed', time: 'Yesterday at 11:30 PM' },
    { id: 4, type: 'project', description: 'Project "Mobile Banking App" was updated', time: '2 days ago' },
  ];

  const handleEdit = (id: number) => {
    toast({
      title: "Edit Project",
      description: `Editing project with ID: ${id}`,
    });
  };

  const handleDelete = (id: number) => {
    toast({
      title: "Delete Project",
      description: `Are you sure you want to delete project with ID: ${id}?`,
      variant: "destructive",
    });
  };

  const handleView = (id: number) => {
    toast({
      title: "View Project",
      description: `Viewing project with ID: ${id}`,
    });
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back to your portfolio admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Projects" 
          value="12" 
          icon={<Folder className="text-blue-600" size={24} />} 
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Project Views" 
          value="2.4k" 
          icon={<Eye className="text-green-600" size={24} />} 
          trend={{ value: 8, positive: true }}
        />
        <StatCard 
          title="New Messages" 
          value="18" 
          icon={<Mail className="text-amber-600" size={24} />} 
          trend={{ value: 5, positive: false }}
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.2%" 
          icon={<BarChart className="text-purple-600" size={24} />} 
          trend={{ value: 2, positive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="dashboard-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Recent Projects</h3>
              <a href="/admin/projects" className="text-sm text-accent font-medium hover:underline">
                View all
              </a>
            </div>
            <ProjectTable 
              projects={projects}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          </div>
        </div>
        <div>
          <RecentActivity activities={activities} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
