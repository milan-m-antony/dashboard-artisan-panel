
import React, { useState } from 'react';
import { AdminLayout } from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Plus, Search } from 'lucide-react';
import { Project } from '@/types/dashboard';
import { ProjectTable } from '@/components/dashboard/ProjectTable';
import { useToast } from '@/hooks/use-toast';

const Projects = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const projects: Project[] = [
    { id: 1, name: 'E-commerce Redesign', category: 'Web Design', status: 'published', date: '2023-05-12' },
    { id: 2, name: 'Mobile Banking App', category: 'UI/UX Design', status: 'published', date: '2023-04-28' },
    { id: 3, name: 'Social Network Platform', category: 'Web Development', status: 'draft', date: '2023-05-15' },
    { id: 4, name: 'Fitness Tracker', category: 'Mobile App', status: 'draft', date: '2023-05-18' },
    { id: 5, name: 'Restaurant Booking System', category: 'Web Development', status: 'published', date: '2023-03-10' },
    { id: 6, name: 'Healthcare Dashboard', category: 'Data Visualization', status: 'published', date: '2023-02-25' },
    { id: 7, name: 'Travel Companion App', category: 'Mobile App', status: 'draft', date: '2023-05-22' },
    { id: 8, name: 'Personal Finance Manager', category: 'Web App', status: 'published', date: '2023-04-05' },
  ];

  const filteredProjects = searchTerm 
    ? projects.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects;

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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage your portfolio projects</p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Project
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow mb-6 p-4">
        <div className="flex items-center px-2 py-1 rounded-md border border-gray-300">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search projects..."
            className="flex-1 outline-none text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ProjectTable 
          projects={filteredProjects}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Projects;
