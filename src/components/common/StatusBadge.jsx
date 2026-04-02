import React from 'react';

const StatusBadge = ({ status }) => {
  const getColors = (stat) => {
    switch(stat?.toLowerCase()) {
      case 'approved':
      case 'completed': return 'bg-gray-200 text-gray-800 border-gray-400';
      case 'rejected': return 'bg-gray-700 text-white border-gray-800';
      case 'returned for revision': return 'bg-gray-100 text-gray-900 border-gray-400 border-dashed';
      case 'draft': return 'bg-white text-gray-600 border-gray-300';
      case 'under review':
      case 'pending approval':
        return 'bg-gray-600 text-white border-gray-700';
      case 'ongoing':
        return 'bg-gray-300 text-gray-900 border-gray-500';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };
  
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-medium rounded border ${getColors(status)}`}>
      {status || 'Unknown'}
    </span>
  );
};
export default StatusBadge;
