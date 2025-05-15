
import React from 'react';
import { BarChart, Eye, Folder, Mail, Users, Award, Download, ArrowUp } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { ProjectTable } from '@/components/dashboard/ProjectTable';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { Project, Activity, PortfolioStats } from '@/types/dashboard';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { useToast } from '@/hooks/use-toast';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

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

  // Portfolio stats
  const portfolioStats: PortfolioStats = {
    totalProjects: 12,
    totalCertifications: 8,
    resumeDownloads: 45,
    totalMessages: 18,
    usersVisited: 1243,
    mostViewedProject: {
      id: 1,
      name: 'E-commerce Redesign',
      views: 487
    }
  };

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
          value={portfolioStats.totalProjects.toString()} 
          icon={<Folder className="text-blue-600" size={24} />} 
          trend={{ value: 12, positive: true }}
        />
        <StatCard 
          title="Certifications" 
          value={portfolioStats.totalCertifications.toString()} 
          icon={<Award className="text-green-600" size={24} />} 
          trend={{ value: 3, positive: true }}
        />
        <StatCard 
          title="Resume Downloads" 
          value={portfolioStats.resumeDownloads.toString()} 
          icon={<Download className="text-purple-600" size={24} />} 
          trend={{ value: 8, positive: true }}
        />
        <StatCard 
          title="Messages" 
          value={portfolioStats.totalMessages.toString()} 
          icon={<Mail className="text-amber-600" size={24} />} 
          trend={{ value: 5, positive: false }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-blue-600" size={20} />
              Users Visited
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{portfolioStats.usersVisited.toLocaleString()}</div>
            <div className="text-sm text-gray-500 mt-1">Last 30 days</div>
            <div className="mt-4 text-sm flex items-center text-green-600">
              <ArrowUp size={16} className="mr-1" />
              <span>12% increase</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="text-purple-600" size={20} />
              Most Viewed Project
            </CardTitle>
            <CardDescription>
              Your top performing project based on views
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">{portfolioStats.mostViewedProject.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Project ID: {portfolioStats.mostViewedProject.id}</p>
              </div>
              <div className="mt-2 sm:mt-0 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <Eye size={16} className="mr-1" />
                {portfolioStats.mostViewedProject.views} views
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>
                <a href="/admin/projects" className="text-sm text-accent font-medium hover:underline">
                  View all
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProjectTable 
                projects={projects}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <RecentActivity activities={activities} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
