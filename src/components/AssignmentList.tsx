import React, { useState } from 'react';
import { assetAssignments, assets, employees } from '../data/mockData';
import AssignAssetModal from './modals/AssignAssetModal';
import { Clock, ArrowLeftRight } from 'lucide-react';

export default function AssignmentList() {
  const [showAssignModal, setShowAssignModal] = useState(false);

  const handleAssign = (assignment: {
    assetId: string;
    employeeId: string;
    notes?: string;
  }) => {
    // In a real app, this would make an API call
    console.log('Creating new assignment:', assignment);
  };

  const handleReturn = (assignmentId: string) => {
    // In a real app, this would make an API call
    console.log('Returning asset:', assignmentId);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Asset Assignments</h2>
        <button
          onClick={() => setShowAssignModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <ArrowLeftRight className="w-4 h-4" />
          <span>New Assignment</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asset
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Notes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assetAssignments.map((assignment) => {
              const employee = employees.find(
                (e) => e.id === assignment.employeeId
              );
              const asset = assets.find((a) => a.id === assignment.assetId);
              return (
                <tr key={assignment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {employee?.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {asset?.model} ({asset?.type})
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.assignedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {assignment.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {!assignment.returnDate && (
                      <button
                        onClick={() => handleReturn(assignment.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Return Asset
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <AssignAssetModal
        isOpen={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        onAssign={handleAssign}
      />
    </div>
  );
}