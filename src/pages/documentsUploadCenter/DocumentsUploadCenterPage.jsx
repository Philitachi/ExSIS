import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, FileText, CheckSquare, List, ChevronRight } from 'lucide-react';
import DataTable from '../../components/common/DataTable';
import StatusBadge from '../../components/common/StatusBadge';
import { mockDocuments } from '../../data/mockDocuments';

const DocumentsUploadCenterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <PageHeader 
        title="Documents / Upload Center" 
        subtitle="Centralized management for uploading, encoding, and viewing Extension reports securely."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <UploadCard
          icon={FileText}
          title="F-EXT-008"
          subtitle="Extension Summary Report"
          description="Encode details and attach related summary reports for specific activities."
          onClick={() => navigate('/documents-upload-center/summary-report/new')}
        />
        
        <UploadCard
          icon={CheckSquare}
          title="F-EXT-010"
          subtitle="Attendance Record Form"
          description="Encode attendance logs or attach the master attendance sheet for an activity."
          onClick={() => navigate('/documents-upload-center/attendance/new')}
        />
        
        <UploadCard
          icon={List}
          title="Training / Activity Report"
          subtitle="Narrative Details"
          description="Input comprehensive narrative details linking to an extension program or training."
          onClick={() => navigate('/documents-upload-center/activity-training-report/new')}
        />
      </div>

      <div className="wireframe-card mt-8">
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center space-x-2">
                <UploadCloud className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-bold text-gray-900 leading-tight">View Attached Documents</h3>
            </div>
            <button 
                onClick={() => navigate('/documents-upload-center/files')}
                className="wireframe-btn flex items-center"
            >
                View Full Database <ChevronRight className="w-4 h-4 ml-1" />
            </button>
        </div>
        
        <p className="text-gray-500 mb-4 text-sm font-medium">Recent document uploads across all projects.</p>
        
        <DataTable 
            columns={[
                { header: 'Document Title', accessor: 'title' },
                { header: 'Related Project', accessor: 'project' },
                { header: 'Document Type', accessor: 'documentType' },
                { header: 'Upload Date', accessor: 'uploadDate' },
                { 
                    header: 'Status', 
                    render: (row) => <StatusBadge status={row.status} />
                },
                {
                    header: 'Actions',
                    render: (row) => (
                        <button className="text-gray-600 hover:text-gray-900 underline font-medium text-sm">View File</button>
                    )
                }
            ]}
            data={mockDocuments.slice(0,3)}
        />
      </div>
    </div>
  );
};

const UploadCard = ({ icon: Icon, title, subtitle, description, onClick }) => (
  <div onClick={onClick} className="wireframe-card flex flex-col items-center text-center hover:bg-gray-50 cursor-pointer transition-colors group">
    <div className="p-4 bg-gray-100 rounded-full mb-4 text-gray-500 group-hover:bg-gray-200 flex items-center justify-center">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="font-bold text-lg text-gray-900 mb-1">{title}</h3>
    <p className="text-sm font-semibold text-gray-700 mb-2">{subtitle}</p>
    <p className="text-xs text-gray-500 flex-1">{description}</p>
    <button className="mt-4 wireframe-btn-primary w-full shadow-none text-xs">Encode / Upload</button>
  </div>
);

export default DocumentsUploadCenterPage;
