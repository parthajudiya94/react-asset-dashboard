import React, { useState } from 'react';
import Modal from './Modal';
import { employees, assets } from '../../data/mockData';
import { Asset, Employee } from '../../types';

interface AssignAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: (assignment: {
    assetId: string;
    employeeId: string;
    notes?: string;
  }) => void;
}

export default function AssignAssetModal({
  isOpen,
  onClose,
  onAssign,
}: AssignAssetModalProps) {
  const [formData, setFormData] = useState({
    assetId: '',
    employeeId: '',
    notes: '',
  });

  const availableAssets = assets.filter((asset) => asset.status === 'Available');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAssign(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Assign Asset">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asset
            </label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.assetId}
              onChange={(e) =>
                setFormData({ ...formData, assetId: e.target.value })
              }
            >
              <option value="">Select an asset</option>
              {availableAssets.map((asset) => (
                <option key={asset.id} value={asset.id}>
                  {asset.model} ({asset.type}) - {asset.serialNumber}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee
            </label>
            <select
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.employeeId}
              onChange={(e) =>
                setFormData({ ...formData, employeeId: e.target.value })
              }
            >
              <option value="">Select an employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.name} - {employee.department}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Assign Asset
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}