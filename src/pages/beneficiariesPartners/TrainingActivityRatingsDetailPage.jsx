import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTrainingActivityRatings } from '../../data/mockTrainingActivityRatings';
import { ExternalLink, Edit2, FileText, ArrowLeft } from 'lucide-react';

const TrainingActivityRatingsDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const record = mockTrainingActivityRatings.find(r => r.id === id) || mockTrainingActivityRatings[0];

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader 
                title={`Rating Record: ${record.id}`} 
                subtitle="View saved Training / Activity Rating" 
                action={
                    <button onClick={() => navigate('/beneficiaries-partners')} className="wireframe-btn flex items-center">
                        <ArrowLeft className="w-4 h-4 mr-2"/> Back to List
                    </button>
                }
            />

            <div className="space-y-6">
                <section className="wireframe-card">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                        <h3 className="text-lg font-bold">Section 1: Basic Information</h3>
                        <button className="text-sm border border-gray-300 bg-white px-3 py-1 flex items-center hover:bg-gray-50"><Edit2 className="w-3 h-3 mr-2"/> Edit Record</button>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <div><span className="text-gray-500 block">Title of Training</span><span className="font-medium text-gray-900">{record.titleOfTraining}</span></div>
                        <div><span className="text-gray-500 block">Category</span><span className="font-medium text-gray-900">{record.category}</span></div>
                        <div className="col-span-2">
                            <span className="text-gray-500 block">Related Project</span>
                            <span className="font-medium text-gray-900 flex items-center">
                                {record.projectTitle ? `${record.projectProposalId} - ${record.projectTitle}` : 'Standalone'}
                                {record.projectProposalId && (
                                    <button onClick={() => navigate(`/project-proposals/${record.projectProposalId}`)} className="ml-4 text-blue-600 hover:underline flex items-center text-xs">
                                        Open Related Project <ExternalLink className="w-3 h-3 ml-1"/>
                                    </button>
                                )}
                            </span>
                        </div>
                        <div><span className="text-gray-500 block">Date</span><span className="font-medium text-gray-900">{record.startDate} to {record.endDate}</span></div>
                        <div><span className="text-gray-500 block">Duration (hours)</span><span className="font-medium text-gray-900">{record.durationHours}</span></div>
                    </div>
                </section>

                <section className="wireframe-card bg-gray-50">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 2: Computed Metrics</h3>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white border rounded p-2 border-gray-200">
                            <span className="block text-xs uppercase text-gray-500 mb-1">Weight</span>
                            <span className="font-bold text-lg">{record.weightPerDuration}</span>
                        </div>
                        <div className="bg-white border rounded p-2 border-gray-200">
                            <span className="block text-xs uppercase text-gray-500 mb-1">Trainees</span>
                            <span className="font-bold text-lg">{record.numberOfTrainees}</span>
                        </div>
                        <div className="bg-white border rounded p-2 border-gray-200">
                            <span className="block text-xs uppercase text-gray-500 mb-1">Weighted</span>
                            <span className="font-bold text-lg">{record.weightedTrainees}</span>
                        </div>
                        <div className="bg-white border rounded p-2 border-gray-300">
                            <span className="block text-xs uppercase text-gray-500 w-full whitespace-nowrap mb-1">Surveyed</span>
                            <span className="font-bold text-lg text-gray-900">{record.numberOfTraineesSurveyed}</span>
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 3: Rating Counts</h3>
                    <div className="flex justify-between max-w-sm mx-auto text-center border p-3 rounded">
                        <div><span className="block text-xs text-red-500">Poor (1)</span><span className="font-medium">{record.poor}</span></div>
                        <div><span className="block text-xs text-orange-500">Fair (2)</span><span className="font-medium">{record.fair}</span></div>
                        <div><span className="block text-xs text-yellow-600">Sat (3)</span><span className="font-medium">{record.satisfied}</span></div>
                        <div><span className="block text-xs text-green-500">VSat (4)</span><span className="font-medium">{record.verySatisfied}</span></div>
                        <div><span className="block text-xs text-blue-600">Excel (5)</span><span className="font-medium">{record.excellent}</span></div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 4: Linked Existing Records & Attached MOVs</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {record.linkedActivityReportId && (
                            <div className="border border-gray-200 p-4 rounded bg-white flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Activity Report</h4>
                                    <p className="text-sm font-medium text-blue-700">{record.linkedActivityReportId} - {record.linkedActivityReportTitle}</p>
                                    <p className="text-xs text-gray-500 mt-1">Source: Documents / Upload Center</p>
                                </div>
                                <button className="wireframe-btn text-xs flex items-center shadow-sm">Open Linked Record <ExternalLink className="w-3 h-3 ml-2"/></button>
                            </div>
                        )}
                        {record.linkedAttendanceSheetId && (
                            <div className="border border-gray-200 p-4 rounded bg-white flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Attendance Sheet (F-EXT-010)</h4>
                                    <p className="text-sm font-medium text-blue-700">{record.linkedAttendanceSheetId} - {record.linkedAttendanceSheetTitle}</p>
                                </div>
                                <button className="wireframe-btn text-xs flex items-center shadow-sm">Open Linked Record <ExternalLink className="w-3 h-3 ml-2"/></button>
                            </div>
                        )}
                        {record.linkedEvaluationRecordId && (
                            <div className="border border-gray-200 p-4 rounded bg-white flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Evaluation Record Data (F-EXT-007)</h4>
                                    <p className="text-sm font-medium text-blue-700">{record.linkedEvaluationRecordId} - {record.linkedEvaluationRecordTitle}</p>
                                </div>
                                <button className="wireframe-btn text-xs flex items-center shadow-sm" onClick={() => navigate('/monitor-report')}>Open Linking Details <ExternalLink className="w-3 h-3 ml-2"/></button>
                            </div>
                        )}
                        {record.linkedSummaryOfEvaluationId && (
                            <div className="border border-gray-200 p-4 rounded bg-white flex justify-between items-center">
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">Summary of Evaluation (F-EXT-008)</h4>
                                    <p className="text-sm font-medium text-blue-700">{record.linkedSummaryOfEvaluationId} - {record.linkedSummaryOfEvaluationTitle}</p>
                                </div>
                                <button className="wireframe-btn text-xs flex items-center shadow-sm" onClick={() => navigate('/documents-upload-center/summary-report/new')}>Open Report <ExternalLink className="w-3 h-3 ml-2"/></button>
                            </div>
                        )}
                        
                        <div className="mt-2 border-t border-gray-200 pt-4">
                            <h4 className="font-bold text-gray-800 text-sm mb-3">Standalone Attached MOVs</h4>
                            <div className="flex items-center border border-gray-300 p-3 text-sm bg-gray-50 rounded">
                                <FileText className="w-4 h-4 text-gray-400 mr-2 shrink-0"/>
                                <span className="text-gray-700 font-medium w-48 shrink-0">Program Activity / Matrix:</span>
                                {record.programActivity ? (
                                    <span className="text-gray-900 ml-2 truncate hover:underline cursor-pointer flex-1">{record.programActivity}</span>
                                ) : (
                                    <span className="text-gray-400 italic ml-2">No file attached</span>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="wireframe-card bg-gray-50">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 5: Reporting Information</h3>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                        <div>
                            <span className="text-gray-500 block">Quarter Accomplished</span>
                            <span className="font-medium text-gray-900">{record.quarterAccomplished || 'Not specified'}</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-gray-500 block mb-1">ESO Reporting Remarks</span>
                            <div className="p-3 bg-white border border-gray-200 rounded text-gray-700 whitespace-pre-wrap min-h-[4rem]">
                                {record.esoReportingRemarks ? record.esoReportingRemarks : <span className="italic text-gray-400">No remarks provided.</span>}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TrainingActivityRatingsDetailPage;
