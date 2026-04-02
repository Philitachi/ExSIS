import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FilterBar from '../../components/common/FilterBar';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { Plus, Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projectProposals } from '../../data/mockProjectProposals';

const ProjectProposalsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredData = projectProposals.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const columns = [
    { header: 'Project Title', accessor: 'title' },
    { header: 'Proposal Type', accessor: 'proposalType' },
    { header: 'Leader / Proponent', accessor: 'leader' },
    { header: 'Implementation Address', accessor: 'implementationAddress' },
    { header: 'Date of Implementation', accessor: 'dateOfImplementation' },
    { header: 'Completion Date', accessor: 'completionDate' },
    { 
      header: 'Current Status', 
      render: (row) => <StatusBadge status={row.status} />
    },
    { header: 'Last Updated', accessor: 'lastUpdated' },
    {
      header: 'Actions',
      render: (row) => (
        <div className="flex space-x-3 text-sm">
          <button 
            onClick={(e) => { e.stopPropagation(); navigate(`/project-proposals/${row.id}`); }} 
            className="text-gray-600 hover:text-gray-900 underline font-medium"
          >
            Open
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); navigate(`/project-proposals/${row.id}/tracking`); }} 
            className="text-gray-600 hover:text-gray-900 underline font-medium"
          >
            Track
          </button>
        </div>
      )
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Project Proposals" 
        subtitle="Manage and track all project proposals across their lifecycle."
        action={
          <button 
            onClick={() => navigate('/project-proposals/new')} 
            className="wireframe-btn-primary flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Proposal
          </button>
        }
      />

      <FilterBar>
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="wireframe-input pl-10" 
            placeholder="Search by Title..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <select 
          className="wireframe-input w-full sm:w-auto" 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Draft">Draft</option>
          <option value="Submitted">Submitted</option>
          <option value="Under Review">Under Review</option>
          <option value="Approved">Approved</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="Returned for Revision">Returned for Revision</option>
          <option value="Rejected">Rejected</option>
        </select>
        <select className="wireframe-input w-full sm:w-auto">
          <option value="">All Types</option>
          <option value="Extension Program">Extension Program</option>
          <option value="Training Activity">Training Activity</option>
        </select>
        <button className="wireframe-btn flex items-center whitespace-nowrap">
          <Filter className="w-4 h-4 mr-2" /> More Filters
        </button>
      </FilterBar>

      <DataTable 
        columns={columns} 
        data={filteredData} 
        onRowClick={(row) => navigate(`/project-proposals/${row.id}`)} 
      />
    </div>
  );
};

export default ProjectProposalsPage;
