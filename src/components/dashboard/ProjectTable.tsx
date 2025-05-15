
import React from 'react';
import { Eye, Edit, Trash } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Project } from '@/types/dashboard';

interface ProjectTableProps {
  projects: Project[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

export const ProjectTable: React.FC<ProjectTableProps> = ({
  projects,
  onEdit,
  onDelete,
  onView,
}) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">
                {project.name}
              </TableCell>
              <TableCell>
                {project.category}
              </TableCell>
              <TableCell>
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
              </TableCell>
              <TableCell>
                {project.date}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <button
                    onClick={() => onView(project.id)}
                    className="p-1 text-blue-600 hover:text-blue-900"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => onEdit(project.id)}
                    className="p-1 text-amber-600 hover:text-amber-900"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(project.id)}
                    className="p-1 text-red-600 hover:text-red-900"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
