import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import Tabs from '../../components/common/Tabs';
import { Search, Plus, FileText, Link as LinkIcon, Edit2, Filter } from 'lucide-react';
import { mockBeneficiaries } from '../../data/mockBeneficiariesPartners';
import TrainingActivityRatingsTable from '../../components/beneficiariesPartners/TrainingActivityRatingsTable';
import AwardsReceivedTable from '../../components/beneficiariesPartners/AwardsReceivedTable';

import { useNavigate } from 'react-router-dom';

const BeneficiariesPartnersPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('extensions');
    
  const ActivePartnershipsTab = () => (
    <div className="space-y-4 pt-2">
        <div className="flex items-center space-x-4">
            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input type="text" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" placeholder="Search within this category..." />
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600 shrink-0">
                <Filter className="w-4 h-4 text-gray-400" />
                <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                    <option>All Quarters</option>
                    <option>Q1</option>
                    <option>Q2</option>
                </select>
                <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                    <option>All Years</option>
                    <option>2026</option>
                    <option>2025</option>
                </select>
            </div>
        </div>
        
        <DataTable 
            columns={[
                { header: 'ID', accessor: 'id' },
                { header: 'Name', accessor: 'name' },
                { header: 'Type', accessor: 'type' },
                { header: 'Sector', accessor: 'sector' },
                { header: 'Location', accessor: 'location' },
                { 
                    header: 'Status', 
                    render: (row) => <StatusBadge status={row.status} /> 
                },
                {
                    header: 'Actions',
                    render: (row) => (
                        <div className="flex space-x-3 text-sm">
                            <button className="text-gray-600 hover:text-gray-900 underline font-medium">View</button>
                            <button className="text-gray-600 hover:text-gray-900 flex items-center"><Edit2 className="w-3 h-3 mr-1"/>Edit</button>
                            <button className="text-gray-600 hover:text-gray-900 flex items-center"><LinkIcon className="w-3 h-3 mr-1"/>Link</button>
                            <button className="text-gray-600 hover:text-gray-900 flex items-center"><FileText className="w-3 h-3 mr-1"/>Attach MOA</button>
                        </div>
                    )
                }
            ]}
            data={mockBeneficiaries}
        />
    </div>
  );

  const GenericTabPlaceholder = () => (
      <div className="space-y-4 pt-2">
          <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input type="text" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" placeholder="Search within this category..." />
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 shrink-0">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                      <option>All Quarters</option>
                  </select>
                  <select className="border-none bg-transparent focus:ring-0 cursor-pointer font-medium p-0 pr-4">
                      <option>All Years</option>
                  </select>
              </div>
          </div>
          <div className="text-center py-12 text-gray-500 border border-gray-200 rounded">
              No records found.
          </div>
      </div>
  );

  const tabs = [
      { id: 'partnerships', label: 'Active Partnerships', content: <ActivePartnershipsTab /> },
      { id: 'trainings', label: 'Trainings', content: <GenericTabPlaceholder /> },
      { id: 'extensions', label: 'Extension Programs', content: <GenericTabPlaceholder /> },
      { id: 'ratings', label: 'Training / Activity Ratings', content: <TrainingActivityRatingsTable /> },
      { id: 'impact', label: 'Impact Assessments', content: <GenericTabPlaceholder /> },
      { id: 'faculty', label: 'Faculty Involvements', content: <GenericTabPlaceholder /> },
      { id: 'swda', label: 'SWDA', content: <GenericTabPlaceholder /> },
      { id: 'students', label: 'Student Involvements', content: <GenericTabPlaceholder /> },
      { id: 'modalities', label: 'Alternative Modalities', content: <GenericTabPlaceholder /> },
      { id: 'awards', label: 'Awards Received', content: <AwardsReceivedTable /> },
  ];

  const handleAddClick = () => {
      if (activeTab === 'ratings') {
          navigate('/beneficiaries-partners/training-activity-ratings/new');
      } else if (activeTab === 'awards') {
          navigate('/beneficiaries-partners/awards-received/new');
      } else {
          alert('Mock functionality: Add Record form will dynamically switch to match ' + activeTab + ' once fully built.');
      }
  };

  return (
    <div className="mb-12">
      <PageHeader 
        title="Beneficiaries & Partners" 
        subtitle="Manage extension linkages, profiles, ratings, and impacts."
        action={
            <button onClick={handleAddClick} className="bg-[#1e293b] hover:bg-slate-700 text-white font-medium text-sm px-4 py-2 rounded flex items-center">
                <Plus className="w-4 h-4 mr-2" /> Add Record
            </button>
        }
      />

      <div className="border border-gray-200 rounded bg-white px-2 pb-6">
         <Tabs tabs={tabs} defaultTab="extensions" onTabChange={(id) => setActiveTab(id)} />
      </div>
    </div>
  );
};

export default BeneficiariesPartnersPage;
