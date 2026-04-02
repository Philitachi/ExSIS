import React, { useState } from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FileUploadField from '../../components/common/FileUploadField';
import { useNavigate } from 'react-router-dom';
import { Save, Send, Plus, Trash2 } from 'lucide-react';

const UploadSummaryReportPage = () => {
    const navigate = useNavigate();

    const [criteriaRows, setCriteriaRows] = useState([]);
    const [attendanceRows, setAttendanceRows] = useState([]);
    const [project, setProject] = useState('PRJ-2026-001');
    const [activityTitle, setActivityTitle] = useState('Basic Literacy Session');

    const handleAutoTally = () => {
        // Simulating the aggregation of multiple ACTIVITY_EVALUATION instances for this project/activity
        // Populating SUMMARY_EVALUATION_DETAILS payload
        setCriteriaRows([
            { id: 1, criteria: 'Relevance of Topic', poor: 0, fair: 0, satisfied: 1, verySat: 4, excellent: 5, mean: 4.4, adjectival: 'Very Satisfactory' },
            { id: 2, criteria: 'Resource Person', poor: 0, fair: 0, satisfied: 0, verySat: 2, excellent: 8, mean: 4.8, adjectival: 'Excellent' }
        ]);
        setAttendanceRows([
            { id: 1, category: 'Local Resident', agency: 'Barangay XYZ', participants: 10, evaluators: 10 }
        ]);
        alert("Mock: Successfully tallied data from 10 linked participant evaluations for this activity!");
    };

    const addCriteriaRow = () => {
        setCriteriaRows([...criteriaRows, { id: Date.now(), criteria: '', poor: 0, fair: 0, satisfied: 0, verySat: 0, excellent: 0, mean: '', adjectival: '' }]);
    };
    const removeCriteriaRow = (id) => setCriteriaRows(criteriaRows.filter(r => r.id !== id));

    const addAttendanceRow = () => {
        setAttendanceRows([...attendanceRows, { id: Date.now(), category: '', agency: '', participants: 0, evaluators: 0 }]);
    };
    const removeAttendanceRow = (id) => setAttendanceRows(attendanceRows.filter(r => r.id !== id));

    return (
        <div className="max-w-5xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader 
                title="Upload F-EXT-008" 
                subtitle="Extension Summary Report Form" 
                action={<button className="wireframe-btn" onClick={() => navigate('/project-proposals/PRJ-2026-001')}>Return to PRJ-2026-001</button>}
            />

            <div className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Report Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Select Related Project / Activity</label>
                            <select className="wireframe-input" value={project} onChange={e => setProject(e.target.value)}>
                                <option value="PRJ-2026-001">PRJ-2026-001 - Community Literacy Drive</option>
                                <option value="PRJ-2026-002">PRJ-2026-002 - Digital Livelihood Training</option>
                            </select>
                            <p className="text-xs text-gray-500 mt-1">Summary reports must link directly to an existing structured project framework.</p>
                        </div>
                        <div className="md:col-span-2">
                            <label className="wireframe-label">Activity Title</label>
                            <input type="text" className="wireframe-input" value={activityTitle} onChange={e => setActivityTitle(e.target.value)} />
                            <p className="text-xs text-gray-500 mt-1">Must strictly match the activity title utilized by participant evaluations to allow tallying.</p>
                        </div>
                        <div>
                            <label className="wireframe-label">Venue</label>
                            <input type="text" className="wireframe-input" />
                        </div>
                        <div>
                            <label className="wireframe-label">Activity Date</label>
                            <input type="date" className="wireframe-input" />
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <div className="flex justify-between items-start mb-4 border-b border-gray-200 pb-4">
                        <div>
                            <h3 className="text-lg font-bold">Evaluation Results (Criteria Means)</h3>
                            <p className="text-sm text-gray-500 font-medium mt-1">Aggregated from multiple individual ACTIVITY_EVALUATION respondent submissions.</p>
                        </div>
                        <button onClick={handleAutoTally} className="wireframe-btn-primary text-sm flex items-center py-1.5 px-3">
                            Tally from Linked Evaluations
                        </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded overflow-hidden mb-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Criteria</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Poor</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Fair</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Satisfied</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Very Sat.</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Excellent</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Mean Score</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Adjectival</th>
                                        <th className="px-2 py-3 w-8"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {criteriaRows.length === 0 ? (
                                        <tr>
                                            <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
                                                No records yet. Click "Add Criteria Row" to create one.
                                            </td>
                                        </tr>
                                    ) : (
                                        criteriaRows.map(row => (
                                            <tr key={row.id}>
                                                <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" placeholder="Criteria Name..." /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-14" /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-14" /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-14" /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-14" /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-14" /></td>
                                                <td className="p-2"><input type="number" step="0.01" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-20" /></td>
                                                <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white w-24" /></td>
                                                <td className="p-2"><button onClick={() => removeCriteriaRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button></td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <button onClick={addCriteriaRow} className="wireframe-btn text-sm flex items-center py-1.5 px-3 mb-6 font-medium text-gray-700 bg-white border border-gray-300">
                        <Plus className="w-4 h-4 mr-1.5"/> Add Criteria Row
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="wireframe-label font-bold text-gray-700">Overall Assessment Mean</label>
                            <div className="wireframe-input bg-gray-50 text-gray-400">Auto-calculated (Visual Only)</div>
                        </div>
                        <div>
                            <label className="wireframe-label font-bold text-gray-700">Overall Adjectival Rating</label>
                            <div className="wireframe-input bg-gray-50 text-gray-400">Auto-calculated (Visual Only)</div>
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-4 mb-4">Attendance Summary (Category/Sector)</h3>
                    
                    <div className="border border-gray-200 rounded overflow-hidden mb-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider w-1/3">Participant Category</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider w-1/3">Specified Agency</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Total Participants</th>
                                        <th className="px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider">Total Evaluators</th>
                                        <th className="px-2 py-3 w-8"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {attendanceRows.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                                                No records yet. Click "Add Summary Row" to create one.
                                            </td>
                                        </tr>
                                    ) : (
                                        attendanceRows.map(row => (
                                            <tr key={row.id}>
                                                <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" placeholder="e.g. Students, LGU..." /></td>
                                                <td className="p-2"><input type="text" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" /></td>
                                                <td className="p-2"><input type="number" className="wireframe-input py-1 px-2 h-8 text-xs bg-white" /></td>
                                                <td className="p-2"><button onClick={() => removeAttendanceRow(row.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button></td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <button onClick={addAttendanceRow} className="wireframe-btn text-sm flex items-center py-1.5 px-3 font-medium text-gray-700 bg-white border border-gray-300">
                        <Plus className="w-4 h-4 mr-1.5"/> Add Summary Row
                    </button>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Attach Physical File (Optional)</h3>
                    <FileUploadField id="f-ext-008-doc" label="Upload Signed Copy (.pdf)" />
                </section>

                <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
                    <button className="wireframe-btn" onClick={() => navigate('/documents-upload-center')}>Cancel</button>
                    <button className="wireframe-btn flex items-center"><Save className="w-4 h-4 mr-2" /> Save Draft</button>
                    <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/documents-upload-center')}><Send className="w-4 h-4 mr-2" /> Submit Report</button>
                </div>
            </div>
        </div>
    );
};

export default UploadSummaryReportPage;
