
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  bgColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  bgColor = 'bg-white',
}) => {
  return (
    <div className={`stat-card ${bgColor}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="stat-value">{value}</p>
          <p className="stat-label">{title}</p>
        </div>
        <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center">
          <span
            className={`text-xs font-medium ${
              trend.positive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend.positive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-gray-500 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
};
