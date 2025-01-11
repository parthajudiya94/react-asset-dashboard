import { Employee, Asset, AssetAssignment, AssetHistory } from '../types';

export const employees: Employee[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@company.com',
    department: 'Engineering',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    department: 'Design',
    joinDate: '2023-03-20',
  },
];

export const assets: Asset[] = [
  {
    id: '1',
    type: 'Laptop',
    model: 'MacBook Pro 16"',
    serialNumber: 'MBP2023001',
    purchaseDate: '2023-01-01',
    status: 'Assigned',
  },
  {
    id: '2',
    type: 'Desktop',
    model: 'Dell XPS',
    serialNumber: 'DXP2023002',
    purchaseDate: '2023-02-15',
    status: 'Available',
  },
];

export const assetAssignments: AssetAssignment[] = [
  {
    id: '1',
    assetId: '1',
    employeeId: '1',
    assignedDate: '2023-02-01',
    notes: 'Primary development machine',
  },
];

export const assetHistory: AssetHistory[] = [
  {
    id: '1',
    assetId: '1',
    date: '2023-01-01',
    action: 'Assigned',
    employeeId: '1',
    notes: 'Initial assignment',
  },
  {
    id: '2',
    assetId: '1',
    date: '2023-03-15',
    action: 'Maintenance',
    notes: 'Regular checkup and RAM upgrade',
  },
];