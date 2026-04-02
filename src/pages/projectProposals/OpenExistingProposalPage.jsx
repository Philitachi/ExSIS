import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import Tabs from '../../components/common/Tabs';
import { projectProposals } from '../../data/mockProjectProposals';

const OpenExistingProposalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const proposal = projectProposals.find(p => p.id === id) || projectProposals[0]; // fallback for demo

  const tabContent = [
    { 
      id: 'overview', 
      label: 'Overview', 
      content: (
        <div className="wireframe-card space-y-4">
          <h3 className="font-bold border-b pb-2">Record Overview</h3>
          <p className="text-sm"><span className="text-gray-500 w-40 inline-block">Leader / Proponent:</span> {proposal.leader}</p>
          <p className="text-sm"><span className="text-gray-500 w-40 inline-block">Implementation Date:</span> {proposal.dateOfImplementation}</p>
          <p className="text-sm"><span className="text-gray-500 w-40 inline-block">Location:</span> {proposal.implementationAddress}</p>
        </div>
      )
    },
    { id: 'workplan', label: 'Work Plan', content: <div className="wireframe-card text-gray-500 text-center py-8">Work Plan Details...</div> },
    { id: 'financial', label: 'Financial Plan', content: <div className="wireframe-card text-gray-500 text-center py-8">Financial Plan Breakdown...</div> },
    { id: 'framework', label: 'Framework', content: <div className="wireframe-card text-gray-500 text-center py-8">Framework Document Link...</div> },
    { id: 'personnel', label: 'Personnel', content: <div className="wireframe-card text-gray-500 text-center py-8">Personnel Lineup...</div> },
    { id: 'history', label: 'Status History', content: <div className="wireframe-card text-gray-500 text-center py-8">Detailed Version History...</div> },
    { id: 'documents', label: 'Linked Documents', content: <div className="wireframe-card text-gray-500 text-center py-8">Attached PDFs & Forms...</div> },
    { 
      id: 'activities', 
      label: 'Activities & Evaluations', 
      content: (
        <div className="wireframe-card space-y-4">
          <h3 className="font-bold border-b pb-2 text-gray-800">Project Activities & Linked Evaluations</h3>
          <p className="text-sm text-gray-600 mb-4">Activities recorded under this project proposal map directly to participant evaluations and their aggregated summary reports.</p>
          
          {proposal.activities && proposal.activities.length > 0 ? (
            <div className="space-y-4">
              {proposal.activities.map(act => (
                <div key={act.id} className="border border-gray-200 p-4 rounded bg-gray-50 flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 border-b border-gray-200 pb-1 inline-block">{act.title}</h4>
                    <p className="text-xs text-gray-500 mt-2">Date: {act.date} | Venue: {act.venue}</p>
                    <p className="text-sm font-medium mt-1">Individual Participant Evaluations (F-EXT-007): <span className="text-gray-900 px-2 py-0.5 bg-gray-200 rounded">{act.participantEvaluationsCount} Submitted</span></p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2">
                    {act.summaryGenerated ? (
                      <button className="wireframe-btn-primary text-xs" onClick={() => navigate('/documents-upload-center/summary-report/new')}>View Summary Report (F-EXT-008)</button>
                    ) : (
                      <button className="wireframe-btn text-xs" onClick={() => navigate('/documents-upload-center/summary-report/new')}>Generate Summary from Evaluations</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 text-sm">No mapped activities found inside this proposal.</div>
          )}
        </div>
      ) 
    },
  ];

  return (
    <div>
      <PageHeader 
        title={`Proposal: ${proposal.title}`} 
        subtitle={`ID: ${proposal.id} | Proposal Type: ${proposal.proposalType}`} 
        action={
          <div className="flex space-x-2">
            <button className="wireframe-btn" onClick={() => navigate('/project-proposals')}>Back to List</button>
            <button className="wireframe-btn" onClick={() => navigate(`/project-proposals/${id}/tracking`)}>Track Status</button>
            <button className="wireframe-btn-primary">Edit Allowed Sections</button>
          </div>
        }
      />
      <div className="mb-4">
        <StatusBadge status={proposal.status} />
      </div>

      <div className="bg-white p-2 rounded border border-gray-200">
        <Tabs tabs={tabContent} />
      </div>
    </div>
  );
};

export default OpenExistingProposalPage;
