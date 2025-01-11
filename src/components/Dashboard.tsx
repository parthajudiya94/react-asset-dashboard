import React from 'react';
import { assets, employees, assetAssignments } from '../data/mockData';
import { PieChart, Users, Monitor, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Assets',
      value: assets.length,
      icon: Monitor,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Employees',
      value: employees.length,
      icon: Users,
      color: 'bg-green-500',
    },
    {
      title: 'Active Assignments',
      value: assetAssignments.length,
      icon: PieChart,
      color: 'bg-purple-500',
    },
    {
      title: 'Maintenance Required',
      value: assets.filter((a) => a.status === 'Maintenance').length,
      icon: AlertTriangle,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-lg shadow-md p-6 flex items-center"
            >
              <div className={`${stat.color} p-4 rounded-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}