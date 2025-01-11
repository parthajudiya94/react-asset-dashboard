import React from 'react';
import { assetHistory, employees, assets } from '../data/mockData';
import { History, Timer } from 'lucide-react';

interface AssetHistoryListProps {
  assetId: string;
}

export default function AssetHistoryList({ assetId }: AssetHistoryListProps) {
  const assetHistoryItems = assetHistory.filter((h) => h.assetId === assetId);
  const asset = assets.find((a) => a.id === assetId);

  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <History className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold">
          Asset History - {asset?.model} ({asset?.serialNumber})
        </h2>
      </div>
      <div className="space-y-4">
        {assetHistoryItems.map((history) => {
          const employee = employees.find((e) => e.id === history.employeeId);
          return (
            <div
              key={history.id}
              className="bg-white rounded-lg shadow-md p-4 flex items-start space-x-4"
            >
              <div
                className={`p-2 rounded-full ${
                  history.action === 'Assigned'
                    ? 'bg-green-100'
                    : history.action === 'Maintenance'
                    ? 'bg-yellow-100'
                    : history.action === 'Retired'
                    ? 'bg-red-100'
                    : 'bg-blue-100'
                }`}
              >
                <Timer className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">{history.action}</h3>
                  <span className="text-sm text-gray-500">{history.date}</span>
                </div>
                {employee && (
                  <p className="text-sm text-gray-600">
                    Employee: {employee.name}
                  </p>
                )}
                {history.notes && (
                  <p className="text-sm text-gray-600 mt-1">{history.notes}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}