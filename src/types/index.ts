export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  joinDate: string;
}

export interface Asset {
  id: string;
  type: 'Laptop' | 'Desktop' | 'Mobile' | 'Tablet' | 'Other';
  model: string;
  serialNumber: string;
  purchaseDate: string;
  status: 'Available' | 'Assigned' | 'Maintenance' | 'Retired';
}

export interface AssetAssignment {
  id: string;
  assetId: string;
  employeeId: string;
  assignedDate: string;
  returnDate?: string;
  notes?: string;
}

export interface AssetHistory {
  id: string;
  assetId: string;
  date: string;
  action: 'Assigned' | 'Returned' | 'Maintenance' | 'Retired';
  employeeId?: string;
  notes?: string;
}