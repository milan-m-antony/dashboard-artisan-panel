
import React from 'react';
import { Activity } from '@/types/dashboard';

interface RecentActivityProps {
  activities: Activity[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div
              className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                activity.type === 'project'
                  ? 'bg-blue-500'
                  : activity.type === 'message'
                  ? 'bg-green-500'
                  : 'bg-amber-500'
              }`}
            />
            <div className="flex-1">
              <p className="text-sm">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-sm text-accent font-medium hover:underline">
        View all activities
      </button>
    </div>
  );
};
