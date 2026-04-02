import React from 'react';

const FilterBar = ({ children }) => {
  return (
    <div className="wireframe-card mb-4 flex flex-wrap gap-4 items-center">
      {children}
    </div>
  );
};
export default FilterBar;
