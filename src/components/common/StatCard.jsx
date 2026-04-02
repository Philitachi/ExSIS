import React from 'react';

const StatCard = ({ title, value, subtitle, icon: Icon }) => {
  return (
    <div className="wireframe-card flex items-start">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-500 truncate">{title}</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        {subtitle && <p className="mt-1 text-xs text-gray-500">{subtitle}</p>}
      </div>
      {Icon && (
        <div className="p-3 bg-gray-100 rounded text-gray-500">
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
export default StatCard;
