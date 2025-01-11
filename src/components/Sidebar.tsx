import React from 'react';
import { LayoutDashboard, Users, Monitor, ClipboardList } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'assets', label: 'Assets', icon: Monitor },
    { id: 'assignments', label: 'Assignments', icon: ClipboardList },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="flex items-center space-x-2 mb-8">
        <Monitor className="w-8 h-8 text-blue-400" />
        <h1 className="text-white text-xl font-bold">Asset Manager</h1>
      </div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-2 p-3 rounded-lg mb-2 ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}