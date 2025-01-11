import React, { useState } from 'react';
import { assets } from '../data/mockData';
import AddAssetModal from './modals/AddAssetModal';
import MaintenanceModal from './modals/MaintenanceModal';
import AssetHistoryList from './AssetHistoryList';
import { Asset } from '../types';
import { Wrench, History } from 'lucide-react';

export default function AssetList() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  const handleAddAsset = (newAsset: Omit<Asset, 'id'>) => {
    // In a real app, this would make an API call
    console.log('Adding new asset:', newAsset);
  };

  const handleMaintenanceSubmit = (data: { assetId: string; notes: string }) => {
    // In a real app, this would make an API call
    console.log('Scheduling maintenance:', data);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Assets</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Asset
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Model
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Serial Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{asset.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{asset.model}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {asset.serialNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      asset.status === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : asset.status === 'Assigned'
                        ? 'bg-blue-100 text-blue-800'
                        : asset.status === 'Maintenance'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-4">
                  <button
                    onClick={() => {
                      setSelectedAsset(asset);
                      setShowMaintenanceModal(true);
                    }}
                    className="text-yellow-600 hover:text-yellow-900 inline-flex items-center space-x-1"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Maintenance</span>
                  </button>
                  <button
                    onClick={() => setSelectedAssetId(asset.id)}
                    className="text-blue-600 hover:text-blue-900 inline-flex items-center space-x-1"
                  >
                    <History className="w-4 h-4" />
                    <span>History</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAssetId && <AssetHistoryList assetId={selectedAssetId} />}

      <AddAssetModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddAsset}
      />

      <MaintenanceModal
        isOpen={showMaintenanceModal}
        onClose={() => {
          setShowMaintenanceModal(false);
          setSelectedAsset(null);
        }}
        asset={selectedAsset}
        onSubmit={handleMaintenanceSubmit}
      />
    </div>
  );
}