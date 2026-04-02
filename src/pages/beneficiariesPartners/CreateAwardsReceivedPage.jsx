import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import { projectProposals } from '../../data/mockProjectProposals';
import { mockAwardsReceived } from '../../data/mockAwardsReceived';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, Paperclip, FileText, Trash2 } from 'lucide-react';

const CreateAwardsReceivedPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    // Section 1 State
    const [projectId, setProjectId] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [awardingBody, setAwardingBody] = useState('');
    const [awardDate, setAwardDate] = useState('');

    // Section 2 State (MOV)
    const [movFile, setMovFile] = useState(null);
    const [existingMov, setExistingMov] = useState('');

    // Section 3 State
    const [quarter, setQuarter] = useState('Q1');
    const [remarks, setRemarks] = useState('');

    useEffect(() => {
        if (isEdit) {
            const record = mockAwardsReceived.find(r => r.id === id);
            if (record) {
                setProjectId(record.projectProposalId);
                setProjectTitle(record.titleOfExtensionProjectProgram || record.projectTitle);
                setAwardingBody(record.awardingBody);
                setAwardDate(record.awardDate);
                setExistingMov(record.movFile);
                setQuarter(record.quarterAccomplished);
                setRemarks(record.esoReportingRemarks);
            }
        }
    }, [id, isEdit]);

    useEffect(() => {
        if (projectId) {
            const prj = projectProposals.find(p => p.id === projectId);
            if (prj) {
                setProjectTitle(prj.title);
            }
        } else {
            setProjectTitle('');
        }
    }, [projectId]);

    const handleSave = (e) => {
        e.preventDefault();
        alert(`Mock functionality: Successfully ${isEdit ? 'updated' : 'saved'} Awards Received Record.`);
        navigate('/beneficiaries-partners');
    };

    return (
        <div className="max-w-4xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader 
                title={isEdit ? `Edit Awards Received: ${id}` : "Create Awards Received Record"} 
                subtitle="Record details of awards or recognitions related to extension services." 
            />

            <form onSubmit={handleSave} className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 1: Award Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Related Project Proposal (Optional)</label>
                            <select className="wireframe-input" value={projectId} onChange={e => setProjectId(e.target.value)}>
                                <option value="">-- Standalone / Unaligned --</option>
                                {projectProposals.map(p => (
                                    <option key={p.id} value={p.id}>{p.id} - {p.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Project Title <span className="text-red-500">*</span></label>
                            <input type="text" className="wireframe-input" required value={projectTitle} onChange={e => setProjectTitle(e.target.value)} placeholder="Auto-fills from related project or enter standalone title..." />
                        </div>
                        <div>
                            <label className="wireframe-label">Awarding Body <span className="text-red-500">*</span></label>
                            <input type="text" className="wireframe-input" required value={awardingBody} onChange={e => setAwardingBody(e.target.value)} />
                        </div>
                        <div>
                            <label className="wireframe-label">Award Date <span className="text-red-500">*</span></label>
                            <input type="date" className="wireframe-input" required value={awardDate} onChange={e => setAwardDate(e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card bg-gray-50">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 2: MOV / Supporting Evidence</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border border-gray-300 bg-white p-4 rounded">
                            <label className="wireframe-label">MOV Link (Plaque/Certificate)</label>
                            <p className="text-xs text-gray-500 mb-3">Attach recognized file types (PDF, JPG, JPEG, PNG, DOC, DOCX).</p>
                            
                            {existingMov && !movFile && (
                                <div className="flex items-center justify-between border p-3 border-gray-200 bg-gray-50 text-sm mb-4">
                                    <span className="flex items-center text-gray-800 font-medium"><FileText className="w-4 h-4 mr-2" /> Current Attachment: {existingMov}</span>
                                    <div className="flex space-x-3">
                                        <button type="button" className="text-blue-600 hover:underline">Open File</button>
                                        <button type="button" className="text-red-600 hover:underline flex items-center" onClick={() => setExistingMov('')}><Trash2 className="w-4 h-4 mr-1"/>Remove</button>
                                    </div>
                                </div>
                            )}

                            <input type="file" accept=".pdf,.jpeg,.jpg,.png,.doc,.docx" className="wireframe-input p-1 cursor-pointer bg-white" onChange={(e) => setMovFile(e.target.files[0])} />
                            
                            {!existingMov && !movFile && (
                                <p className="mt-2 text-xs text-orange-600 italic">No MOV is currently attached.</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 3: Reporting Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="wireframe-label">Quarter Accomplished <span className="text-red-500">*</span></label>
                            <select className="wireframe-input" required value={quarter} onChange={e => setQuarter(e.target.value)}>
                                <option>Q1</option>
                                <option>Q2</option>
                                <option>Q3</option>
                                <option>Q4</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">ESO Reporting Remarks</label>
                            <textarea className="wireframe-input h-20" value={remarks} onChange={e => setRemarks(e.target.value)}></textarea>
                        </div>
                    </div>
                </section>

                <div className="flex justify-between items-center border-t border-gray-300 pt-6">
                    <button type="button" className="text-gray-500 hover:text-gray-800 font-medium text-sm flex items-center" onClick={() => navigate('/beneficiaries-partners')}>
                        <X className="w-4 h-4 mr-1"/> Cancel & Back
                    </button>
                    <div className="flex space-x-4">
                        <button type="button" className="wireframe-btn flex items-center"><Paperclip className="w-4 h-4 mr-2" /> Save Draft</button>
                        <button type="submit" className="wireframe-btn-primary flex items-center"><Save className="w-4 h-4 mr-2" /> Save Record</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateAwardsReceivedPage;
