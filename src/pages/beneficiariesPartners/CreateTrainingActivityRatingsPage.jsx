import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FileUploadField from '../../components/common/FileUploadField';
import { projectProposals } from '../../data/mockProjectProposals';
import { useNavigate } from 'react-router-dom';
import { Save, X, Link as LinkIcon, Paperclip } from 'lucide-react';

const CreateTrainingActivityRatingsPage = () => {
    const navigate = useNavigate();

    // Section 1 State
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Training');
    const [projectId, setProjectId] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [durationHours, setDurationHours] = useState('');

    // Section 2 State
    const [numOfTrainees, setNumOfTrainees] = useState('');
    const [surveyed, setSurveyed] = useState('');
    const [weight, setWeight] = useState(0);
    const [weightedTrainees, setWeightedTrainees] = useState(0);

    // Section 3 State
    const [rating, setRating] = useState({ poor: 0, fair: 0, satisfied: 0, verySat: 0, excellent: 0 });

    // Section 4 State (Linked Records)
    const [linkedActivityReportId, setLinkedActivityReportId] = useState('');
    const [linkedAttendanceSheetId, setLinkedAttendanceSheetId] = useState('');
    const [linkedEvaluationRecordId, setLinkedEvaluationRecordId] = useState('');
    const [linkedSummaryOfEvaluationId, setLinkedSummaryOfEvaluationId] = useState('');

    // Mock Options for Section 4
    const mockReports = [
        { id: 'REP-001', title: 'Literacy Drive Phase 1 Report', projectId: 'PRJ-2026-001', status: 'Approved' },
        { id: 'REP-002', title: 'Urban Gardening Launch Report', projectId: 'PRJ-2026-003', status: 'Draft' }
    ];
    const mockAttendance = [
        { id: 'ATT-001', title: 'F-EXT-010: Literacy Session', projectId: 'PRJ-2026-001', date: '2026-08-15' },
        { id: 'ATT-002', title: 'F-EXT-010: Seed Planting', projectId: 'PRJ-2026-003', date: '2026-04-15' }
    ];
    const mockEvaluations = [
        { id: 'EVAL-001', title: 'Consolidated F-EXT-007 Dataset', projectId: 'PRJ-2026-001', count: 12 },
        { id: 'EVAL-002', title: 'Consolidated F-EXT-007 Dataset', projectId: 'PRJ-2026-003', count: 20 }
    ];
    const mockSummaries = [
        { id: 'SUM-001', title: 'F-EXT-008 Summary Evaluation', projectId: 'PRJ-2026-001', status: 'Final' }
    ];

    // Section 5 State
    const [quarter, setQuarter] = useState('Q1');
    const [remarks, setRemarks] = useState('');

    useEffect(() => {
        if (projectId) {
            const prj = projectProposals.find(p => p.id === projectId);
            if (prj) setProjectTitle(prj.title);
        } else {
            setProjectTitle('');
        }
    }, [projectId]);

    useEffect(() => {
        let hrs = parseFloat(durationHours);
        let w = 0;
        if (!isNaN(hrs) && hrs > 0) {
            if (hrs < 8) w = 0.5;
            else if (hrs < 16) w = 1;
            else if (hrs < 24) w = 1.25;
            else if (hrs < 40) w = 1.5;
            else w = 2;
        }
        setWeight(w);

        let trainees = parseInt(numOfTrainees);
        if (!isNaN(trainees)) setWeightedTrainees(trainees * w);
        else setWeightedTrainees(0);
    }, [durationHours, numOfTrainees]);

    const handleSave = (e) => {
        e.preventDefault();
        alert('Mock functionality: Successfully saved Training/Activity Rating and linked MOVs.');
        navigate('/beneficiaries-partners');
    };

    return (
        <div className="max-w-5xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader 
                title="Create Training / Activity Ratings Record" 
                subtitle="Record participation metrics, evaluation aggregated counts, and attach MOVs." 
            />

            <form onSubmit={handleSave} className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 1: Basic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Title of Training / Activity <span className="text-red-500">*</span></label>
                            <input type="text" className="wireframe-input" required value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label className="wireframe-label">Category</label>
                            <select className="wireframe-input" value={category} onChange={e => setCategory(e.target.value)}>
                                <option>Training</option>
                                <option>Activity</option>
                                <option>Extension Event</option>
                            </select>
                        </div>
                        <div>
                            <label className="wireframe-label">Related Project Proposal (Optional)</label>
                            <select className="wireframe-input" value={projectId} onChange={e => setProjectId(e.target.value)}>
                                <option value="">-- Standalone / Unaligned --</option>
                                {projectProposals.map(p => (
                                    <option key={p.id} value={p.id}>{p.id} - {p.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Project Title</label>
                            <input type="text" className="wireframe-input bg-gray-50 text-gray-500" readOnly value={projectTitle} placeholder="Auto-fills from related project..." />
                        </div>
                        <div>
                            <label className="wireframe-label">Start Date <span className="text-red-500">*</span></label>
                            <input type="date" className="wireframe-input" required value={startDate} onChange={e => setStartDate(e.target.value)} />
                        </div>
                        <div>
                            <label className="wireframe-label">End Date <span className="text-red-500">*</span></label>
                            <input type="date" className="wireframe-input" required value={endDate} onChange={e => setEndDate(e.target.value)} />
                        </div>
                        <div>
                            <label className="wireframe-label">Duration in terms of Hours <span className="text-red-500">*</span></label>
                            <input type="number" step="0.5" className="wireframe-input" required value={durationHours} onChange={e => setDurationHours(e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card border-gray-300 bg-gray-50">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 2: Computed Participation Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="wireframe-label">Weight per Duration</label>
                            <input type="text" className="wireframe-input bg-gray-200 text-gray-700 font-bold" readOnly value={weight} />
                            <p className="text-xs text-gray-400 mt-1">&lt;8hrs=0.5, 8hrs=1, 16hrs=1.25, 24-32hrs=1.5, 40hrs+=2</p>
                        </div>
                        <div>
                            <label className="wireframe-label">Number of Trainees <span className="text-red-500">*</span></label>
                            <input type="number" className="wireframe-input bg-white" required value={numOfTrainees} onChange={e => setNumOfTrainees(e.target.value)} />
                        </div>
                        <div>
                            <label className="wireframe-label">Weighted Trainees</label>
                            <input type="text" className="wireframe-input bg-gray-200 text-gray-700 font-bold" readOnly value={weightedTrainees} />
                        </div>
                        <div>
                            <label className="wireframe-label">Trainees Surveyed <span className="text-red-500">*</span></label>
                            <input type="number" className="wireframe-input bg-white" required value={surveyed} onChange={e => setSurveyed(e.target.value)} />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 3: Quality and Relevance Rating</h3>
                    <p className="text-sm text-gray-500 mb-4">Aggregate the counts of survey responses below based on the blank evaluation forms retrieved.</p>
                    <div className="grid grid-cols-5 gap-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200 pb-2 mb-2">
                        <div>1 (Poor)</div>
                        <div>2 (Fair)</div>
                        <div>3 (Satisfied)</div>
                        <div>4 (Very Sat)</div>
                        <div>5 (Excellent)</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 text-center">
                        <input type="number" className="wireframe-input text-center" value={rating.poor} onChange={e => setRating({...rating, poor: parseInt(e.target.value) || 0})} />
                        <input type="number" className="wireframe-input text-center" value={rating.fair} onChange={e => setRating({...rating, fair: parseInt(e.target.value) || 0})} />
                        <input type="number" className="wireframe-input text-center" value={rating.satisfied} onChange={e => setRating({...rating, satisfied: parseInt(e.target.value) || 0})} />
                        <input type="number" className="wireframe-input text-center" value={rating.verySat} onChange={e => setRating({...rating, verySat: parseInt(e.target.value) || 0})} />
                        <input type="number" className="wireframe-input text-center" value={rating.excellent} onChange={e => setRating({...rating, excellent: parseInt(e.target.value) || 0})} />
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 4: Linked Existing Records</h3>
                    <p className="text-sm text-gray-500 mb-4">Select pre-existing documents and evaluation logs already approved in other modules. These will form the core derived values for this record.</p>
                    <div className="grid grid-cols-1 gap-6 text-sm">
                        
                        <div className="border border-gray-200 p-4 bg-white rounded">
                            <label className="wireframe-label font-bold text-gray-800">Select Activity Report</label>
                            <select className="wireframe-input" value={linkedActivityReportId} onChange={e => setLinkedActivityReportId(e.target.value)}>
                                <option value="">-- No Activity Report Linked --</option>
                                {mockReports.filter(r => !projectId || r.projectId === projectId).map(r => (
                                    <option key={r.id} value={r.id}>{r.id} - {r.title} ({r.status})</option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Source: Documents / Upload Center</p>
                        </div>

                        <div className="border border-gray-200 p-4 bg-white rounded">
                            <label className="wireframe-label font-bold text-gray-800">Select Attendance Sheet (F-EXT-010)</label>
                            <select className="wireframe-input" value={linkedAttendanceSheetId} onChange={e => setLinkedAttendanceSheetId(e.target.value)}>
                                <option value="">-- No Attendance Sheet Linked --</option>
                                {mockAttendance.filter(a => !projectId || a.projectId === projectId).map(a => (
                                    <option key={a.id} value={a.id}>{a.id} - {a.title} ({a.date})</option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Source: Documents / Upload Center</p>
                        </div>

                        <div className="border border-gray-200 p-4 bg-white rounded">
                            <label className="wireframe-label font-bold text-gray-800">Select Evaluation Record Data (F-EXT-007)</label>
                            <select className="wireframe-input" value={linkedEvaluationRecordId} onChange={e => setLinkedEvaluationRecordId(e.target.value)}>
                                <option value="">-- No Evaluations Linked --</option>
                                {mockEvaluations.filter(e => !projectId || e.projectId === projectId).map(ev => (
                                    <option key={ev.id} value={ev.id}>{ev.id} - {ev.title} ({ev.count} evaluations)</option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Source: Monitor & Report</p>
                            
                            {linkedEvaluationRecordId && (
                                <div className="mt-4 p-3 border border-dashed border-gray-300 bg-gray-50">
                                    <label className="wireframe-label text-sm text-gray-700">Upload Signed Evaluation Forms (.pdf)</label>
                                    <p className="text-xs text-gray-500 mb-2">Attach scanned, signed copies of the evaluations you consolidated here.</p>
                                    <input type="file" multiple accept=".pdf" className="wireframe-input text-sm p-1 bg-white cursor-pointer" />
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 p-4 bg-white rounded">
                            <label className="wireframe-label font-bold text-gray-800">Select Summary of Evaluation (F-EXT-008)</label>
                            <select className="wireframe-input" value={linkedSummaryOfEvaluationId} onChange={e => setLinkedSummaryOfEvaluationId(e.target.value)}>
                                <option value="">-- No Summary Generated/Linked --</option>
                                {mockSummaries.filter(s => !projectId || s.projectId === projectId).map(s => (
                                    <option key={s.id} value={s.id}>{s.id} - {s.title} ({s.status})</option>
                                ))}
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Source: Documents / Upload Center</p>
                        </div>

                        <div className="border border-gray-200 p-4 bg-gray-50 rounded">
                            <label className="wireframe-label font-bold text-gray-800">Standalone Attachment: Program Flow / Activity</label>
                            <FileUploadField id="program-activity" label="Upload Program Activity / Matrix" />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Section 5: Reporting Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="wireframe-label">Quarter Accomplished <span className="text-red-500">*</span></label>
                            <select className="wireframe-input" value={quarter} onChange={e => setQuarter(e.target.value)}>
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

export default CreateTrainingActivityRatingsPage;
