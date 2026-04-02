import React from 'react';

const DataTable = ({ columns, data, onRowClick, footer }) => {
  return (
    <div className="overflow-x-auto wireframe-card p-0">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((row, rowIdx) => (
              <tr 
                key={rowIdx} 
                className={onRowClick ? "hover:bg-gray-50 cursor-pointer" : ""}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-12 text-center text-sm text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
        {footer && (
          <tfoot className="bg-gray-100 border-t-2 border-gray-300">
             {footer}
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default DataTable;
