import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { mockAwardsReceived } from '../../data/mockAwardsReceived';
import { ExternalLink, Edit2, FileText, ArrowLeft } from 'lucide-react';

const AwardsReceivedDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const record = mockAwardsReceived.find(r => r.id === id) || mockAwardsReceived[0];

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader 
                title={`Award Record: ${record.id}`} 
                subtitle="View saved Awards Received record" 
                action={
                    <button onClick={() => navigate('/beneficiaries-partners')} className="wireframe-btn flex items-center">
                        <ArrowLeft className="w-4 h-4 mr-2"/> Back to List
                    </button>
                }
            />

            <div className="space-y-6">
                <section className="wireframe-card">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                        <h3 className="text-lg font-bold">Section 1: Award Information</h3>
                        <button onClick={() => navigate(`/beneficiaries-partners/awards-received/${record.id}/edit`)} className="text-sm border border-gray-300 bg-white px-3 py-1 flex items-center hover:bg-gray-50"><Edit2 className="w-3 h-3 mr-2"/> Edit Record</button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <div className="col-span-2">
                            <span className="text-gray-500 block">Project Title (Title of Extension Project/Program)</span>
                            <span className="font-medium text-gray-900 flex items-center">
                                {record.projectProposalId ? `${record.projectProposalId} - ${record.titleOfExtensionProjectProgram || record.projectTitle}` : (record.titleOfExtensionProjectProgram || record.projectTitle)}
                                {record.projectProposalId && (
                                    <button onClick={() => navigate(`/project-proposals/${record.projectProposalId}`)} className="ml-4 text-blue-600 hover:underline flex items-center text-xs">
                                        Open Related Project <ExternalLink className="w-3 h-3 ml-1"/>
                                    </button>
                                )}
                            </span>
                        </div>
                        <div><span className="text-gray-500 block">Awarding Body</span><span className="font-medium text-gray-900">{record.awardingBody}</span></div>
                        <div><span className="text-gray-500 block">Award Date</span><span className="font-medium text-gray-900">{new Date(record.awardDate).toLocaleDateString(undefined, {month:'short', day:'numeric', year:'numeric'})}</span></div>
                    </div>
                </section>

                <section className="wireframe-card bg-gray-50">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 2: MOV / Supporting Evidence</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center justify-between border border-gray-300 p-3 text-sm bg-white rounded">
                            <div className="flex items-center">
                                <FileText className="w-4 h-4 text-gray-400 mr-2 shrink-0"/>
                                <span className="text-gray-700 font-medium w-48 shrink-0">Attached MOV:</span>
                                {record.movFile ? (
                                    <span className="text-gray-900 ml-2 font-bold">{record.movFile}</span>
                                ) : (
                                    <span className="text-gray-400 italic ml-2">No file attached</span>
                                )}
                            </div>
                            {record.movFile && (
                                <button className="wireframe-btn text-xs flex items-center shadow-sm">Open File <ExternalLink className="w-3 h-3 ml-2"/></button>
                            )}
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 3: Reporting Information</h3>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <div>
                            <span className="text-gray-500 block">Quarter Accomplished</span>
                            <span className="font-medium text-gray-900">{record.quarterAccomplished || 'Not specified'}</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-gray-500 block mb-1">ESO Reporting Remarks</span>
                            <div className="p-3 bg-white border border-gray-200 rounded text-gray-700 whitespace-pre-wrap min-h-[4rem]">
                                {record.esoReportingRemarks || <span className="italic text-gray-400">No remarks provided.</span>}
                            </div>
                        </div>
                        <div className="col-span-2 text-xs text-gray-400 flex justify-between border-t border-gray-200 pt-3 mt-2">
                            <span>Created At: {record.createdAt}</span>
                            <span>Last Updated: {record.updatedAt}</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AwardsReceivedDetailPage;
