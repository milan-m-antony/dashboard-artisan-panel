
import React from 'react';
import { Eye, Edit, Trash } from 'lucide-react';

export interface Project {
  id: number;
  name: string;
  category: string;
  status: 'published' | 'draft';
  date: string;
}

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
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="table-header">
              Name
            </th>
            <th scope="col" className="table-header">
              Category
            </th>
            <th scope="col" className="table-header">
              Status
            </th>
            <th scope="col" className="table-header">
              Date
            </th>
            <th scope="col" className="table-header">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id}>
              <td className="table-cell font-medium">
                {project.name}
              </td>
              <td className="table-cell">
                {project.category}
              </td>
              <td className="table-cell">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
              </td>
              <td className="table-cell">
                {project.date}
              </td>
              <td className="table-cell">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
