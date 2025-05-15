
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{title}</p>
          </div>
          <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
        </div>
        
        {trend && (
          <div className="mt-4 flex items-center">
            {trend.positive ? (
              <ArrowUp size={14} className="text-green-600" />
            ) : (
              <ArrowDown size={14} className="text-red-600" />
            )}
            <span
              className={`text-xs font-medium ml-1 ${
                trend.positive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {Math.abs(trend.value)}%
            </span>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
