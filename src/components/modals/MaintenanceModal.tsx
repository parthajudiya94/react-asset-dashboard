import React, { useState } from 'react';
import Modal from './Modal';
import { Asset } from '../../types';

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset: Asset | null;
  onSubmit: (data: { assetId: string; notes: string }) => void;
}

export default function MaintenanceModal({
  isOpen,
  onClose,
  asset,
  onSubmit,
}: MaintenanceModalProps) {
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (asset) {
      onSubmit({ assetId: asset.id, notes });
      onClose();
    }
  };

  if (!asset) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Maintenance">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">
              Asset: {asset.model} ({asset.serialNumber})
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Maintenance Notes
            </label>
            <textarea
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe the maintenance required..."
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
              Schedule Maintenance
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}