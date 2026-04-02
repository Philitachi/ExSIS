import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FilterBar from '../../components/common/FilterBar';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { Search, Download, Upload } from 'lucide-react';
import { mockDocuments } from '../../data/mockDocuments';

const UploadedFilesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = mockDocuments.filter(d => 
    d.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Document Title', accessor: 'title' },
    { header: 'Related Project', accessor: 'project' },
    { header: 'Document Type', accessor: 'documentType' },
    { header: 'Upload Date', accessor: 'uploadDate' },
    { header: 'Version', accessor: 'version' },
    { header: 'Access Level', accessor: 'accessLevel' },
    { 
        header: 'Status', 
        render: (row) => <StatusBadge status={row.status} />
    },
    {
      header: 'Actions',
      render: (row) => (
        <div className="flex space-x-3 text-sm">
          <button className="text-gray-600 hover:text-gray-900 underline font-medium">View Only</button>
          {row.accessLevel.includes('Coordinator') && (
            <button className="text-gray-600 hover:text-gray-900 flex items-center underline font-medium whitespace-nowrap"><Upload className="w-3 h-3 mr-1"/>Replace</button>
          )}
          <button className="text-gray-600 hover:text-gray-900 flex items-center"><Download className="w-4 h-4"/></button>
        </div>
      )
    }
  ];

  return (
    <div>
      <PageHeader 
        title="View Existing Uploaded Files" 
        subtitle="Manage master repository of validated extension records and attachments."
      />

      <FilterBar>
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="wireframe-input pl-10" 
            placeholder="Search by Document Title..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <select className="wireframe-input w-full sm:w-auto">
          <option value="All">All Projects</option>
          <option value="PRJ-1">PRJ-2026-003</option>
          <option value="PRJ-2">PRJ-2026-001</option>
        </select>
        <select className="wireframe-input w-full sm:w-auto">
          <option value="All">All Types</option>
          <option value="F-EXT-008">F-EXT-008 (Summary)</option>
          <option value="F-EXT-010">F-EXT-010 (Attendance)</option>
          <option value="Report">Activity / Training Report</option>
        </select>
      </FilterBar>

      <DataTable 
        columns={columns} 
        data={filteredData} 
      />
    </div>
  );
};

export default UploadedFilesPage;
