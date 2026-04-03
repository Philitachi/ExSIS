import React from 'react';
import PageHeader from '../../components/layout/PageHeader';
import FileUploadField from '../../components/common/FileUploadField';
import { useNavigate } from 'react-router-dom';
import { Save, Send } from 'lucide-react';

const ActivityTrainingReportPage = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-5xl mx-auto pb-12 text-sm md:text-base">
            <PageHeader title="Encode Activity / Training Report" subtitle="Record comprehensive accomplishment details for extension efforts." />

            <div className="space-y-6">
                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Report Details</h3>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="wireframe-label">Select Related Project / Program</label>
                            <select className="wireframe-input">
                                <option>PRJ-2026-004 - Basic Accounting for Micro-Enterprises</option>
                            </select>
                        </div>
                        <div>
                            <label className="wireframe-label">Title of Extension Project / Program</label>
                            <input type="text" className="wireframe-input bg-gray-50" disabled value="Basic Accounting limit for Micro-Enterprises" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="wireframe-label">Activity Title</label>
                                <input type="text" className="wireframe-input" />
                            </div>
                            <div>
                                <label className="wireframe-label">Date</label>
                                <input type="date" className="wireframe-input" />
                            </div>
                            <div>
                                <label className="wireframe-label">Venue</label>
                                <input type="text" className="wireframe-input" />
                            </div>
                            <div>
                                <label className="wireframe-label">Sustainable Development Goal (SDG)</label>
                                <select className="wireframe-input">
                                    <option>SDG 1: No Poverty</option>
                                    <option>SDG 4: Quality Education</option>
                                    <option>SDG 8: Decent Work & Economic Growth</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="wireframe-label">Narrative / Accomplishment Details</label>
                            <textarea className="wireframe-input h-32" placeholder="Provide full details of the results..."></textarea>
                        </div>
                    </div>
                </section>

                <section className="wireframe-card">
                    <h3 className="text-lg font-bold border-b border-gray-200 pb-2 mb-4">Attach Full Activity Report (Optional)</h3>
                    <p className="text-sm text-gray-500 mb-4">If the form above is insufficient, attach the official PDF encompassing the full report.</p>
                    <FileUploadField id="activity-report-doc" label="Upload Report Document (.pdf)" />
                </section>

                <div className="flex justify-end space-x-4 border-t border-gray-300 pt-6">
                    <button className="wireframe-btn" onClick={() => navigate('/documents-upload-center')}>Cancel</button>
                    <button className="wireframe-btn flex items-center"><Save className="w-4 h-4 mr-2" /> Save Draft</button>
                    <button className="wireframe-btn-primary flex items-center" onClick={() => navigate('/documents-upload-center')}><Send className="w-4 h-4 mr-2" /> Submit Completed Report</button>
                </div>
            </div>
        </div>
    );
};

export default ActivityTrainingReportPage;
