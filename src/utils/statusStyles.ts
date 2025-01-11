export const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Available':
      return 'bg-green-100 text-green-800';
    case 'Assigned':
      return 'bg-blue-100 text-blue-800';
    case 'Maintenance':
      return 'bg-yellow-100 text-yellow-800';
    case 'Retired':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};