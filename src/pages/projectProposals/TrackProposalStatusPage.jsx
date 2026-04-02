import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../../components/layout/PageHeader';
import StatusBadge from '../../components/common/StatusBadge';
import { projectProposals, mockProposalHistory } from '../../data/mockProjectProposals';
import { CheckCircle, Clock, Edit3, MessageSquare } from 'lucide-react';

const TrackProposalStatusPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const proposal = projectProposals.find(p => p.id === id) || projectProposals[0];

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader 
        title="Track Proposal Status" 
        subtitle={<>Tracking for: <strong>{proposal.title}</strong></>}
        action={
            <div className="flex space-x-2">
              <button className="wireframe-btn" onClick={() => navigate(`/project-proposals/${id}`)}>Back to Proposal Details</button>
              {proposal.status === 'Returned for Revision' && (
                <button className="wireframe-btn-primary flex items-center"><Edit3 className="w-4 h-4 mr-2"/>Edit Returned Proposal</button>
              )}
            </div>
        }
      />

      <div className="wireframe-card mb-6 bg-gray-50 flex items-center justify-between">
         <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase">Current Status</h3>
            <div className="mt-2"><StatusBadge status={proposal.status} /></div>
         </div>
         <div className="text-right">
             <p className="text-xs text-gray-500">Last updated: {proposal.lastUpdated}</p>
         </div>
      </div>

      <div className="wireframe-card px-8 py-6">
        <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-6">Status Progression & Reviewer Feedback</h3>
        <div className="relative border-l border-gray-300 ml-3 space-y-8">
            {mockProposalHistory.map((hist, idx) => (
                <div key={idx} className="relative pl-8">
                    <span className="absolute -left-[1.1rem] top-1 bg-white border-2 border-gray-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-gray-500" />
                    </span>
                    <div className="bg-gray-50 border border-gray-200 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{hist.action}</h4>
                            <span className="text-xs text-gray-500 flex items-center"><Clock className="w-3 h-3 mr-1"/>{hist.date}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">By: {hist.actor}</p>
                        {hist.remarks && (
                            <div className="bg-white border text-sm border-gray-200 p-3 rounded flex items-start text-gray-600">
                                <MessageSquare className="w-4 h-4 mr-2 mt-0.5" />
                                <div><strong className="block text-gray-800 mb-1">Remarks:</strong>{hist.remarks}</div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default TrackProposalStatusPage;
