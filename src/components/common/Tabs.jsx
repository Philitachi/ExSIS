import React, { useState } from 'react';

const Tabs = ({ tabs, defaultTab, onTabChange }) => {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleClick = (id) => {
    setActive(id);
    if(onTabChange) onTabChange(id);
  };

  return (
    <div>
      <div className="border-b border-gray-300">
        <nav className="-mb-px flex space-x-1 sm:space-x-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${active === tab.id
                  ? 'border-gray-800 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-4">
        {tabs.find(t => t.id === active)?.content}
      </div>
    </div>
  );
};
export default Tabs;
